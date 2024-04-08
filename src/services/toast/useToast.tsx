import { useToastServiceZustand, useToastZustand } from '@services';

import { ToastService } from './types';

export const useToast = (): ToastService['toast'] => {
  return useToastZustand();
};

export function useToastService(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  return useToastServiceZustand();
}
