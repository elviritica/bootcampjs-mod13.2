import { AppLayout } from "@/layouts";
import React from "react";
import { mapAccountFromVmtoApi } from "./account.mapper";
import classes from "./account.page.module.css";
import { AccountVM } from "./account.vm";
import { saveAccount } from "./api";
import { CreateAccountFormComponent } from "./components/create-account-form.component";

export const AccountPage: React.FC = () => {

  const handleCreate = (account: AccountVM) => {
    const accountAPI = mapAccountFromVmtoApi(account);
    saveAccount(accountAPI).then((result) => {
      if (result) {
        alert("Cuenta creada con éxito");
      } else {
        alert("Error al crear la cuenta");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Cuenta Bancaria</h1>
        </div>
        <CreateAccountFormComponent onCreate={handleCreate} />
      </div>
    </AppLayout>
  );
};
