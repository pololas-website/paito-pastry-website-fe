import { z } from 'zod';
import isStrongPassword from 'validator/es/lib/isStrongPassword';

const EMAIL_ERROR_MESSAGE = 'Please provide a valid Email Address';
const PASSWORD_ERROR_MESSAGE =
  'The pasword should contain at least 8 characters with at least one: uppercase, lowercase, number and symbol character';

export const formSchema = z.object({
  email: z
    .string({ required_error: EMAIL_ERROR_MESSAGE })
    .email(EMAIL_ERROR_MESSAGE),
  /* TODO: 
    For the isStrongPassword validator, improve the validation in order to get the exact errors
    Examples to take on account:
    - if symbols are missing: the specific error message should reflect that and the same for the other parameters
    - make a strong password line animated interface as other applications like google or facebook.
    - with the strong password show if your password are strong/medium/weak according to the score obtained by the function.
  */
  password: z
    .string({ required_error: PASSWORD_ERROR_MESSAGE })
    .refine((p) => isStrongPassword(p), { message: PASSWORD_ERROR_MESSAGE }),
});
