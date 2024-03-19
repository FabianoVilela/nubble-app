import { useContext } from 'react';

import { ToastContext } from './Provider';
import { ToastService } from './types';

export const useToastContext = (): ToastService => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('Toast must be used within a ToastProvider');
  }

  return context;
};
