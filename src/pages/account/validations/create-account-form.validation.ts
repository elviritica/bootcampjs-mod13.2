import { FormValidationResult } from "@/common/validations";
import { AccountError, AccountVM } from "../account.vm";
import {
  validateAccountTypeField,
  validateAccountName,
} from "./create-account-field.validation";

export const validateForm = (
  account: AccountVM
): FormValidationResult<AccountError> => {
  const fieldValidationResult = [
    validateAccountTypeField(account.type),
    validateAccountName(account.name),
  ];

  const formValidationResult = {
    succeeded: fieldValidationResult.every((f) => f.succeeded),
    errors: {
      type: fieldValidationResult[0].errorMessage ?? "",
      name: fieldValidationResult[1].errorMessage ?? "",
    },
  };

  return formValidationResult;
};
