import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'El nombre debe tener al menos 3 caracteres.' }),
  email: z.string().email(),
  message: z
    .string()
    .min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
