import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Gasto } from './Gasto';



export const Listado = ({ gastos }) => {


    return (
        <div>

            <Typography variant="h6" color="initial">Listado</Typography>
            {gastos.map(gasto => (
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                />
            ))}
        </div>
    )


}