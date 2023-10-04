import { validateForm } from "./transfer-form.validation";
import * as transferFieldValidation from "./transfer-field.validation";
import { TransferVm } from "../transfer.vm";
import { vi } from "vitest";

describe("transfer-form.validation specs", () => {
  describe("validateForm", () => {
    it("should return true when all fields are correct", () => {
      // Arrange
      const transfer: TransferVm = {
        accountId: "1",
        iban: "ES91 2100 0418 4502 0005 1332",
        name: "John Doe",
        amount: 1,
        concept: "Test",
        notes: "",
        dateTransfer: "",
        realDateTransfer: undefined,
        email: "",
      };

      vi.spyOn(transferFieldValidation, "validateIBANField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateNameField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateAmountField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateConceptField").mockReturnValue(
        {
          succeeded: true,
        }
      );
      vi.spyOn(transferFieldValidation, "validateNotesField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(
        transferFieldValidation,
        "validateRealDateTransferField"
      ).mockReturnValue({ succeeded: true });
      vi.spyOn(transferFieldValidation, "validateEmailField").mockReturnValue({
        succeeded: true,
      });

      // Act
      const result = validateForm(transfer);

      // Assert
      expect(result.succeeded).toBeTruthy();
      expect(result.errors).toEqual({
        accountId: "",
        iban: "",
        name: "",
        amount: "",
        concept: "",
        notes: "",
        realDateTransfer: "",
        email: "",
        dateTransfer: "",
      });
    });

    it("should return false when validateNameFieldAmount is incorrect", () => {
      // Arrange
      const transfer: TransferVm = {
        accountId: "1",
        iban: "ES91 2100 0418 4502 0005 1332",
        name: "",
        amount: 1,
        concept: "Test",
        notes: "",
        dateTransfer: "",
        email: "",
      };

      vi.spyOn(transferFieldValidation, "validateIBANField").mockReturnValue({
        succeeded: true,
      });

      vi.spyOn(transferFieldValidation, "validateNameField").mockReturnValue({
        succeeded: false,
        errorMessage: "Error",
      });

      vi.spyOn(transferFieldValidation, "validateAmountField").mockReturnValue({
        succeeded: true,
      });

      vi.spyOn(transferFieldValidation, "validateConceptField").mockReturnValue(
        {
          succeeded: true,
        }
      );

      vi.spyOn(transferFieldValidation, "validateNotesField").mockReturnValue({
        succeeded: true,
      });

      vi.spyOn(
        transferFieldValidation,
        "validateRealDateTransferField"
      ).mockReturnValue({ succeeded: true });

      vi.spyOn(transferFieldValidation, "validateEmailField").mockReturnValue({
        succeeded: true,
      });

      // Act
      const result = validateForm(transfer);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        accountId: "",
        iban: "",
        name: "Error",
        amount: "",
        concept: "",
        notes: "",
        realDateTransfer: "",
        email: "",
        dateTransfer: "",
      });
      // Do the same with the rest of the fields
    });
  });
});
