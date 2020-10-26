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
          '& .Mui-focused, .MuiFormLabel-root': {
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
            label="Data Source"
            onChange={(e)=>history.push(e.target.value)}
          >
            {[{title: 'Social media data', link: "/social-media-data"},{title: 'Coming Soon', link: "/coming-soon"}].map((option) => (
            <option key={option.title} value={option.link}>{option.title}</option>
            ))}
          </TextFieldStyled>
    )
}
export default DropdownMenu;