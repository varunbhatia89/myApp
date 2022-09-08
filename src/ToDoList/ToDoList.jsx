import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

const ToDoList = () => {
    const [inputList, setInputList] = useState('');
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = (event) => {
        event.preventDefault();
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
    };

    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return id !== index;
            });
        });
    };
    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" onChange={itemEvent} value={inputList} placeholder='Add an Item'></input>
                    <button onClick={listOfItems}> + </button>
                    <ol>
                        {
                            items.map((textItem, index) => {
                                return <ToDoLists
                                    key={index}
                                    onSelect={deleteItems}
                                    props={textItem}
                                    id={index}
                                />
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
};

export default ToDoList;