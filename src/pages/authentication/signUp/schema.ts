import { z } from 'zod';

export const signUpSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  confirmPasswrod: z.string(),
});
