export interface MovementsAPI {
    id: string;
    transaction: string;
    realTransaction: string;
    description: string;
    amount: number;
    balance: number;
    accountId: number;
}