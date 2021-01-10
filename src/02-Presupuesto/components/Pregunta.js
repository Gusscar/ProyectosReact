import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { Button, TextField } from '@material-ui/core'
import { Error } from './Error';

export const Pregunta = ({setPresupuesto, setRestante,setPregunta}) => {

    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    const handelChange = (e) => {
        setCantidad(
            parseInt(e.target.value, 10));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(cantidad)

        //validar
        if(cantidad < 1 || isNaN( cantidad ) ) {
            setError(true);
            return;
        }

        setError(false)
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setPregunta(false)
    }


    return (
        <>
            <Typography variant="h6" color="initial">Coloca Tu Presupuesto</Typography>
           
            { error ? <Error mensaje="El Presupuesto es Incorrecto" />  : null }
            
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    type="number"
                    margin="normal"
                    fullWidth
                    label="Coloca Tu Presupuesto"
                    autoFocus
                    onChange={handelChange}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                   
                // className={submit}
                >
                    Agregar Presupuesto
                </Button>
            </form>
        </>
    )
}
