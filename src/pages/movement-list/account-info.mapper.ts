import * as apiModel from "./api/account-info.api.model";
import * as viewModel from "./account-info.vm";

export const mapAccountInfoFromApiToVm = (accountInfo : apiModel.AccountInfoAPI): viewModel.AccountInfoVM => ({
    id: accountInfo.id,
    iban: accountInfo.iban,
    type: accountInfo.type,
    name: accountInfo.name,
    balance: accountInfo.balance,
    lastTransaction: new Date(accountInfo.lastTransaction)
});