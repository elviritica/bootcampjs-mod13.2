export interface AccountInfoAPI {
    id: string;
    iban: string;
    type: string;
    name: string;
    balance: number;
    lastTransaction: string;
}
