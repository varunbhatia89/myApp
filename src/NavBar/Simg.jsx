import React from 'react';

const Simg = (props) => {
    const imgSrc = `https://source.unsplash.com/400x300/?` + props.img;
    return <>
        <img alt="Alternate Image" src={imgSrc} /> </>
};

export default Simg;