import React, { useState } from 'react'
import Typography from "@material-ui/core/Typography";
import { Input as InputM, Box, Button, FormHelperText, FormLabel, InputAdornment, InputLabel, makeStyles } from '@material-ui/core';
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
    platform:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    options:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 20,
        '& label':{
            marginBottom: 0,
        }
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
    const [platform, setPlatform] = useState({ig: false, soon1: false, soon2: false})
    const platformChange = (event) => {
        setPlatform({ ...platform, [event.target.name]: event.target.checked });
        console.log(platform)
    };
    return (
        <React.Fragment>
        <FormGroup className={classes.platform}>
                    <FormControlLabel
                        className={classes.label}
                        control={ <Checkbox checked={platform.ig} onChange={platformChange} name="ig" />}
                        label="Instagram"
                    />
                    <FormControlLabel
                        className={classes.label}
                        control={ <Checkbox checked={platform.soon1} onChange={platformChange} name="soon1" />}
                        label="SOON"
                    />
                    <FormControlLabel
                        className={classes.label}
                        control={ <Checkbox checked={platform.soon2} onChange={platformChange} name="soon2" />}
                        label="SOON"
                    />
                </FormGroup>
            <Box display='flex' flexDirection="row" alignItems="center" >
            <FormControl required>
                <InputLabel >Keyword:</InputLabel>
                    <InputM
                        id="keyword"
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
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            </Box>
            <FormGroup className={classes.options}>
            {/* <FormLabel component="legend">Data to obtain</FormLabel> */}
                <FormControlLabel
                    className={classes.label}
                    disabled
                    control={ <Checkbox checked={true} name="posts" />}
                    label="Posts Detail"
                />
                <FormControlLabel
                    className={classes.label}
                    control={ <Checkbox name="comments" />}
                    label="Comments"
                />
            </FormGroup>
            <Box display='flex' flexDirection="row" alignItems="center" >

                <Button>Submit</Button>
            </Box>
            </React.Fragment>
    )
}

export default Input
