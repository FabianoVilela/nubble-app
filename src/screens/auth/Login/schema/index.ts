import {z} from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, 'Campo obrigatório').email('E-mail inválido'),
  password: z.string().min(1, 'Campo obrigatório'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
