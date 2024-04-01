import { AccountInfoAPI } from "./account-info.api.model";
import Axios from "axios";

const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account`;

export const getAccountInformation = (accountId: string): Promise<AccountInfoAPI> =>
Axios.get<AccountInfoAPI>(`${urlAccount}/${accountId}`).then(({ data }) => data); 