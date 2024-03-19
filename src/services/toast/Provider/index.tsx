import { PropsWithChildren, createContext, useState } from 'react';

import { Toast, ToastService } from '../types';

export const ToastContext = createContext<ToastService>({
  toast: null,
  showToast: () => {},
  hideToast: () => {},
});

export const ToastProvider = ({ children }: PropsWithChildren<{}>) => {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  const showToast = (toastComponent: Toast) => {
    setToast(toastComponent);
  };

  const hideToast = () => {
    setToast(null);
  };

  return (
    <ToastContext.Provider value={{ toast, showToast, hideToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
