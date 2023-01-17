import React from 'react';
import { ToggleButton } from '@mui/material';
import { ToggleButtonGroup } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Bow from "../assets/bow.png";
import Sword from "../assets/sword.png";
import "./Toggle.css"


function Toggle() {
    const [alignment, setAlignment] = React.useState('web');

const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
};


const theme = createTheme({
    palette: {
        mode: 'dark',
    primary: {
        main: '#b700ff',
    },
    },
});

    return (
    <div>
        <ThemeProvider theme={theme}>
        <ToggleButtonGroup
            className="tbg"
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform">
            <ToggleButton value="Sword"><img className="sword" src={Sword} alt="Sword" /></ToggleButton>
            <ToggleButton value="Bow"><img className="bow" src={Bow} alt="Bow" /></ToggleButton>
        </ToggleButtonGroup>
        </ThemeProvider>
    </div>
    );
}

export default Toggle;
