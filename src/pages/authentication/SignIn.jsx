import { Form } from 'react-router-dom';
import { Button, Input } from '../../components';

import * as styles from './authentication.module.css';

function SignIn() {
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

export default SignIn;
