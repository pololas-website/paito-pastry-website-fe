import { Form, redirect } from 'react-router-dom';

import './signup.css';

import { Button, Input } from '../../components';
import { signupApi } from '../../api';

export default function SignUp() {
  return (
    <section className="signup container">
      <Form method="post" className="signup__form">
        <h4 className="heading-4 signup__title">Create an Account</h4>
        <Input type="text" name="fullName" placeholder="Full Name" required />
        <Input type="email" name="email" placeholder="Email Address" required />
        <Button type="submit" primary>
          Sign Up
        </Button>
      </Form>
    </section>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const { fullName, email } = Object.fromEntries(formData);
  await signupApi.signup(fullName, email);
  return redirect('/users');
}
