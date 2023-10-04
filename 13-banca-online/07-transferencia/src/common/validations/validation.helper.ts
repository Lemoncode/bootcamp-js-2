import { REQUIRED_FIELD_MESSAGE } from "./validation.const";
import { FieldValidationResult } from "./validation.model";

export const buildValidationFailedResponse = (
  errorMessage: string
): FieldValidationResult => ({
  succeeded: false,
  errorMessage,
});

export const buildValidationSucceeded = () => ({
  succeeded: true,
});

export const buildRequiredFieldValidationFailedResponse =
  (): FieldValidationResult =>
    buildValidationFailedResponse(REQUIRED_FIELD_MESSAGE);
