import React from 'react';
import Alert from '@material-ui/lab/Alert'
import { revisarPresupuesto } from '../helper/Helper';
import { Box, ListItem } from '@material-ui/core';


export const ControlPresupuesto = ({presupuesto, restante}) => {
    return (

        <ListItem >

        <div style={{ width: '100%' }}>
            
                <Box  p={1} flexGrow={1}>
                <Alert severity="info">Presupuesto:${presupuesto}</Alert>
                </Box>
                
                <Box p={1}  >
                <Alert severity={revisarPresupuesto(presupuesto, restante)} >Restante:${restante}</Alert>
                </Box>
          
        </div>
   </ListItem>

        
    )
}
