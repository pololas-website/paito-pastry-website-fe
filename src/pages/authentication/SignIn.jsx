import { Form, redirect } from 'react-router-dom';
import { Button, Input } from '../../components';
import { logInWithEmailAndPassword } from '../../firebase';

import * as styles from './authentication.module.css';

export default function SignIn() {
  return (
    <section className={`container ${styles['auth-container']}`}>
      <Form method="post" className={styles.form}>
        <h4 className={`heading-4 ${styles.title}`}>Welcome back!</h4>
        <Input type="email" name="email" placeholder="Email Address" required />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <Button type="submit" primary>
          Sign In
        </Button>
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
