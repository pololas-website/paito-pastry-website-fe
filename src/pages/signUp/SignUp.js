import { Form, redirect } from 'react-router-dom';

import { Button, Input, InputGroup, Date } from '../../components';

import { signUpWithEmailAndPassword } from '../../firebase';

import './signup.css';

export default function SignUp() {
  return (
    <section className="signup container">
      <Form method="post" className="signup__form">
        <h4 className="heading-4 signup__title">Create an Account</h4>
        <InputGroup>
          <Input type="text" name="fullName" placeholder="First Name" />
          <Input type="text" name="lastName" placeholder="Last Name" />
        </InputGroup>
        <Date label="Birthday" descriptionHelp="help text" />
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
  const { email, password } = Object.fromEntries(formData);
  const user = await signUpWithEmailAndPassword(email, password);

  console.log(user);

  return redirect('/users');
}
