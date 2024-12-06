import { Form, redirect } from 'react-router-dom';

import {
  Button,
  Input,
  InputGroup,
  Date as DateComponent,
} from '../../components';

import { signUpWithEmailAndPassword } from '../../firebase';

import * as styles from './authentication.module.css';

export default function SignUp() {
  return (
    <section className={`container ${styles['auth-container']}`}>
      <Form method="post" className={styles.form}>
        <h4 className={`heading-4 ${styles.title}`}>Create an Account</h4>
        <InputGroup>
          <Input type="text" name="name" placeholder="First Name" />
          <Input type="text" name="lastName" placeholder="Last Name" />
        </InputGroup>
        <DateComponent label="Birthday" descriptionHelp="help text" />
        <Input type="email" name="email" placeholder="Email Address" required />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Passwrod"
        />
        <Button type="submit" primary>
          Sign Up
        </Button>
      </Form>
    </section>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const fields = Object.fromEntries(formData);
  const { day, month, year } = fields;
  const birthday = new Date(`${year} ${month} ${day}`).toLocaleDateString();

  await signUpWithEmailAndPassword({ ...fields, birthday });

  return redirect('/users');
}
