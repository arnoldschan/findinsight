export const themes = {
    light: {
        name: 'light',
        app: {
            backgroundColor: 'white',
        },
        appBar:{
            borderBottom: 0,
        },
        messages: {
            backgroundColor: 'white',
            color: 'black'
        },
        dropdown: {
            color: 'white',
        },
        box: {
            backgroundColor: 'white',
            border: '1px solid #cacaca',
        }
    },
    dark: {
        name: 'dark',
        palette: {
          type: "dark",
          background: {
            default: '#000000',
            paper: '#000000',
          },
          primary: {
              main: '#000000',
            },
          secondary: {
            main: '#b9f6ca',
          },
        },
        app:{
            backgroundColor: 'black',

        },
        appBar:{
            borderBottom: '1px solid #cacaca',
        },
        messages: {
            backgroundColor: 'black',
            color: 'white'
        },
        dropdown: {
            color: 'white',
        },
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