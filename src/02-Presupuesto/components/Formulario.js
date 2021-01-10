import { Button, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Error } from './Error';
import { v4 as uuidv4 } from 'uuid';

export const Formulario = ({setGasto, setcrearGasto}) => {

    const [nombre, setNombre] = useState('');
    const[cantidad, setCantidad]= useState(0);
    const[error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        //validar
        if (cantidad< 1 || isNaN(cantidad) || nombre.trim()==='' ) {
            setError(true);
            return;
            
        }
        setError(false);
        //contruir el Gasto
        const gasto ={
            nombre,
            cantidad,
            id: uuidv4()
        }
        //pasar el gasto al componente principal
        setGasto(gasto);
        setcrearGasto(true)
        //reset Form

        setNombre('');
        setCantidad(0);
    }
    
    return (
        <>
        <Typography variant="h6" color="initial">Agregar tus Gastos</Typography>
       
        {error ? <Error mensaje="Ambos campos son Obligarios o Presupuesto Incorrecto"/>: null}   
        <form onSubmit={handleSubmit}>
            <TextField
                variant="outlined"
                type="text"
                margin="normal"
                fullWidth
                label="Nombre Gasto"
                autoFocus
                value={nombre}
                onChange={e=>setNombre(e.target.value)}
            />
              <TextField
                variant="outlined"
                type="number"
                margin="normal"
                fullWidth
                label="Cantidad Gasto"
                autoFocus
                value={cantidad}
                onChange={e=>setCantidad(parseInt(e.target.value, 10) )}
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
               
            // className={submit}
            >
                Agregar Gasto
            </Button>
        </form>
    </>
    )
}
