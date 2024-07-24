import { getData } from './api';

const PATH = '/admin/users';

export async function getUsers() {
  return (await getData(PATH)).json();
}
