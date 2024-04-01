import  Axios  from "axios";
import { MovementsAPI } from "./movement-list.api.model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovementList = (): Promise<MovementsAPI[]> =>
  Axios.get<MovementsAPI[]>(urlMovements).then(({ data }) => data);

export const getMovementListByAccountId = (accountId: string): Promise<MovementsAPI[]> =>
  Axios.get<MovementsAPI[]>(`${urlMovements}?accountId=${accountId}`).then(({ data }) => data); 

