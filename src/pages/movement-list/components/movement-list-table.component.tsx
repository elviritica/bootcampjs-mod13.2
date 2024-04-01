import React from "react";
import { MovementVM } from "../movement-list.vm";
import classes from "./movement-list-table.component.module.css";
import { MovementsListItemComponent } from "./movement-list-item.component";

interface Props {
    movementList: MovementVM[];
}

export const MovementsListTableComponent : React.FC<Props> = (props) => {
    const {movementList} = props;
    return(
        <div className={classes.gridContainer}>
            <div className={classes.gridTable}>
                <div className={classes.headerTable}>
                    <span className={classes.headerCell}>FECHA</span>
                    <span className={classes.headerCell}>FECHA VALOR</span>
                    <span className={classes.headerCell}>DESCRIPCIÓN</span>
                    <span className={classes.headerCell}>IMPORTE</span>
                    <span className={classes.headerCell}>SALDO DISPONIBLE</span>
                </div>
                {movementList.map((movement) => (
                    <MovementsListItemComponent key={movement.accountId} movementItem={movement}/>
                ))}
            </div>
        </div>
    )
};