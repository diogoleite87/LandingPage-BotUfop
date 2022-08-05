import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;

    }
    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        align-items: center;
        text-align: center;
        justify-content: center;
    }
`;