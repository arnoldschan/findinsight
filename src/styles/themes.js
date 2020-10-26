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

export const themes = {
    light: {
        name: 'light',
        props: shared,
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
        props: shared,
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