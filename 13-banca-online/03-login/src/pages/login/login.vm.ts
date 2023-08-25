export interface Credentials {
  user: string;
  password: string;
}

export const createEmptyCredentials = (): Credentials => ({
  user: "",
  password: "",
});
