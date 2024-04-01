import { AppLayout } from "@/layouts";
import React from "react";
import { mapAccountInfoFromApiToVm } from "./account-info.mapper";
import { AccountInfoVM, createEmptyAccountInfo } from "./account-info.vm";
import { getAccountInformation, getMovementListByAccountId } from "./api";
import {
  AccountInfoComponent,
  MovementsListTableComponent,
} from "./components";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import classes from "./movement-list.page.module.css";
import { MovementVM } from "./movement-list.vm";
import { useParams } from "react-router-dom";

export const MovementListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [accountInfo, setAccountInfo] = React.useState<AccountInfoVM>(
    createEmptyAccountInfo()
  );
  const [movementList, setMovementList] = React.useState<MovementVM[]>([]);
  React.useEffect(() => {
    if (id) {
      getAccountInformation(id).then((result) =>
        setAccountInfo(mapAccountInfoFromApiToVm(result))
      );

      getMovementListByAccountId(id).then((result) =>
        setMovementList(mapMovementListFromApiToVm(result))
      );
    }
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <AccountInfoComponent accountInfo={accountInfo} />
        <MovementsListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
