import React, { useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const ListItems = (props) => {
    const [line, setFlag] = useState('');
    const iconClick = () => {
        setFlag('true');

    };
    return <>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <HighlightOffIcon onClick={iconClick} /><ListItemText style={{ textDecoration: line ? 'Line-through' : 'none' }} primary={props.props} />
                </ListItemButton>
            </ListItem>
        </List>

    </>
};
export default ListItems;