import React, { useState } from 'react';

const About = () => {
    const [data, setData] = useState({
        FullName: "",
        Phone: "",
        Email: "",
        Select: "",
        TextArea: ""
    });

    const inputChange = (event) => {
        const [name, value] = event.target.value;
        setData((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        });

    };
    
    const formSubmit = (event) => {
        event.preventDefault();
    };
   
    return <>
        <form onSubmit={formSubmit}>
            <div className="form-group">
                <label for="inputName" className='form-label'>Name</label>
                <input
                    type="text"
                    id="inputName"
                    className="form-control"
                    value={data.FullName}
                    name="fullName"
                    onChange={inputChange}
                    placeholder="Enter Name" />
            </div>
            <div className="form-group">
                <label for="inputPhone" className="form-label">Phone Number</label>
                <input
                    type="number"
                    className='form-control'
                    id="inputPhone"
                    value={data.Phone}
                    name='Phone'
                    onChange={inputChange}
                    placeholder="Enter Phone Number" />
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1" className='form-label'>Email address</label>
                <input
                    type="email"
                    id="exampleFormControlInput1"
                    value={data.Email}
                    className="form-control"
                    name="Email"
                    onChange={inputChange}
                    placeholder="name@example.com" />
            </div>
            {/* <div className="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select
                    id="exampleFormControlSelect1"
                    className="form-control"
                    value={data.Select}
                    name="select"
                    onChange={inputChange}
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    name="TextArea"
                    onChange={inputChange}
                    value={data.TextArea}
                    rows="3" />
            </div> */}
        </form>
    </>
};

export default About;