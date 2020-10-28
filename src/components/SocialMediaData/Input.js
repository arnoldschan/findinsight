import React, { useState } from 'react'
import Typography from "@material-ui/core/Typography";
import { Box, InputAdornment, makeStyles } from '@material-ui/core';
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AccountCircle from '@material-ui/icons/AccountCircle';
import { InputBox } from "styles/shared-components";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.primary,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      padding: theme.spacing(3),
    },
    label: {
        color: theme.palette.text.primary
    },
    options:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }
    
}));
let cancelToken;

function Input({keyword, setKeyword}) {
    const classes = useStyles();
    const [error, setError] = useState(false)
    const keywordValidate = (e)=>{
        if (typeof cancelToken != typeof undefined) {
            cancelToken.cancel();
          }
          cancelToken = axios.CancelToken.source();
        const url = `https://www.instagram.com/web/search/topsearch/?context=blended&query=%23${keyword}&include_reel=true`
        axios.get(url,{ cancelToken: cancelToken.token })
        .then(res => {
          console.log(res.data)
        })
        
        setKeyword(e.target.value);
        if (e.target.value === ""){
            setError(true)
        } else {
            setError(false)
        }
    }

    return (
            <FormControl>
                <FormGroup className={classes.options}>
                    <FormControlLabel
                        className={classes.label}
                        control={ <Checkbox name="IG" />}
                        label="Instagram"
                    />
                    <FormControlLabel
                        className={classes.label}
                        control={ <Checkbox name="SOON1" />}
                        label="SOON"
                    />
                    <FormControlLabel
                        className={classes.label}
                        control={ <Checkbox name="SOON2" />}
                        label="SOON"
                    />
                </FormGroup>
            <Box display='flex' flexDirection="row" alignItems="center" >
                <Typography className={classes?.root}>Keyword:</Typography>
                    <InputBox 
                    onChange={e=>keywordValidate(e)}
                    value={keyword}
                    error={error}
                    multiline
                    helperText="press 'return' for multiple keyword search"
                    label="Required*"
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                    
                    />
            </Box>
                
            </FormControl>
    )
}

export default Input
