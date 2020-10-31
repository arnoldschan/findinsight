const shared = {MuiTypography: {
    variantMapping: {
      h1: 'h2',
      h2: 'h2',
      h3: 'h2',
      h4: 'h2',
      h5: 'h2',
      h6: 'h2',
      subtitle1: 'h2',
      subtitle2: 'h2',
      body1: 'span',
      body2: 'span',
    },}}
const input = {
    '& .MuiInputBase-root, .MuiInputLabel-root': {
        color: 'white'
    },

    '& .MuiInput-underline:before':{
        borderBottom: '0px',
    },
    '& .MuiSvgIcon-root': {
        color: 'white',
    },

}
export const themes = {
    light: {
        name: 'light',
        typography: shared,
        app: {
            backgroundColor: 'white',
        },
        palette: {
            text:{
                primary: "#000000",
                secondary: "#212121"
            },
        },
        appBar:{
            borderBottom: 0,
        },
        messages: {
            backgroundColor: 'white',
            color: 'black'
        },
        input: input,
        option: {
            backgroundColor: 'white',
            color: 'black'
        },
        box: {
            backgroundColor: 'white',
            border: '1px solid #cacaca',
        }
    },
    dark: {
        name: 'dark',
        props: shared,
        palette: {
          type: "dark",
          background: {
            default: '#000000',
            paper: '#000000',
          },
          primary: {
              main: '#90caf9',
            },
          secondary: {
            main: '#f48eb1',
          },
          text:{
              primary: "#ffffff",
              secondary: "#dcdcdc"
          }
        },
        app:{
            backgroundColor: 'black',

        },
        appBar:{
            borderBottom: '1px solid #cacaca',
            backgroundColor: 'black',
            color: 'white',
        },
        messages: {
            backgroundColor: 'black',
            color: 'white'
        },
        input: { '&.Mui-focused':{color:'white'},
            ...input},
        dropdownItem : {
            border: '1px solid',
        },
        box: {
            backgroundColor: 'black',
            border: '1px solid white',
        }
    }
}

// export const applyTheme = name => ({ theme }) => 