import {
  FieldValidationResult,
  isStringValueInformed,
  buildRequiredFieldValidationFailedResponse,
  buildValidationSucceededResult,
} from "@/common/validations";

export const validateUserField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSucceededResult();
};

export const validatePasswordField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSucceededResult();
};
