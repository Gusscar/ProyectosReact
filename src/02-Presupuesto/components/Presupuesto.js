import React, { useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { Pregunta } from './Pregunta'
import { Container, Grid, makeStyles, Paper } from '@material-ui/core'
import { Formulario } from './Formulario';
import { Listado } from './Listado';
import { ControlPresupuesto } from './ControlPresupuesto';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },



    center: {
        textAlign: 'center'
    },

    margin: {
        marginTop: '15px'
    }
}));

export const Presupuesto = () => {

    const { root, paper, center, margin } = useStyles();

    //definir el State
    const [presupuesto, setPresupuesto] = useState(0);
    const [restante, setRestante] = useState(0);
    const [pregunta, setPregunta] = useState(true);
    const [gastos, setGastos] = useState([]);
    const [gasto, setGasto] = useState([]);
    const [crearGasto, setcrearGasto] = useState(false);


    //actualizar el restante
    useEffect(() => {
        if (crearGasto) {
            setGastos([
                ...gastos,
                gasto
            ]);

            //resta del presupuesto actual
            
            const presupuestoRestante = restante- gasto.cantidad;
            setRestante(presupuestoRestante);

            setcrearGasto(false)
        }


    }, [gasto, crearGasto, gastos, restante])


    return (
        <div className={root}>

            <Typography className={center} variant="h4" color="initial">Gasto Semanal</Typography>

            <Container maxWidth="lg">
                {pregunta ? (
                    <Paper className={paper}>
                        <Pregunta
                            setPresupuesto={setPresupuesto}
                            setRestante={setRestante}
                            setPregunta={setPregunta}
                        /></Paper>) : (<Container className={margin} maxWidth="lg">
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <Paper className={paper}>
                                        <Formulario
                                            setGasto={setGasto}
                                            setcrearGasto={setcrearGasto}
                                        /></Paper>
                                </Grid>
                                <Grid item xs={6} >
                                    <Paper className={paper}>
                                        <Listado
                                            gastos={gastos}
                                        />
                                        <ControlPresupuesto
                                            presupuesto={presupuesto}
                                            restante={restante}
                                        />

                                    </Paper>
                                </Grid>
                            </Grid>


                        </Container>)}

            </Container>



        </div>


    )
}
