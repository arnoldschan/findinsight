import React, { useState } from 'react'
import Typography from "@material-ui/core/Typography";
import { Input as InputM, Box, Button, FormHelperText, FormLabel, InputAdornment, InputLabel, makeStyles, RadioGroup, Radio } from '@material-ui/core';

import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AccountCircle from '@material-ui/icons/AccountCircle';
import { InputBox, Boxed, InputLabelStyled } from "styles/shared-components";
import axios from 'axios';
import Checkbox from 'components/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.primary,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      padding: theme.spacing(3),
    },
    
    options:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 20,
        '& label':{
            marginBottom: 0,
        }
    },
    left: {
        margin: 20,
    },
    
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
    const [platform, setPlatform] = useState(
        {
            Instagram: {
                checked: true
            },
            soon1: {
                checked: false
            }, 
            soon2: {
                checked: false
        }})
    const platformChange = (event) => {
        setPlatform({ ...platform, [event.target.name]: {...platform[event.target.name] ,checked: event.target.checked} });
    };
    return (
        <Box display='flex' flexDirection="row" alignItems="center" justifyContent="center" >
            <Box className={classes.left} display='flex' flexDirection="column" >
                <Checkbox checked={platform} checkedHandler={platformChange}/>
                <Box display='flex' flexDirection="row" alignItems="center" >
                    <FormControl required>
                        <InputLabelStyled >Keyword:</InputLabelStyled>
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
                    </FormControl>
                </Box>
                <FormGroup className={classes.options}>
                {/* <FormLabel component="legend">Data to obtain</FormLabel> */}
                    {/* <FormControlLabel
                        className={classes.label}
                        disabled
                        control={ <Checkbox checked={true} name="posts" />}
                        label="Posts Detail"
                    />
                    <FormControlLabel
                        className={classes.label}
                        control={ <Checkbox name="comments" />}
                        label="Comments"
                    /> */}
                </FormGroup>
            </Box>
                <Box display='flex' flexDirection="row" alignItems="center" >

                        
                    <RadioGroup value="once">
                    <FormLabel component="legend">Task type</FormLabel>
                        <FormControlLabel
                            value="once"
                            control={<Radio color="primary"/>}
                            label="One-time task"
                            />
                        <FormControlLabel
                            value="scheduled"
                            control={<Radio color="primary"/>}
                            label="Scheduled task"
                            />
                    </RadioGroup>
                    <Button variant="contained" color="primary">Submit</Button>

                </Box>
        </Box>
    )
}

export default Input
