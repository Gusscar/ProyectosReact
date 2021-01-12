import React from 'react'
import Typography from '@material-ui/core/Typography'
import { List, ListItemText, makeStyles, Paper } from '@material-ui/core';
import { primeraMayuscula } from '../helper/helper';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,

    },

    botton: {
        marginTop: '15px'
    }


}));

export const Resumen = ({ datos }) => {

    const {paper} = useStyles();
    const { marca, year, plan } = datos;

    if (marca === '' || year === '' || plan === '') return null;

    return (

        <div>
                <Typography variant="h6" color="initial">Resumen Cotizacion</Typography>

            <Paper className={paper}>

                <List>

                    <ListItemText  >Marca: {primeraMayuscula(marca)}</ListItemText>
                    <ListItemText  >Plan: {primeraMayuscula(plan)}</ListItemText>
                    <ListItemText  >Año: {primeraMayuscula(year)}</ListItemText>

                </List>
            </Paper>
        </div>
    )
    }