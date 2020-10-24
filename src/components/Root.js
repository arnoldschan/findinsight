import React from 'react'
import styled, { ThemeProvider } from "styled-components";
import App from "./App";
import { hot } from 'react-hot-loader/root';
import { isDev } from "../utils/dev-prod";
import {themes} from "../styles/themes";
import { BrowserRouter } from "react-router-dom";
import TopBar from './TopBar';
import SideBar from './SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function TestTheme() {
    return (
    <Message>
        <p>Hi i'm a themed color</p>
    </Message>
    )
}

const Message = styled.div(
    {},
    ({ theme }) => theme.messages
)


function Root() {
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return (
        <BrowserRouter>
        <ThemeProvider theme={themes.dark}>
            <React.Fragment>
            <TopBar open={open} handleDrawerOpen={handleDrawerOpen}/>
            <SideBar open={open} handleDrawerClose={handleDrawerClose}/>
            <App/>
            </React.Fragment>
        </ThemeProvider>
        </BrowserRouter>
    )   
}

export default isDev? hot(Root) : Root;
