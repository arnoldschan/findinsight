import React, { useState } from 'react'
import Typography from "@material-ui/core/Typography";
import { Box, InputAdornment, makeStyles } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { InputBox } from "styles/shared-components";

const useStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.primary,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      padding: theme.spacing(1),
    },
}));

function Input({keyword, setKeyword}) {
    const classes = useStyles();
    const [error, setError] = useState(false)
    const keywordValidate = (e)=>{
        
        setKeyword(e.target.value);
        if (e.target.value === ""){
            setError(true)
        } else {
            setError(false)
        }
        console.log(error)

    }

    return (
        <Box display='flex' flexDirection="row" alignItems="center" >
            <Typography className={classes?.root}>Search:</Typography>
                <InputBox 
                onChange={e=>keywordValidate(e)}
                value={keyword}
                error={error}
                multiline
                helperText="press 'return' for multiple keyword search"
                label="Required*"
                startAdornment={
                    (<InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>)
                }
                
                />
        </Box>
    )
}

export default Input
