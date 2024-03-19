import { ToastService } from './types';
import { useToastContext } from './useToastContext';

export const useToast = (): ToastService => {
  return useToastContext();
};
