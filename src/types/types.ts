/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace client {
    interface IUser {
      name: string;
      lastName: string;
      email: string;
      birthday?: string;
    }
  }
}

export {};
