import  Axios  from "axios";
import { CredentialsAPI } from "./login.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/login`;

export const isValidLogin = async (credential: CredentialsAPI): Promise<boolean> =>
  Axios.post<boolean>(url, credential).then(({ data }) => data);