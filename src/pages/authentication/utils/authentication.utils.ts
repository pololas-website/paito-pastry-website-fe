export const INVALID_EMAIL_MESSAGE = 'Please provide a valid Email Address';
export const INVALID_PASSWORD_MESSAGE =
  'The pasword should contain at least one of these: uppercase, lowercase, number and symbol';

export const REQUIRED_NAME_MESSAGE = getRequiredMessage('Name');
export const REQUIRED_LAST_NAME_MESSAGE = getRequiredMessage('Last Name');
export const REQUIRED_EMAIL_MESSAGE = getRequiredMessage('Email');
export const REQUIRED_PASSWORD_MESSAGE = getRequiredMessage('Password');
export const REQUIRED_CONFIRM_PASSWORD_MESSAGE =
  getRequiredMessage('"Confirm Password"');

export const MIN_LENGTH_PASSWORD_MESSAGE =
  'The pasword should contain at least 8 characters';

export const CONFIRM_PASSWORD_MATCH_MESSAGE =
  'The confirm password does not match the password';

export const YOUNGER_THAN_EITHEEN_MESSAGE =
  'You must be at least 18 years old to register';

function getRequiredMessage(name: string) {
  return `The ${name} is required`;
}
