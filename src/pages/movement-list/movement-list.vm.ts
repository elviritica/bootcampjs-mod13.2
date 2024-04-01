export interface MovementVM {
    id: string;
    transaction: Date;
    realTransaction: Date;
    description: string;
    amount: number;
    balance: number;
    accountId: string;
}

/*
export interface MovementsAPI {
    id: string;
    transaction: string;
    realTransaction: string;
    description: string;
    amount: number;
    balance: number;
    accountId: number;
}
*/