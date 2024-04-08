import { useEffect } from 'react';

import { useToast, useToastService } from '@services';

import { ToastContent } from './components/ToastContent';

const DEFAULT_DURATION = 2000;

export const Toast = () => {
  const toast = useToast();
  const { hideToast } = useToastService();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, toast.duration || DEFAULT_DURATION);
    }
  }, [hideToast, toast]);

  if (!toast) {
    return null;
  }

  return <ToastContent toast={toast} />;
};
