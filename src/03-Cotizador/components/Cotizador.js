import React, { useState } from 'react'
import { Formulario } from './Formulario'
import { Header } from './Header'
import { Resultado } from './Resultado'
import { Resumen } from './Resumen'

export const Cotizador = () => {

    const [resumen, setResumen] = useState({
        cotizacion: 0,
        datos: {
            marca: '',
            year: '',
            plan: ''
        }

    });

    //extarer datos
    const {cotizacion, datos} = resumen;

    return (
        <div>
            <Header
                titulo='Cotizador de Seguros'
            />
            <Formulario
                setResumen={setResumen}
            />

            <Resumen
               datos={datos} 
            />

            <Resultado
                cotizacion={cotizacion}
            />

        </div>
    )
}
