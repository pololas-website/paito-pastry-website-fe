import { useEffect, useRef } from 'react';
import { UseFormWatch, UseFormTrigger, FieldErrors } from 'react-hook-form';
import { IFormData } from './SignUp';

type PasswordSEction = {
  password?: string;
  confirmPassword?: string;
};

type DateComponent = {
  day?: number;
  month?: string;
  year?: number;
};

/* TODO:
  When modify an schema object in zod the validation is correctly done
  but the object error is not updated, the following hooks solve this problem for
  the date and passwordSection objects in our schemas.
  The task is check if reack-hook-form solves this issue. For more infor see:
  https://github.com/react-hook-form/react-hook-form/issues/12080
  https://github.com/orgs/react-hook-form/discussions/12188
*/
export function useWatchPasswordSection(
  watch: UseFormWatch<IFormData>,
  trigger: UseFormTrigger<IFormData>,
  hasBeenSubmitted: boolean,
  errors: FieldErrors<IFormData>,
) {
  const previousValue = useRef<PasswordSEction>({
    password: undefined,
    confirmPassword: undefined,
  });

  useEffect(() => {
    const { unsubscribe } = watch(({ passwordSection }) => {
      const { password, confirmPassword } = passwordSection!;
      const isThereAnyPasswordError =
        !!errors.passwordSection?.password ||
        !!errors.passwordSection?.confirmPassword;
      const areThePreviousPasswordsDifferent =
        previousValue.current.password !== password ||
        previousValue.current.confirmPassword !== confirmPassword;

      if (
        hasBeenSubmitted &&
        !isThereAnyPasswordError &&
        areThePreviousPasswordsDifferent
      ) {
        previousValue.current.password = password;
        previousValue.current.confirmPassword = confirmPassword;
        trigger('passwordSection');
      }
    });

    return () => unsubscribe();
  }, [
    watch,
    trigger,
    hasBeenSubmitted,
    errors.passwordSection?.password,
    errors.passwordSection?.confirmPassword,
  ]);
}

export function useWatchDateComponent(
  watch: UseFormWatch<IFormData>,
  trigger: UseFormTrigger<IFormData>,
  hasBeenSubmitted: boolean,
) {
  const previousValue = useRef<DateComponent>({});

  useEffect(() => {
    const { unsubscribe } = watch(({ date }) => {
      if (
        hasBeenSubmitted &&
        JSON.stringify(date) !== JSON.stringify(previousValue.current)
      ) {
        previousValue.current = { ...date };
        trigger('date');
      }
    });

    return () => unsubscribe();
  }, [watch, trigger, hasBeenSubmitted]);
}
