import { useEffect, useRef } from 'react';
import { UseFormWatch, UseFormTrigger } from 'react-hook-form';
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

export function useWatchPasswordSection(
  watch: UseFormWatch<IFormData>,
  trigger: UseFormTrigger<IFormData>,
) {
  const previousValue = useRef<PasswordSEction>({
    password: undefined,
    confirmPassword: undefined,
  });

  useEffect(() => {
    const { unsubscribe } = watch(({ passwordSection }) => {
      const { password, confirmPassword } = passwordSection!;

      if (
        previousValue.current.password !== password ||
        previousValue.current.confirmPassword !== confirmPassword
      ) {
        previousValue.current.password = password;
        previousValue.current.confirmPassword = confirmPassword;
        if (password === confirmPassword) trigger('passwordSection');
      }
    });

    return () => unsubscribe();
  }, [watch, trigger]);
}

export function useWatchDateComponent(
  watch: UseFormWatch<IFormData>,
  trigger: UseFormTrigger<IFormData>,
) {
  const previousValue = useRef<DateComponent>({});

  useEffect(() => {
    const { unsubscribe } = watch(({ date }) => {
      if (JSON.stringify(date) !== JSON.stringify(previousValue.current)) {
        previousValue.current = { ...date };
        trigger('date');
      }
    });

    return () => unsubscribe();
  }, [watch, trigger]);
}
