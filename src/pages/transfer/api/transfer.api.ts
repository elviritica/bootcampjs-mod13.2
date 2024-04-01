import Axios from "axios";
import { AccountAPI, TransferAPI } from "./transfer.api-model";

const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = (): Promise<AccountAPI[]> =>
  Axios.get<AccountAPI[]>(urlAccount).then(({ data }) => data);

const urlTransfer = `${import.meta.env.VITE_BASE_API_URL}/transfer`;

export const saveTransfer = (transfer: TransferAPI): Promise<boolean> =>
  Axios.post<boolean>(urlTransfer, transfer).then(({ data }) => data);