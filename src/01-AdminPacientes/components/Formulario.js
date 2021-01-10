import React, { useState } from 'react';
import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    form: {

        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export const Formulario = ({ crearCita }) => {

    const { paper, form, submit } = useStyles;

    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    });

    const [error, setError] = useState(false);

    const handelChange = (e) => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    const handleSubmit = (e) => {
        e.preventDefault()

        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        cita.id = uuidv4();
        crearCita(cita);

        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: '',
        })
    }

    return (

        <div className={paper}>

            <Typography variant="h5" color="secundary">Crear Cita</Typography>
            {error ? <Alert severity="error">Todos los Campos Son Obligatorios</Alert> : null}
            <form
                onSubmit={handleSubmit}
                className={form}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Nombre Mascota"
                    name="mascota"
                    value={mascota}
                    autoFocus
                    onChange={handelChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Nombre Dueño"
                    name="propietario"
                    value={propietario}
                    autoFocus
                    onChange={handelChange}

                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    type="date"
                    fullWidth
                    name="fecha"
                    value={fecha}
                    onChange={handelChange}


                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    type="time"
                    fullWidth
                    name="hora"
                    value={hora}
                    onChange={handelChange}


                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    type="text"
                    fullWidth
                    label="Sintomas"
                    placeholder="Sintomas"
                    name="sintomas"
                    value={sintomas}
                    onChange={handelChange}


                />


                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={submit}
                >
                    Agregar Cita
                </Button>
            </form>
        </div>

    )
}
