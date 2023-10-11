export interface AccountVm {
  id: string;
  alias: string;
  iban: string;
}

export interface TransferVm {
  accountId: string;
  iban: string;
  name: string;
  amount: number;
  concept: string;
  notes: string;
  dateTransfer: string;
  realDateTransfer?: string;
  email: string;
}

export const createEmptyTransferVm = (): TransferVm => ({
  accountId: "",
  iban: "",
  name: "",
  amount: 0,
  concept: "",
  notes: "",
  dateTransfer: "",
  realDateTransfer: "",
  email: "",
});

export interface TransferError {
  accountId: string;
  iban: string;
  name: string;
  amount: string;
  concept: string;
  notes: string;
  dateTransfer: string;
  realDateTransfer?: string;
  email: string;
}

export const createEmptyTransferError = (): TransferError => ({
  accountId: "",
  iban: "",
  name: "",
  amount: "",
  concept: "",
  notes: "",
  dateTransfer: "",
  realDateTransfer: "",
  email: "",
});
