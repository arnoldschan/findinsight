import React from "react";
import TextField from '@material-ui/core/TextField';
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const DropdownMenu = () => {
      const history = useHistory();
      const TextFieldStyled = styled(TextField)(({theme})=>
      ({
        width: '200px',
        color: 'white',
        '& .MuiInputBase-root, .MuiInputLabel-root':{
            ...(theme.dropdown)
          },
          '& label.Mui-focused': {
            color: 'white',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            }},
            '& .MuiInput-underline:before':{
              borderBottom: '0px',
            },
            '& .MuiSvgIcon-root': {
              color: 'white',
            },
         cursor: 'pointer',
        }))

    return (
          <TextFieldStyled
          select
            SelectProps={{native:true}}
            label="Search input"
            onChange={(e)=>history.push("/"+e.target.value)}
          >
            {[{title: 'a'},{title: 'b'}].map((option) => (
            <option key={option.title} value={option.title}>{option.title}</option>
            ))}
          </TextFieldStyled>
    )
}
export default DropdownMenu;