import { redirect, useSubmit } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Button,
  Input,
  InputGroup,
  Date as DateComponent,
  Select,
} from '../../../components';
import { signUpWithEmailAndPassword } from '../../../firebase';
import { formSchema } from './signUp.schema';

import styles from '../authentication.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { zodRequiredOption } from '../../../components/core/utils/form.utils';

interface IFormData {
  name: string;
  lastName: string;
  email: string;
  passwordSection: {
    password: string;
    confirmPassword: string;
  };
  date: {
    month: string;
    day: number;
    year: number;
  };
}

export default function SignUp() {
  const submit = useSubmit();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: zodResolver(formSchema) });

  const handleSignUpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);

    handleSubmit(() => {
      submit(formData, { method: 'POST' });
    })(e);
  };

  return (
    <section className={`container ${styles['auth-container']}`}>
      <form className={styles.form} onSubmit={handleSignUpSubmit}>
        <h4 className={`heading-4 ${styles.title}`}>Create an Account</h4>
        <InputGroup>
          <Input
            type="text"
            placeholder="First Name"
            short
            error={errors.name?.message}
            errorMode="bubble"
            {...register('name', zodRequiredOption)}
          />
          <Input
            type="text"
            placeholder="Last Name"
            short
            error={errors.lastName?.message}
            errorMode="bubble"
            {...register('lastName', zodRequiredOption)}
          />
        </InputGroup>
        <DateComponent>
          {({ onChange, ...monthRestProps }, dayProps, yearProps) => (
            <InputGroup
              label="Birthday"
              descriptionHelp="Change the description!"
            >
              <Select
                error={!!errors.date?.message}
                {...monthRestProps}
                {...register('date.month', { onChange })}
              />
              <Select
                error={!!errors.date?.message}
                {...dayProps}
                {...register('date.day', { valueAsNumber: true })}
              />
              <Select
                error={!!errors.date?.message}
                {...yearProps}
                {...register('date.year', { valueAsNumber: true })}
              />
            </InputGroup>
          )}
        </DateComponent>
        <Input
          type="email"
          placeholder="Email Address"
          error={errors.email?.message}
          errorMode="bubble"
          {...register('email', zodRequiredOption)}
        />
        <Input
          type="password"
          placeholder="Password"
          error={errors.passwordSection?.password?.message}
          errorMode="bubble"
          {...register('passwordSection.password', zodRequiredOption)}
        />
        <Input
          type="password"
          placeholder="Confirm Passwrod"
          error={errors.passwordSection?.confirmPassword?.message}
          errorMode="bubble"
          {...register('passwordSection.confirmPassword', zodRequiredOption)}
        />
        <Button type="submit" primary>
          Sign Up
        </Button>
      </form>
    </section>
  );
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const day = formData.get('day');
  const month = formData.get('month');
  const year = formData.get('year');
  const birthday = new Date(`${year} ${month} ${day}`).toLocaleDateString();

  await signUpWithEmailAndPassword(
    formData.get('name') as string,
    formData.get('lastName') as string,
    formData.get('email') as string,
    birthday,
    formData.get('password') as string,
  );

  return redirect('/users');
}
