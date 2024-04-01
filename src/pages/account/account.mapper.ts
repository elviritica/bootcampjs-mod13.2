import * as apiModel from "./api";
import * as viewModel from "./account.vm";

export const mapAccountFromVmtoApi = (account : viewModel.AccountVM) : apiModel.AccountAPI => ({
    type: account.type,
    name: account.name,
})