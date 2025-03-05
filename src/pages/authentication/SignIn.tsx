import { Link, redirect, useNavigate, useSubmit } from 'react-router-dom';
import { Button, Divider, Input } from '../../components';
import { logInWithEmailAndPassword, signInWithGoogle } from '../../firebase';
import { SubmitHandler, useForm } from 'react-hook-form';

import authStyles from './authentication.module.css';
import styles from './signIn.module.css';
interface IFormData {
  email: string;
  password: string;
}

export default function SignIn() {
  const navigate = useNavigate();
  const submit = useSubmit();
  const { register, handleSubmit } = useForm<IFormData>();

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

  return (
    <section className={`container ${authStyles['auth-container']}`}>
      <form className={authStyles.form} onSubmit={handleSubmit(onSubmit)}>
        <h4 className={`heading-4 ${authStyles.title}`}>Welcome back!</h4>
        {/* TODO:
          Currently there's a warning in the console about: Function components cannot be given refs.
          This is due to when applying a special HOOK to the forwarded ref input component, The HOC is returning          
          a parameter component. The solution is that the HOC should return another forward component to
          delete this warning.
          Currently the typings are complex.
          Apply the proposed solution with the right typing.
          Components to test at this time: Input.
          HOC to test: withBaseInlineElement.
        */}
        <Input
          type="email"
          placeholder="Email Address"
          {...register('email', { required: true })}
        />
        <Input
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
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
