import Alert from '@material-ui/lab/Alert'
import React from 'react'

export const Error = ({mensaje}) =>(
    <Alert severity="error">{mensaje}</Alert>
);
