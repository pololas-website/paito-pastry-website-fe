import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
import Button from '../components/button/Button';
import { signupApi } from '../api';

function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function handleInputChange(e) {
    if (e.target.name === 'name') {
      setFullName(e.target.value);
      return;
    }

    setEmail(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await signupApi.signup(fullName, email);
    navigate('/users');
  }

  return (
    <MainLayout>
      <section className="signup container">
        <form className="signup__form">
          <h4 className="heading-4 signup__title">Create an Account</h4>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Full Name"
            value={fullName}
            onChange={handleInputChange}
            required
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={handleInputChange}
            required
          />
          <Button type="submit" primary onClick={handleSubmit}>
            Sign Up
          </Button>
        </form>
      </section>
    </MainLayout>
  );
}

export default SignUp;
