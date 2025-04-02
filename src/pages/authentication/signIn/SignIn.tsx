import { Link, redirect, useNavigate, useSubmit } from 'react-router-dom';
import { Button, Divider, Input } from '../../../components';
import { logInWithEmailAndPassword, signInWithGoogle } from '../../../firebase';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from './signIn.schema';

import authStyles from '../authentication.module.css';
import styles from './signIn.module.css';
import { zodRequiredOption } from '../../../components/core/utils/form.utils';

interface IFormData {
  email: string;
  password: string;
}

export default function SignIn() {
  const navigate = useNavigate();
  const submit = useSubmit();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: zodResolver(formSchema) });

  const handleOnSignInWithGoogle = async () => {
    await signInWithGoogle();
    navigate('/');
  };

  const handleSignInSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);

    handleSubmit(() => {
      submit(formData, { method: 'POST' });
    })(e);
  };

  return (
    <section className={`container ${authStyles['auth-container']}`}>
      <form className={authStyles.form} onSubmit={handleSignInSubmit}>
        <h4 className={`heading-4 ${authStyles.title}`}>Welcome back!</h4>
        <Input
          type="email"
          placeholder="Email Address"
          error={errors.email?.message}
          {...register('email', zodRequiredOption)}
        />
        <Input
          type="password"
          placeholder="Password"
          error={errors.password?.message}
          {...register('password', zodRequiredOption)}
        />

        <Button type="submit" className={styles['signin-button']}>
          Sign In
        </Button>
        <Link className={styles['forgot-password']} to="">
          Forgot password?
        </Link>
        <div className={styles['create-account-container']}>
          <Divider />
          <Button
            as={Link}
            to="/signup"
            className={styles['create-account-button']}
            primary
          >
            Create new account
          </Button>
          <Divider label="or sign in with" />
          <div className={styles['provider-icons-container']}>
            <Button
              small
              type="button"
              className={styles['google-icon']}
              onClick={handleOnSignInWithGoogle}
            >
              <i className="fa-brands fa-google"></i> Google
            </Button>
            <Button small type="button" className={styles['facebook-icon']}>
              <i className="fa-brands fa-facebook"></i> Facebook
            </Button>
            <Button small type="button" className={styles['x-twitter-icon']}>
              <i className="fa-brands fa-x-twitter"></i> X-twitter
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const { email, password } = Object.fromEntries(formData);

  await logInWithEmailAndPassword(email as string, password as string);

  return redirect('/');
}
