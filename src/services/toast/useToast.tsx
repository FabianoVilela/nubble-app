import { PropsWithChildren, createContext, useContext, useState } from 'react';

interface Toast {
  message: string;
  type?: 'success' | 'error';
  duration?: number;
  action?: {
    title: string;
    onPress: () => void;
  };
}

interface ToastService {
  toast: Toast | null;
  showToast: (toast: Toast) => void;
  hideToast: () => void;
}

const ToastContext = createContext<ToastService>({
  toast: null,
  showToast: () => {},
  hideToast: () => {},
});

export const ToastProvider = ({ children }: PropsWithChildren<{}>) => {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  const showToast = (_toast: Toast) => {
    setToast(_toast);
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

export const useToast = (): ToastService => {
  const { toast, hideToast, showToast } = useContext(ToastContext);

  return {
    toast,
    showToast,
    hideToast,
  };
};
