export interface Credentials {
  user: string;
  password: string;
}

export const createEmptyCredentials = (): Credentials => ({
  user: "",
  password: "",
});

export interface CredentialsformErrors {
  user: string;
  password: string;
}

export const createEmptyCredentialsformErrors = (): CredentialsformErrors => ({
  user: "",
  password: "",
});
