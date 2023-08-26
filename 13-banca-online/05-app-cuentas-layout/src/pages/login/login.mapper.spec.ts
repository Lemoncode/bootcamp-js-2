import { mapCredentialFromVmToApi } from "./login.mapper";
import * as apiModel from "./api";
import * as viewModel from "./login.vm";

describe("login.mapper specs", () => {
  it("should return a credential with same properties", () => {
    // Arrange
    const vmCredentials: viewModel.Credentials = {
      user: "myuser",
      password: "mypassword",
    };

    const expectedApiCredentials: apiModel.Credentials = {
      user: "myuser",
      password: "mypassword",
    };

    // Act
    const result: apiModel.Credentials =
      mapCredentialFromVmToApi(vmCredentials);

    // Assert
    expect(result).toEqual(expectedApiCredentials);
  });
});
