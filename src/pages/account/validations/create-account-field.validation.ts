import { FieldValidationResult, buildRequiredFieldValidationFailedResponse, buildValidationSucceededResult, isStringValueInformed } from "@/common/validations";

export const validateAccountTypeField = (value : string) : FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
      }
      return buildValidationSucceededResult();
}

export const validateAccountName = (value : string) : FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
      }
      return buildValidationSucceededResult();
}