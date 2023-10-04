import {
  isStringValueInformed,
  isValidIban,
  isPositiveNumber,
  isValueNotNullOrUndefined,
  isDateAfterToday,
  isEMailWellFormed
} from "@/common/validations";
import { FieldValidationResult } from "../transfer.vm";

export const REQUIRED_FIELD_MESSAGE = "Debe informar el campo";
export const INVALID_IBAN_MESSAGE = "El IBAN no está bien formado";
export const INVALID_AMOUNT_MESSAGE = "El importe debe ser mayor que 0";
export const INVALID_REAL_DATE_TRANSFER_MESSAGE =
  "La fecha de ejecución debe ser posterior a la actual";
  export const INVALID_EMAIL_MESSAGE = "El email no está bien formado";

const buildValidationFailedResponse = (errorMessage: string) => ({
  succeeded: false,
  errorMessage,
});

const buildValidationSucceeded = () => ({
  succeeded: true,
});

const buildRequiredFieldValidationFailedResponse = () =>
  buildValidationFailedResponse(REQUIRED_FIELD_MESSAGE);

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

