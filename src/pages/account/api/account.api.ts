import Axios from "axios";
import { AccountAPI } from "./account.api.model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;


export const saveAccount = (account: AccountAPI): Promise<AccountAPI> =>
  Axios.post<AccountAPI>(url, account).then(({ data }) => data);