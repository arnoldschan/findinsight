import React from 'react'
import { View, Boxed, InputBox } from "styles/shared-components";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core';
function SearchPost() {
    const useStyles = makeStyles((theme) => ({
        root: {
          ...theme.typography.button,
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          padding: theme.spacing(1),
        },
      }));
      
    const classes = useStyles();
        
    return (
        <View>
            <Boxed>
                <Typography className={classes?.root}>Search</Typography>
                <InputBox/>
            </Boxed>
        </View>
    )
}

export default SearchPost
