import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import DropdownMenu from './Dropdown';
import styled from 'styled-components';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';


const drawerWidth = 240;
const AppBarStyled = styled(AppBar)(
  ({theme})=>(
    {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      ...theme.appBar
      
  })
)
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  setting: {
    display: 'flex',
    flexDirection: 'row',
  }
}));

export default function TopBar({open, handleDrawerOpen, setProject, setColor, color}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBarStyled
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Find insights
          </Typography>
        </Toolbar>
      <Box className={classes.setting}>
      <DropdownMenu setProject={setProject}/>
      <IconButton style={{color:'white'}} onClick={()=>setColor(color === "light" ? "dark": "light")}>
      <SettingsBrightnessIcon/>
      </IconButton>
      </Box>
      </AppBarStyled>
    </div>
  );
}
