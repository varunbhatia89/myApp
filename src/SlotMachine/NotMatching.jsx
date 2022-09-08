import React from "react";

const NotMatching=(props)=>{
    let a= props.props1.x;
    let b= props.props1.y;
    let c= props.props1.z;
    return <div>
            <h1>{a} {b} {c}</h1>
            <h1>This is Not Matching</h1>
        </div>
};

export default NotMatching;