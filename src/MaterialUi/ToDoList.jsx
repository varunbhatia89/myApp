import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import ListItems from "./ListItems";
 import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ToDoList = () => {
    const [item, setItem] = useState('');
    const [newItem, setNewItem] = useState([]);

    const inputChange = (event) => {
        setItem(event.target.value);
    }
    const buttonClick = () => {
        setNewItem((oldItems) => {
            return [...oldItems, item];
        });
    };

    const deleteItem = (id) => {
        setNewItem((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return id !== index;
            })
        })
    };

    return <>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type='text' onChange={inputChange} placeholder="Add an Item" />
                <Tooltip title="Add"><Button variant="contained" onClick={buttonClick} color="secondary"><AddIcon /></Button></Tooltip>
                <ol>
                    {
                        newItem.map((textItem, index) => {
                            return <ListItems
                                key={index}
                                props={textItem}
                                id={index}
                                onClick={deleteItem}
                            />
                        })
                    }
                </ol>
                <button className="btn btn-primary">BootStrap</button>
            </div>
        </div>
    </>
};

export default ToDoList;