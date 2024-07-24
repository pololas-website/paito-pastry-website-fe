import { postData } from './api';

const PATH = '/admin/signup';

export async function signup(fullName, email) {
  const body = JSON.stringify({ name: fullName, email });
  await postData(PATH, body);
}
