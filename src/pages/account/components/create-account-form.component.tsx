import React from "react";
import {
  AccountError,
  AccountVM,
  createEmptyAccount,
  createEmptyAccountError,
} from "../account.vm";
import classes from "./create-account-form.component.module.css";
import { validateForm } from "../validations/create-account-form.validation";

interface Props {
  onCreate: (account: AccountVM) => void;
}

export const CreateAccountFormComponent: React.FC<Props> = (props) => {
  const { onCreate } = props;
  const [account, setAccount] = React.useState<AccountVM>(createEmptyAccount());

  const [errors, setErrors] = React.useState<AccountError>(
    createEmptyAccountError()
  );

  React.useEffect(() => {
    setAccount({...account})
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(account);
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onCreate(account);
    }
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.formContainer}>
        <div>
          <label>Tipo de cuenta</label>
          <select name="type" className={classes.medium} onChange={handleFieldChange} value={account.type}>
          <option value="">Seleccione un tipo de cuenta</option>
            <option value="1">Cuenta de Ahorro</option>
            <option value="2">Cuenta Compartida</option>
            <option value="3">Cuenta Nómina</option>
          </select>
          <p className={classes.error}>{errors.type}</p>
        </div>
        <div>
          <label>Alias</label>
          <input type="text" name="name" className={classes.medium} onChange={handleFieldChange} value={account.name}/>
          <p className={classes.error}>{errors.name}</p>
        </div>
      </div>
      <button type="submit" className={classes.button}>
        Guardar
      </button>
    </form>
  );
};
