const Add = (a, b) => {
    return (a+b)
};

const Sub =(a,b)=>{
    return (a-b)
};

const Div=(a,b)=>{
    return Math.round((a/b)*100)/100;
};

const Mul=(a,b)=>{
return (a*b);
};

export {Add,Sub,Div,Mul};