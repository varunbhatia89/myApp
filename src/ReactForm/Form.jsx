import React, { useState } from "react";

const Form = () => {
    const [fullName, setFullName] = useState({
        fName: '',
        lName: '',
        eMail: ''
    });


    const inputChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setFullName((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
            // if (name === 'fName') {
            //     return {
            //         fName: value,
            //         lName: prevValue.lName,
            //         eMail:prevValue.eMail
            //     };
            // }
            // else if (name === 'lName') {
            //     return {
            //         fName: prevValue.fName,
            //         lName: value,
            //         eMail:prevValue.eMail
            //     };
            // }
            // else if (name === 'eMail') {
            //     return {
            //         fName: prevValue.fName,
            //         lName: prevValue.lName,
            //         eMail:value
            //     };
            // }
        });


    };

    const onSubmit = (event) => {
        event.preventDefault();
        alert('Form Submitted');
    };

    return (
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <h1>Hello {fullName.fName} {fullName.lName} {fullName.eMail}</h1>
                    <input type="text"
                        name="fName"
                        onChange={inputChange}
                        value={fullName.fName}
                    />
                    <br />
                    <input type="text"
                        name="lName"
                        onChange={inputChange}
                        value={fullName.lName}
                    />
                    <br />
                    <input type="text"
                        name="eMail"
                        onChange={inputChange}
                        value={fullName.eMail}
                    />
                    <br />
                    <button className="button__ClickMe" type="submit">Click Me 🧟‍♀️</button>
                </form>
            </div>

        </>
    )
};

export default Form;