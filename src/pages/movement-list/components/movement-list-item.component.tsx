import React from "react";
import { MovementVM } from "../movement-list.vm";
import classes from "./movement-list-item.component.module.css";

interface Props {
    movementItem: MovementVM;
}

export const MovementsListItemComponent : React.FC<Props> = (props) => {
    const {movementItem} = props;
    const isAmountNegative = movementItem.amount < 0;
    const isBalanceNegative = movementItem.balance < 0;

    return(
        <div className={classes.row}>
            <span className={classes.dataCell}>{movementItem.transaction.toLocaleDateString()}</span>
            <span className={classes.dataCell}>{movementItem.realTransaction.toLocaleDateString()}</span>
            <span className={classes.dataCell}>{movementItem.description}</span>
            <span className={`${classes.dataCell} ${classes.dataNumbers} ${isAmountNegative ? classes.negative : ''}`}>{movementItem.amount} €</span>
            <span className={`${classes.dataCell} ${classes.dataNumbers} ${isBalanceNegative ? classes.negative : ''}`}>{movementItem.balance} €</span>
        </div>
    )
}