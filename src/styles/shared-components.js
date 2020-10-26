import styled from 'styled-components'
import { Input as InputMaterial } from "@material-ui/core";
export const View = styled.div(
    {paddingTop: 64,
        width: '100%',
    minHeight: '100vh',
    },
    ({ theme })=> theme.app)
export const Box = styled.div(
    ({theme, ...props})=>(
        { margin: 10 ,borderRadius: 10, padding: 20, ...props,
        ...theme.box}
        ))
export const Input = styled(InputMaterial)(
    ({...props})=>( {borderRadius: 5, ...props}),
        ({ theme }) => theme.input)