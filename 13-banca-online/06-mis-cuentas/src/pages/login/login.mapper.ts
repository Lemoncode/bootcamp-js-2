import * as apiModel from "./api";
import * as viewModel from "./login.vm";

export const mapCredentialFromVmToApi = (
  credential: viewModel.Credentials
): apiModel.Credentials => ({
  user: credential.user,
  password: credential.password,
});
