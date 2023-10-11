import validator from "validator";

export const isValidIban = (iban: string): boolean => validator.isIBAN(iban);

export const isPositiveNumber = (amount: number): boolean => {
  return amount > 0;
};

export const isDateAfterToday = (date: string): boolean =>
  new Date(date) > new Date();

export const isEMailWellFormed = (email: string) => validator.isEmail(email);

export const isStringValueInformed = (field: string): boolean => field !== "";

export const isValueNotNullOrUndefined = <T>(value: T): boolean => {
  return value !== null && value !== undefined;
};
