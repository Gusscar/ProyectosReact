import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core';

export const Cita = ({ cita, eliminarCita }) => {

    const { mascota, propietario, fecha, hora, sintomas, id } = cita;
    return (
        <div>

            <Typography variant="h6" color="initial">Mascota:<span>{mascota}</span></Typography>
            <Typography variant="h6" color="initial">Propietario:<span>{propietario}</span></Typography>
            <Typography variant="h6" color="initial">Fecha:<span >{fecha}</span></Typography>
            <Typography variant="h6" color="initial">Hora:<span>{hora}</span></Typography>
            <Typography variant="h6" color="initial">Sintomas:<span>{sintomas}</span></Typography>
            <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={()=>eliminarCita(id)}
                >
                    Eliminar &times;
                </Button>
        </div>
    )
}
