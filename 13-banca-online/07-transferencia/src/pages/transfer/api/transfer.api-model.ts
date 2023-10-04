export interface Account {
  id: string;
  iban: string;
  type: string;
  name: string;
  balance: number;
  lastTransaction: string;
}

export interface Transfer {
  accountId: string;
  iban: string;
  name: string;
  amount: number;
  concept: string;
  notes: string;
  transferDate: string;
  realTransferDate: string;
}
