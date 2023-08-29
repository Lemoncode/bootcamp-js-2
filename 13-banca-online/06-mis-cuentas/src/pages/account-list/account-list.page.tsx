import React from "react";
import { AppLayout } from "@/layouts";
import { AccountVm } from "./account-list.vm";

const mockAccountListData: AccountVm[] = [
  {
    id: "1",
    iban: "ES91 2100 0418 4502 0005 1332",
    name: "Personal",
    balance: "1490",
    lastTransaction: new Date("2019-12-09T21:30:00"),
  },
  {
    id: "2",
    iban: "ES79 2100 0813 6101 2345 6789",
    name: "Compartida",
    balance: "2480",
    lastTransaction: new Date("2019-11-21T14:07:38"),
  },
  {
    id: "3",
    iban: "ES66 2100 0418 4012 3456 7891",
    name: "Ahorro",
    balance: "8500",
    lastTransaction: new Date("2019-11-15T08:29:04"),
  },
];

export const AccountListPage: React.FC = () => {
  const [accountList /*, setAccountList*/] =
    React.useState<AccountVm[]>(mockAccountListData);

  return (
    <AppLayout>
      <div>
        Account List
        {accountList.map((account) => (
          <div key={account.id}>
            {account.name} - {account.balance}
          </div>
        ))}
      </div>
    </AppLayout>
  );
};
