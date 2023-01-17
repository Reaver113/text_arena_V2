import React from 'react';
import { ToggleButton } from '@mui/material';
import { ToggleButtonGroup } from '@mui/material';
import Bow from "../assets/bow.png";
import Sword from "../assets/sword.png";
import "./Toggle.css"


function Toggle() {
    return (
    <div>
        <ToggleButtonGroup
            className="tbg"
            color="primary"
            value=""
            exclusive
            onChange=""
            aria-label="Platform">
            <ToggleButton value="Sword"><img className="sword" src={Sword} alt="Sword" /></ToggleButton>
            <ToggleButton value="Bow"><img className="bow" src={Bow} alt="Bow" /></ToggleButton>
        </ToggleButtonGroup>
    </div>
    );
}

export default Toggle;
