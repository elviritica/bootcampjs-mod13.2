import { AppLayout } from "@/layouts";
import React from "react";
import { AccountVM } from "./account-list.vm";
import classes from "./account-list.page.module.css";
import { AccountListTableComponent } from "./components";
import { getAccountList } from "./api";
import { mapAccountListFromApiToVm } from "./account-list.mapper";
import { appRoutes } from "@/core/router";
import { Link } from "react-router-dom";


export const AccountListPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVM[]>([]);

  React.useEffect(() => {
    getAccountList().then ((result) => setAccountList(mapAccountListFromApiToVm(result)));
  }, [])

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Mis Cuentas</h1>
          <button>
            <Link to={appRoutes.createAccount}>AGREGAR NUEVA CUENTA</Link>
          </button>
        </div>
        <AccountListTableComponent accountList={accountList} />
      </div>
    </AppLayout>
  );
};
