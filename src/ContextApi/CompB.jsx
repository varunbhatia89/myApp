import React, { useContext } from 'react';
import { FirstName, LastName } from './App';
const CompB = () => {
    const fName=useContext(FirstName);
    const lName=useContext(LastName);

    return <>
        {/* <FirstName.Consumer>
            {(fname) => {
                return (
                    <LastName.Consumer>
                        {(lname) => {
                            return <h1>my name is {fname} {lname}</h1>;
                        }}
                    </LastName.Consumer>
                )
            }}
        </FirstName.Consumer> */}
        
        <h1>my name is {fName} {lName}</h1>; 
        {/* THIS IS USECONTEXT(); */}
    </>
};

export default CompB;