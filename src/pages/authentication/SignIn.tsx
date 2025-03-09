import { Link, redirect, useNavigate, useSubmit } from 'react-router-dom';
import { Button, Divider, Input } from '../../components';
import { logInWithEmailAndPassword, signInWithGoogle } from '../../firebase';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import isStrongPassword from 'validator/es/lib/isStrongPassword';

import authStyles from './authentication.module.css';
import styles from './signIn.module.css';
interface IFormData {
  email: string;
  password: string;
}

const EMAIL_ERROR_MESSAGE = 'Please provide a valid Email Address';
const PASSWORD_ERROR_MESSAGE =
  'The pasword should contain at least 8 characters with at least one: uppercase, lowercase, number and symbol character';

const formSchema = z.object({
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

export default function SignIn() {
  const navigate = useNavigate();
  const submit = useSubmit();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: zodResolver(formSchema) });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    submit(formData, { method: 'POST' });
  };

  const handleOnSignInWithGoogle = async () => {
    await signInWithGoogle();
    navigate('/');
  };

  // TODO: Implement errors user Interface in the forms and delete this console.log
  console.log(errors);

  return (
    <section className={`container ${authStyles['auth-container']}`}>
      <form className={authStyles.form} onSubmit={handleSubmit(onSubmit)}>
        <h4 className={`heading-4 ${authStyles.title}`}>Welcome back!</h4>
        <Input
          type="email"
          placeholder="Email Address"
          {...register('email')}
        />
        <Input
          type="password"
          placeholder="Password"
          {...register('password')}
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
