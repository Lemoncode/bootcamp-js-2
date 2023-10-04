import {
  FieldValidationResult,
  buildRequiredFieldValidationFailedResponse,
  buildValidationSucceeded,
  isStringValueInformed,
} from "@/common/validations";

export const validateUserField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSucceeded();
};

export const validatePasswordField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSucceeded();
};
