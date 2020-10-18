import React from 'react'
import styled, { ThemeProvider } from "styled-components";
import App from "./App";
import { hot } from 'react-hot-loader/root';
import { isDev } from "../utils/dev-prod";
import {themes} from "../styles/themes";


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
    return (
        <ThemeProvider theme={themes.dark}>
            <App/>
            <TestTheme/>
        </ThemeProvider>
    )   
}

export default isDev? hot(Root) : Root;
