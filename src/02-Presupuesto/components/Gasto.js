import {  ListItem, Box } from '@material-ui/core'
import React from 'react';




export const Gasto = ({ gasto }) => {

    const { nombre, cantidad } = gasto;

    return (
        

            <ListItem >

                <div style={{ width: '100%' }}>
                    <Box display="flex" p={1} bgcolor="background.paper">
                        <Box p={1} flexGrow={1} bgcolor="grey.300">
                           {nombre}
                        </Box>
                        
                        <Box p={1} bgcolor="grey.300">
                            ${cantidad}
                        </Box>
                    </Box>
                </div>
           </ListItem>

        

    )

}
