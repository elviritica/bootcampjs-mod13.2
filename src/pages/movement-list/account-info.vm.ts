export interface AccountInfoVM {
    id: string;
    iban: string;
    type: string;
    name: string;
    balance: number;
    lastTransaction: Date;
}

export const createEmptyAccountInfo = (): AccountInfoVM => ({
    id: "",
    iban: "",
    type: "",
    name: "",
    balance: 0,
    lastTransaction: new Date()
});
