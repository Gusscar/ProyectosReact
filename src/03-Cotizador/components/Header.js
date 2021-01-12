import React from 'react'
import Typography from '@material-ui/core/Typography'

export const Header = ({titulo}) => {
    return (
        <div>
            <Typography variant="h5" color="initial">{titulo}</Typography>
        </div>
    )
}
