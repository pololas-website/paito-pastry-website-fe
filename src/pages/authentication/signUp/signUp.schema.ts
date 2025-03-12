import { z } from 'zod';
import isStrongPassword from 'validator/es/lib/isStrongPassword';
import {
  CONFIRM_PASSWORD_MATCH_MESSAGE,
  INVALID_PASSWORD_MESSAGE,
  MIN_LENGTH_PASSWORD_MESSAGE,
  REQUIRED_CONFIRM_PASSWORD_MESSAGE,
  REQUIRED_EMAIL_MESSAGE,
  REQUIRED_LAST_NAME_MESSAGE,
  REQUIRED_NAME_MESSAGE,
  REQUIRED_PASSWORD_MESSAGE,
  YOUNGER_THAN_EITHEEN_MESSAGE,
} from '../utils/authentication.utils';
import { hasPassedMoreThanNumberOfYears } from '../../../utils/dateUtils';

/* TODO: 
    For the isStrongPassword validator, improve the validation in order to get the exact errors
    Examples to take on account:
    - if symbols are missing: the specific error message should reflect that and the same for the other parameters
    - make a strong password line animated interface as other applications like google or facebook.
    - with the strong password show if your password are strong/medium/weak according to the score obtained by the function.
  */
export const formSchema = z.object({
  name: z.string({ required_error: REQUIRED_NAME_MESSAGE }),
  lastName: z.string({ required_error: REQUIRED_LAST_NAME_MESSAGE }),
  email: z.string({ required_error: REQUIRED_EMAIL_MESSAGE }),
  passwordSection: z
    .object({
      password: z
        .string({ required_error: REQUIRED_PASSWORD_MESSAGE })
        .min(8, MIN_LENGTH_PASSWORD_MESSAGE)
        .refine((p) => isStrongPassword(p), {
          message: INVALID_PASSWORD_MESSAGE,
        }),
      confirmPassword: z.string({
        required_error: REQUIRED_CONFIRM_PASSWORD_MESSAGE,
      }),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      message: CONFIRM_PASSWORD_MATCH_MESSAGE,
    }),
  date: z
    .object({
      month: z.string(),
      day: z.number(),
      year: z.number(),
    })
    .refine(
      ({ month, day, year }) =>
        hasPassedMoreThanNumberOfYears(18, new Date(`${year} ${month} ${day}`)),
      { message: YOUNGER_THAN_EITHEEN_MESSAGE },
    ),
});
