// app/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        brand: {
            100: '#f7c1d3',
            200: '#e58a9e',
            300: '#e55085',
            400: '#db2f6f',
            500: '#d02a61',
            600: '#b72056',
            700: '#9d1c4a',
            800: '#841340',
            900: '#6a0a36',
        },
    },
});

export default theme;
