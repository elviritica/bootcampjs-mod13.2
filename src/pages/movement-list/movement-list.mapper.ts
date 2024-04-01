import * as apiModel from "./api/movement-list.api.model";
import * as viewModel from "./movement-list.vm";

export const mapMovementListFromApiToVm = (movementList : apiModel.MovementsAPI[]): viewModel.MovementVM[] =>
    movementList.map((movement) => ({
        id: movement.id,
        transaction: new Date(movement.transaction),
        realTransaction: new Date(movement.realTransaction),
        description: movement.description,
        amount: movement.amount,
        balance: movement.balance,
        accountId: (movement.accountId).toString()
    }));