import React from "react";
import './index.css';

const span = {};
let Messagetoshow;
let currentTime = new Date();
currentTime = currentTime.getHours();
if (currentTime >= 1 && currentTime < 12) {
    Messagetoshow = "Good Morning";
    span.color = "green";
    span.fontFamily = '"Poppins", sans-serif';
}
else if (currentTime >= 12 && currentTime < 19) {
    Messagetoshow = "Good AfterNoon";
    span.color = "yellow";
    span.fontFamily = '"Poppins", sans-serif';
}
else if (currentTime >= 19) {
    Messagetoshow = "Good Night";
    span.color = "red";
    span.fontFamily = '"Poppins", sans-serif';
}
const Greeting = () => {
    return (
        <>
            <div>
                <h1>
                    Hello Sir, <span style={span}> {Messagetoshow}</span>
                </h1>
            </div>
        </>
    )
};

export default Greeting;