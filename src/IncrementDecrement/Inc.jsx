import React, { useState } from 'react';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Clock from 'react-digital-clock';

const Inc = () => {
    const [counter, setCounter] = useState(0);

    const Increment = () => {
        setCounter(counter + 1);
    };

    const Decrement = () => {
        if (counter >= 1) {
            setCounter(counter - 1);
        }
    };

    return <>
        <div className='main_div'>
            <div className='center_div'>
                <br /><br /><br /><br />

                <h1>{counter}</h1>
                <br />
                <Tooltip title="Add"><Button variant="contained" onClick={Increment}><AddIcon/></Button></Tooltip>
                <Tooltip title="Delete"><IconButton onClick={Decrement}><DeleteIcon /></IconButton></Tooltip>       
                <Clock/>         
            </div>
        </div>
    </>

};

export default Inc;