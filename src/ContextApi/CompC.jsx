import React from 'react';
import { FirstName, LastName } from './App';

const CompC = () => {
    return <>
    <h1>CompC</h1>
        {/* <FirstName.Consumer>
            {(fName) => {
                return (
                    <LastName.Consumer>
                        {(lName) => {
                            return <h1>My Name is {fName} {lName}</h1>;
                        }}
                    </LastName.Consumer>
                )
            }}
        </FirstName.Consumer> */}
    </>
};

export default CompC;