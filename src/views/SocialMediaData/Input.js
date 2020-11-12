import React, { useState } from 'react'
import Typography from "@material-ui/core/Typography";
import { Input as InputM, Box, Button, FormHelperText, FormLabel, InputAdornment, InputLabel, makeStyles, RadioGroup, Radio } from '@material-ui/core';

import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AccountCircle from '@material-ui/icons/AccountCircle';
import { InputBox, Boxed, InputLabelStyled } from "styles/shared-components";
import Checkbox from 'components/Checkbox';
import { DateRangePicker } from 'rsuite'
import * as dateFns  from "date-fns";
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
    datePicker:{
        margin: 10,
        display: 'flex',
        justifyContent: 'center',
    },
    input:{
        display:'flex',
        flexDirection:"row",
        alignItems:"center",
        justifyContent: 'center',
    }
    
}));


function Input({keyword, setKeyword, platform, setPlatform, dateRange, setDateRange, searchHandler}) {
    const classes = useStyles();
    const [error, setError] = useState(false)

    const [taskType, setTaskType] = useState({type: "once"})
    const keywordValidate = (e)=>{
        // if (typeof cancelToken != typeof undefined) {
        // cancelToken.cancel();
        // }
        // cancelToken = axios.CancelToken.source();

        // const url = `https://www.instagram.com/web/search/topsearch/?context=blended&query=%23${keyword}&include_reel=true`
        // axios.get(url,{ cancelToken: cancelToken.token })
        // .then(res => {
        //     console.log(res.data)
        // })
        
        setKeyword(e.target.value);
        if (e.target.value === ""){
            setError(true)
        } else {
            setError(false)
        }
    }
    const platformChange = (event) => {
        setPlatform({ ...platform, [event.target.name]: {...platform[event.target.name] ,checked: event.target.checked} });
    };
    const Ranges = [
        {
          label: '1 week',
          value: datePage => {
              console.log(datePage)
            return dateFns.addDays(dateFns.parse(datePage,'yyyy-MM-DD',new Date()), -1);
          },
          closeOverlay: false,
        }
      ];
    return (
        <Box display='flex' flexDirection="row" alignItems="center" justifyContent="center" >
            <Box className={classes.left} display='flex' flexDirection="column" >
                <Checkbox checked={platform} checkedHandler={platformChange}/>

                <Box className={classes.input}  >
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
                <Box className={classes.datePicker}>
                    <DateRangePicker placeholder="Select Data Range" 
                        ranges={[
                        {
                            label: 'Last 7 days',
                            value: [dateFns.subDays(new Date(), 7), new Date()],
                            closeOverlay: false,
                        },
                        {
                            label: 'Last 14 days',
                            value: [dateFns.subDays(new Date(), 14), new Date()],
                            closeOverlay: false,
                        },
                        {
                            label: 'Last 30 days',
                            value: [dateFns.subDays(new Date(), 31), new Date()],
                            closeOverlay: false,
                        },
                        {
                            label: 'Last 6 mo',
                            value: [dateFns.subDays(new Date(), 31*6), new Date()],
                            closeOverlay: false,
                        },
                        {
                            label: 'Last 12 mo',
                            value: [dateFns.subDays(new Date(), 31*12), new Date()],
                            closeOverlay: false,
                        },
                        ]}
                        disabledDate={date => dateFns.isAfter(date, new Date())} 
                        onOk={date=> setDateRange(date) }
                        />
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

                    
                    <RadioGroup value={taskType.type} onChange={(e) => setTaskType({type: e.target.value})}>
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
                    <Button onClick={searchHandler} variant="contained" color="primary">Submit</Button>

                </Box>
        </Box>
    )
}

export default Input
