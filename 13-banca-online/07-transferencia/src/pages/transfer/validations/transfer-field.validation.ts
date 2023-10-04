import {
  isStringValueInformed,
  isValidIban,
  isPositiveNumber,
  isValueNotNullOrUndefined,
  isDateAfterToday,
  isEMailWellFormed,
  FieldValidationResult,
  INVALID_AMOUNT_MESSAGE,
  INVALID_EMAIL_MESSAGE,
  INVALID_IBAN_MESSAGE,
  INVALID_REAL_DATE_TRANSFER_MESSAGE,
  buildRequiredFieldValidationFailedResponse,
  buildValidationSucceeded,
  buildValidationFailedResponse,
} from "@/common/validations";

export const validateAccountIdField = (
  value: string
): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSucceeded();
};

export const validateIBANField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  if (!isValidIban(value)) {
    return buildValidationFailedResponse(INVALID_IBAN_MESSAGE);
  }

  return buildValidationSucceeded();
};

export const validateNameField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSucceeded();
};

export const validateAmountField = (value: number): FieldValidationResult => {
  if (!isPositiveNumber(value)) {
    return buildValidationFailedResponse(INVALID_AMOUNT_MESSAGE);
  }

  return buildValidationSucceeded();
};

export const validateConceptField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSucceeded();
};

export const validateNotesField = (_: string): FieldValidationResult =>
  buildValidationSucceeded();

export const validateRealDateTransferField = (
  value?: Date
): FieldValidationResult => {
  if (!isValueNotNullOrUndefined(value)) {
    return buildValidationSucceeded();
  }

  if (value && !isDateAfterToday(value)) {
    return buildValidationFailedResponse(INVALID_REAL_DATE_TRANSFER_MESSAGE);
  }

  return buildValidationSucceeded();
};

export const validateEmailField = (value?: string): FieldValidationResult => {
  if (!isValueNotNullOrUndefined(value)) {
    return buildValidationSucceeded();
  }

  if (value && !isEMailWellFormed(value)) {
    return buildValidationFailedResponse(INVALID_EMAIL_MESSAGE);
  }

  return buildValidationSucceeded();
};
