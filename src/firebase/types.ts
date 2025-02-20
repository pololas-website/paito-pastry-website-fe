export interface ISignupEmailPasswordParams extends client.IUser {
  password: string;
}

export interface IUpdateAccountParams {
  displayName?: string | null;
  photoURL?: string | null;
}
