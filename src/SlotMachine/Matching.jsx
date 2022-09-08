import React from "react";

const Matching = (props) => {
    let a = props.props1.x;
    let b = props.props1.y;
    let c = props.props1.z;
    return <div>
        <h1>{a} {b} {c}</h1>
        <h1>This is Matching</h1>
    </div>
};

export default Matching;