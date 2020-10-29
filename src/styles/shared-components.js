import styled from 'styled-components'
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { InputLabel } from '@material-ui/core';

export const View = styled.div(
    {paddingTop: 64,
        width: '100%',
    minHeight: '100vh',
    },
    ({ theme })=> theme.app)
export const Boxed = styled(Box)(
    ({theme, ...props})=>(
        { margin: 10 ,borderRadius: 10, padding: 20, ...props,
        ...theme.box}
        ))
// export const InputBox = styled(TextField)(
//     ({theme, ...props})=>( {borderRadius: 5, ...props,
//         ...theme.input}
//         ))


export const Dropdown = styled(TextField)(({theme})=>
({
    width: '200px',
    color: 'white',
    ...theme.input,
    cursor: 'pointer',
})
)
export const InputBox = styled(TextField)(({theme})=>
({
    ...theme.input,
}))

export const InputLabelStyled = styled(InputLabel)(({theme})=>
({
    ...theme.input,
}))

export const Option = styled.option(({theme})=>
    ({
        ...theme.option
    })
)