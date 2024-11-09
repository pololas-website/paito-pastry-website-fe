import { Form, redirect } from 'react-router-dom';

import './signup.css';

import { Button, Input, InputGroup, Select } from '../../components';
import { signupApi } from '../../api';

export default function SignUp() {
  return (
    <section className="signup container">
      <Form method="post" className="signup__form">
        <h4 className="heading-4 signup__title">Create an Account</h4>
        <InputGroup>
          <Input
            type="text"
            name="fullName"
            placeholder="First Name"
            required
          />
          <Input type="text" name="lastName" placeholder="Last Name" required />
        </InputGroup>
        <InputGroup label="Birthday" descriptionHelp="help text">
          <Select options={[]} name="month" required />
          <Select options={[]} name="day" required />
          <Select options={[]} name="year" required />
        </InputGroup>
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
          required
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
  const { fullName, email } = Object.fromEntries(formData);
  await signupApi.signup(fullName, email);
  return redirect('/users');
}
