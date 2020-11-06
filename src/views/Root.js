import React, { useState, useEffect } from 'react'
import { ThemeProvider } from "styled-components";
import { StylesProvider, ThemeProvider as MuiThemeProvider,
createMuiTheme } from "@material-ui/core";
import App from "../components/App";
import { hot } from 'react-hot-loader/root';
import { isDev } from "../utils/dev-prod";
import {themes} from "../styles/themes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchPost from './SocialMediaData';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createGlobalStyle } from 'styled-components'
import 'rsuite/dist/styles/rsuite-default.css';
// import 'rsuite/dist/styles/rsuite-dark.css';

function Root() {
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState("dark")

    useEffect(() => {
        color === "dark" ? require('rsuite/dist/styles/rsuite-dark.css'):
        require('rsuite/dist/styles/rsuite-default.css')
    }, [color])
    
    const [project, setProject] = useState("a")
    const MuiTheme = createMuiTheme(themes[color]);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
    const GlobalStyle = createGlobalStyle`
    body {
        color: ${props => (props.theme.palette.text.primary)};
    }
    `

    return (
        <BrowserRouter>
        <CssBaseline/>
        <GlobalStyle theme={MuiTheme}/>
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={MuiTheme}>
        <ThemeProvider theme={MuiTheme}>
            <div style={{ display: "flex"}}>
            <TopBar open={open} handleDrawerOpen={handleDrawerOpen} setProject={setProject} color={color} setColor={setColor}/>
            <SideBar open={open} handleDrawerClose={handleDrawerClose}/>
            <Switch>
            <Route path="/social-media-data">
                <SearchPost/>
            </Route> 
            <Route path="/">
                <App/>
            </Route>
            </Switch>
            </div>
        </ThemeProvider>
        </MuiThemeProvider>
        </StylesProvider>
        </BrowserRouter>
    )   
}

export default isDev? hot(Root) : Root;
