import { FormValidationResult } from "@/common/validations";
import {
  validatePasswordField,
  validateUserField,
} from "./login-field.validation";
import { CredentialsFormErrors } from "./login.vm";

export const validateForm = (
  credentials: CredentialsFormErrors
): FormValidationResult<CredentialsFormErrors> => {
  const fieldValidationResult = [
    validateUserField(credentials.user),
    validatePasswordField(credentials.password),
  ];

  return {
    succeeded: fieldValidationResult.every((f) => f.succeeded),
    errors: {
      user: fieldValidationResult[0].errorMessage ?? "",
      password: fieldValidationResult[1].errorMessage ?? "",
    },
  };

};
