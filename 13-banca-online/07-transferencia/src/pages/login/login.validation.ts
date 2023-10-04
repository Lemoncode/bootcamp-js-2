import { Credentials, CredentialsformErrors } from "./login.vm";
import { FormValidationResult } from "@/common/validations";
import {
  validateUserField,
  validatePasswordField,
} from "./login-field.validation";

export const validateForm = (
  credentials: Credentials
): FormValidationResult<CredentialsformErrors> => {
  const fieldValidationResults = [
    validateUserField(credentials.user),
    validatePasswordField(credentials.password),
  ];

  const formValidationResult: FormValidationResult<CredentialsformErrors> = {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      user: fieldValidationResults[0].errorMessage ?? "",
      password: fieldValidationResults[1].errorMessage ?? "",
    },
  };

  return formValidationResult;
};
