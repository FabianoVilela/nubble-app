export type ToastPosition = 'top' | 'bottom';
export type ToastType = 'success' | 'error';

export interface Toast {
  message: string;
  type?: ToastType;
  duration?: number;
  action?: {
    title: string;
    onPress: () => void;
  };
  position?: ToastPosition;
}

export interface ToastService {
  toast: Toast | null;
  showToast: (toast: Toast) => void;
  hideToast: () => void;
}
