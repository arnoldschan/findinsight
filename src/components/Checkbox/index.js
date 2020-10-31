import React, { useEffect } from "react";
import CheckboxM from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    label: {
        color: theme.palette.text.primary
    },
    platform:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
}))

export default function Checkbox({ checked, checkedHandler }) {
    const classes = useStyles();
    return (
    <FormGroup className={classes.platform}>
    { Array.from(Object.entries(checked), ([platformName, data]) => 
        <FormControlLabel
            className={classes.label}
            control={ <CheckboxM checked={data.checked} onChange={checkedHandler} name={platformName} />}
            label={platformName}
        />)

    }
    </FormGroup>
)}