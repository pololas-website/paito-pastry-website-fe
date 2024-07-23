import MainLayout from '../layout/MainLayout';

function SignUp() {
  return (
    <MainLayout>
      <section className="signup container">
        <form action="/register" className="signup__form" method="post">
          <h4 className="heading-4 signup__title">Create an Account</h4>
          <div className="input">
            <input type="text" name="name" placeholder="Full Name" required />
          </div>
          <div className="input">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
          <button type="submit" className="btn btn--primary">
            Sign Up
          </button>
        </form>
      </section>
    </MainLayout>
  );
}

export default SignUp;
