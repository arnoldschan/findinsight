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
import {Helmet} from "react-helmet";
// import 'rsuite/dist/styles/rsuite-default.css';
// import 'rsuite/dist/styles/rsuite-dark.css';

function Root() {
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState("dark")
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
    const rsuiteStyle = (href, disabled) => {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = href;
        link.disabled = disabled;
        return link;
    }
    useEffect(() => {
        const rsuiteDark = document.getElementById("rsuite-dark")
        const rsuiteLight = document.getElementById("rsuite-light")
        if (rsuiteDark != null) {
            if (color === "dark"){
                rsuiteDark.removeAttribute('disabled')
                rsuiteLight.setAttribute('disabled',"")
            } else {
                rsuiteDark.setAttribute('disabled',"")
                rsuiteLight.removeAttribute('disabled')
            }
        }
    }, [color])
    return (
        <BrowserRouter>
        <Helmet>
            {color==="dark" ? 
            <link type = "text/css" rel = "stylesheet" href="/rsuite-dark.min.css" />
            :<link type = "text/css" rel = "stylesheet" href="/rsuite-default.min.css" />}
        </Helmet>
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
