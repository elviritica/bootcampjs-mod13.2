import { AccountInfoVM } from "../account-info.vm";
import classes from "./account-info.component.module.css";

interface Props {
  accountInfo: AccountInfoVM;
}

export const AccountInfoComponent: React.FC<Props> = (props) => {
  const { accountInfo } = props;

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <h1>Saldos y Últimos movimientos</h1>
        <div className={classes.saldoContainer}>
          <p className={classes.saldo}>SALDO DISPONIBLE</p>
          <p className={classes.balance}>{accountInfo.balance}€</p>
        </div>
      </div>
      <div className={classes.infoCuentaContainer}>
        <p>Alias: {accountInfo.name}</p>
        <p>IBAN: {accountInfo.iban}</p>
      </div>
    </div>
  );
};
