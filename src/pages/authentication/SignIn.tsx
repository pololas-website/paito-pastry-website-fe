import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { Button, Divider, Input } from '../../components';
import { logInWithEmailAndPassword, signInWithGoogle } from '../../firebase';

import authStyles from './authentication.module.css';
import styles from './signIn.module.css';

// Initial commit for implement the application form validation

export default function SignIn() {
  const navigate = useNavigate();

  const handleOnSignInWithGoogle = async () => {
    await signInWithGoogle();
    navigate('/');
  };

  return (
    <section className={`container ${authStyles['auth-container']}`}>
      <Form method="post" className={authStyles.form}>
        <h4 className={`heading-4 ${authStyles.title}`}>Welcome back!</h4>
        <Input type="email" name="email" placeholder="Email Address" required />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
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
      </Form>
    </section>
  );
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const { email, password } = Object.fromEntries(formData);

  await logInWithEmailAndPassword(email as string, password as string);

  return redirect('/');
}
