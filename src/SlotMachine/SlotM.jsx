import React from "react";
import Matching from "./Matching";
import NotMatching from "./NotMatching";

const SlotM = (props) => {
    let { x, y, z } = props;
    if (x === y && y === z) {
      return <Matching props1={props}/>
    }
    else {
        return <NotMatching props1={props}/>
    }
}

export default SlotM;