import * as apiModel from "./api";
import { mapAccountListFromApiToVm } from "./account-list.mapper";

describe("pages/account-list/account-list.mapper specs", () => {
  describe("mapAccountListFromApiToVm", () => {
    it("should return empty array when it feeds empty array", () => {
      // Arrange
      const accountList: apiModel.Account[] = [
        {
          id: "1",
          iban: "ES91 2100 0418 4502 0005 1332",
          type: "1",
          name: "Gastos mes",
          balance: 1490,
          lastTransaction: "2019-12-09T21:30:00",
        },
        {
          id: "2",
          iban: "ES79 2100 0813 6101 2345 6789",
          type: "3",
          name: "Compartida",
          balance: 2480,
          lastTransaction: "2019-11-21T14:07:38",
        },
      ];

      // Act
      const result = mapAccountListFromApiToVm(accountList);

      // Assert
      expect(result).toEqual([
        {
          id: "1",
          iban: "ES91 2100 0418 4502 0005 1332",
          name: "Gastos mes",
          balance: "1490",
          lastTransaction: new Date("2019-12-09T21:30:00"),
        },
        {
          id: "2",
          iban: "ES79 2100 0813 6101 2345 6789",
          name: "Compartida",
          balance: "2480",
          lastTransaction: new Date("2019-11-21T14:07:38"),
        },
      ]);
    });
  });
});
