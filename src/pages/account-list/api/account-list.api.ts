import Axios from "axios";
import { AccountAPI } from "./account-list.api.model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = (): Promise<AccountAPI[]> =>
  Axios.get<AccountAPI[]>(url).then(({ data }) => data);
