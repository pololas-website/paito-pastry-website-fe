import { z } from 'zod';
import {
  INVALID_EMAIL_MESSAGE,
  REQUIRED_EMAIL_MESSAGE,
  REQUIRED_PASSWORD_MESSAGE,
} from '../utils/authentication.utils';

export const formSchema = z.object({
  email: z
    .string({ required_error: REQUIRED_EMAIL_MESSAGE })
    .email(INVALID_EMAIL_MESSAGE),
  password: z.string({ required_error: REQUIRED_PASSWORD_MESSAGE }),
});
