import { Form, Link, redirect } from 'react-router-dom';
import { Button, Divider, Input } from '../../components';
import { logInWithEmailAndPassword } from '../../firebase';

import * as authStyles from './authentication.module.css';
import * as styles from './signIn.module.css';

export default function SignIn() {
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
        <Link className={styles['forgot-password']}>Forgot password?</Link>
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
          <div className={styles['signin-providers-container']}>
            <Divider label="or sign in with" />
            <div className={styles['provider-icons-container']}>
              <Button icon className={styles['google-icon']}>
                <i className="fa-brands fa-google"></i>
              </Button>
              <Button icon className={styles['facebook-icon']}>
                <i className="fa-brands fa-facebook"></i>
              </Button>
              <Button icon className={styles['x-twitter-icon']}>
                <i className="fa-brands fa-x-twitter"></i>
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </section>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const { email, password } = Object.fromEntries(formData);

  await logInWithEmailAndPassword(email, password);

  return redirect('/');
}
