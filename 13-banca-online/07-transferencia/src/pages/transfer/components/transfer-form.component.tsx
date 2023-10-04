import React from "react";
import {
  AccountVm,
  TransferError,
  TransferVm,
  createEmptyTransferError,
  createEmptyTransferVm,
} from "../transfer.vm";
import { validateForm } from "../validations";

interface Props {
  accountList: AccountVm[];
  onTransfer: (transferInfo: TransferVm) => void;
}

export const TransferFormComponent: React.FC<Props> = (props) => {
  const { accountList, onTransfer } = props;
  const [transfer, setTransfer] = React.useState<TransferVm>(
    createEmptyTransferVm()
  );

  const [errors, setErrors] = React.useState<TransferError>(
    createEmptyTransferError()
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formValidationResult = validateForm(transfer);
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onTransfer(transfer);
    }
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTransfer({ ...transfer, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Transfer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Seleccione una cuenta origen:</label>
          <select
            name="accountId"
            onChange={handleFieldChange}
            value={transfer.accountId}
          >
            <option value="">Seleccione una cuenta</option>
            {accountList.map((account) => (
              <option key={account.id} value={account.id}>
                {account.alias}
              </option>
            ))}
          </select>
          <p>{errors.accountId}</p>
        </div>
        <div>
          <label>Ingrese el IBAN de destino:</label>
          <input name="iban" onChange={handleFieldChange} />
          <p>{errors.iban}</p>
        </div>
        <div>
          <label>Beneficiario:</label>
          <input name="name" onChange={handleFieldChange} />
          <p>{errors.name}</p>
        </div>
        <div>
          <label>
            Importe <span>(EUR)</span>:
          </label>
          <input name="amount" type="number" onChange={handleFieldChange} />
          <p>{errors.amount}</p>
        </div>
        <div>
          <label>Concepto:</label>
          <input name="concept" onChange={handleFieldChange} />
          <p>{errors.concept}</p>
        </div>
        <div>
          <label>Observaciones:</label>
          <input name="notes" onChange={handleFieldChange} />
          <p>{errors.notes}</p>
        </div>
        <div>
          <p>
            Para que la transferencia se realice en otra fecha diferente a la de
            hoy, por favor, indíquenos la fecha de ejecución:
          </p>
          <div>
            <label>Fecha de ejecución:</label>
            <input
              name="realDateTransfer"
              type="date"
              onChange={handleFieldChange}
            />
            <p>{errors.realDateTransfer}</p>
          </div>
        </div>
        <div>
          <p>Escriba una dirección de email para dar aviso al beneficiario:</p>
          <div>
            <label>Email del beneficiario:</label>
            <input name="email" onChange={handleFieldChange} />
            <p>{errors.email}</p>
          </div>
        </div>
        <button type="submit">REALIZAR LA TRANSFERENCIA</button>
      </form>
    </div>
  );
};
