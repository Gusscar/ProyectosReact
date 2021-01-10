import React, { useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography';
import { Grid, Container, makeStyles } from '@material-ui/core';
import { Formulario } from './Formulario'
import { Cita } from './Cita';

const useStyles = makeStyles({
    container: {
        marginTop: '15px'
    }
})

export const Index = () => {

    const { container } = useStyles();

    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (!citasIniciales) {
        citasIniciales = [];
    }

    const [citas, setCitas] = useState([]);

    useEffect(() => {
        if (citasIniciales) {
            localStorage.setItem('citas', JSON.stringify(citas))
        } else {
            localStorage.setItem('citas', JSON.stringify([]))
        }
    }, [citas])

    const crearCita = (cita) => {
        setCitas([
            ...citas,
            cita
        ])

    }

    const eliminarCita = id => {
        const nuevasCitas = citas.filter(cita =>
            cita.id !== id
        );
        setCitas(nuevasCitas);
    }

    const titulo = citas.length === 0 ? 'No hay Citas' : 'Administrar tus citas'

    return (

        <div className={container}>
            <Typography align="center" variant="h4" color="initial">Administrador de Pacientes</Typography>
            <div className={container}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                    spacing={3}>
                    <Container maxWidth="xs">
                        <Formulario
                            crearCita={crearCita}
                        />


                    </Container>
                    <Grid >
                        <Typography variant="h5" color="initial">{titulo}</Typography>
                        {citas.map(cita => (
                            <Cita
                                key={cita.id}
                                cita={cita}
                                eliminarCita={eliminarCita}
                            />
                        ))}
                    </Grid>

                </Grid>

            </div>



        </div>
    )
}
