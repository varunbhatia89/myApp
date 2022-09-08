import React, { useState } from "react";

const App2 = () => {
    let bg = "purple";
    let buttonText = "Click Me!";
    const [bgColor, setBgColor] = useState(bg);
    const [ctText, setCtText] = useState(buttonText);

    const singleClick = () => {
        bg = "#34495e";
        buttonText = "Ayyo!! 👍"
        setBgColor(bg);
        setCtText(buttonText);
    };

    const doubleClick = () => {
        bg = "grey";
        buttonText = "DoubleClicked";
        setBgColor(bg);
        setCtText(buttonText);
    };

    return (
        <>
            <div style={{ backgroundColor: bgColor }}>
                <button className="button__ClickMe" onDoubleClick={doubleClick} onClick={singleClick}>{ctText}</button>
            </div>
        </>
    )
};

export default App2;