import { AuthCredentials, authApi, authService } from '@domain';
import { RequestConfig, api } from './config';

type InterceptorProps = {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
};

export const registerInterceptor = ({
  authCredentials,
  removeCredentials,
  saveCredentials,
}: InterceptorProps) => {
  const interceptor = api.interceptors.response.use(
    (response) => response,
    async (responseError) => {
      const failedRequest = responseError.config as RequestConfig;
      const hasNotRefreshToken = !authCredentials?.refreshToken;
      const isRefreshTokenRequest = authApi.isRefreshTokenRequest(failedRequest);
      let sent = false;

      if (responseError.response.status === 401) {
        if (hasNotRefreshToken || isRefreshTokenRequest || sent) {
          removeCredentials();

          return Promise.reject(responseError);
        }

        sent = true;

        const newAuthCredentials = await authService.authenticateByRefreshToken(
          authCredentials?.refreshToken,
        );

        saveCredentials(newAuthCredentials);

        if (failedRequest.headers) {
          failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;
        }

        return api(failedRequest);
      }

      return Promise.reject(responseError);
    },
  );

  // NOTE: Remove listener when component unmount
  return () => api.interceptors.response.eject(interceptor);
};
