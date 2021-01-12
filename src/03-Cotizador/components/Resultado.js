import React from 'react'
import Alert from '@material-ui/lab/Alert';

export const Resultado = ({cotizacion}) => {

    
    return (
        (cotizacion === 0) ? <Alert severity="info">Elige marca, año y tipo de Seguro</Alert>: (
            <Alert severity="success">Total es: ${cotizacion}</Alert>
        )
    )
}
