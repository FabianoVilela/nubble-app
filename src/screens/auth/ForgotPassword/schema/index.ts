import { z } from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().min(1, 'Campo obrigatório').email('E-mail inválido'),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
