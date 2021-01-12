import { Button, FormControl, FormControlLabel, InputLabel, makeStyles, MenuItem, Paper, Radio, Select, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react';
import { calcularMarca, obtenerDiferenciaYear, obtenerPlan } from '../helper/helper';
import { Error } from './Error';

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

export const Formulario = ({setResumen}) => {

    const { paper, botton } = useStyles();

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState(false)

    //extraer los valores

    const { marca, year, plan } = datos;

    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const handelSubmit = (e) => {
        e.preventDefault();

        if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true);
            return;

        }

        setError(false);

        //base de 2000
        let resultado = 2000;

        //obtenere la diferencia de años

        const diferencia = obtenerDiferenciaYear(year);

        // por cada año hay q restar el 3%
        resultado -= ((diferencia * 3) * resultado / 100);

        resultado = calcularMarca(marca) * resultado;

        const incrementoPlan = obtenerPlan(plan);
       resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

       //total
       setResumen({
           cotizacion: resultado,
           datos
       })
    }



    return (
        <div>
            <form onSubmit={handelSubmit} >

                <Paper className={paper}>
                    {error ? <Error mensaje='Todos los Campos son Obligatorios' /> : null}

                    <FormControl fullWidth variant="outlined" >

                        <InputLabel >Marca</InputLabel>
                        <Select
                            fullWidth
                            name="marca"
                            value={marca}
                            onChange={handleChange}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>--Seleccione--</em>
                            </MenuItem>
                            <MenuItem value="americano">Amricano</MenuItem>
                            <MenuItem value="europeo">Europeo</MenuItem>
                            <MenuItem value="asiatico">Asiatico</MenuItem>
                        </Select>

                    </FormControl>
                    <FormControl className={botton} fullWidth variant="outlined" >
                        <InputLabel>Año</InputLabel>
                        <Select
                            fullWidth
                            name="year"
                            value={year}
                            onChange={handleChange}
                            label="Age"
                        >
                            <MenuItem value=""><em>--Seleccione--</em></MenuItem>
                            <MenuItem value="2021">2021</MenuItem>
                            <MenuItem value="2020">2020</MenuItem>
                            <MenuItem value="2019">2019</MenuItem>
                            <MenuItem value="2018">2018</MenuItem>
                            <MenuItem value="2017">2017</MenuItem>
                            <MenuItem value="2016">2016</MenuItem>
                            <MenuItem value="2015">2015</MenuItem>
                            <MenuItem value="2014">2014</MenuItem>
                            <MenuItem value="2013">2013</MenuItem>
                            <MenuItem value="2012">2012</MenuItem>
                        </Select>

                    </FormControl>


                    <Typography variant="h5" color="initial">Plan</Typography>
                    <FormControlLabel
                        value="basico"
                        name="plan"
                        checked={plan === "basico"}
                        control={<Radio color="primary" />}
                        label="Basico"
                        onChange={handleChange} />
                    <FormControlLabel
                        value="completo"
                        name="plan"
                        checked={plan === "completo"}
                        control={<Radio color="primary" />}
                        label="Completo"
                        onChange={handleChange} />


                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"

                    // className={submit}
                    >
                        Cotizar
            </Button>
                </Paper>
            </form>

        </div >
    )
}
