import React from "react";
import { AccountVm } from "../account-list.vm";
import classes from "./account-list-table.component.module.css";

interface Props {
  accountList: AccountVm[];
}

export const AccountListTableComponent: React.FC<Props> = (props) => {
  const { accountList } = props;

  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.headerTable}>
          <span className={classes.headerCell}>IBAN</span>
          <span className={classes.headerCell}>ALIAS</span>
          <span className={classes.headerCell}>SALDO DISPONIBLE</span>
          <span className={classes.headerCell}>ÚLTIMA OPERACIÓN</span>
          <span className={classes.headerCell}>OPERACIÓN</span>
        </div>

        {accountList.map((account) => (
          <div key={account.id}>
            {account.name} - {account.balance}
          </div>
        ))}
      </div>
    </>
  );
};
