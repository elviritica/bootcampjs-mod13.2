import { mapCredentialsFromVmToApi } from "./login.mapper";
import * as apiModel from "./api/login.api-model";
import * as viewModel from "./login.vm";

describe("login.mapper specs", () => {
  it("should return a credential with same properties", () => {
    // Arrange
    const vmCredentials: viewModel.Credentials = {
      user: "myuser",
      password: "mypassword",
    };
    const expectedApiCredentials: apiModel.CredentialsAPI = {
      user: "myuser",
      password: "mypassword",
    };
    // Act
    const result: apiModel.CredentialsAPI =
      mapCredentialsFromVmToApi(vmCredentials);
    // Assert
    expect(result).toEqual(expectedApiCredentials);
  });
});
