import React from 'react';
import { useState } from 'react';
import Simg from './Simg';

const Sresult = () => {
    const [img, setImg] = useState('');

    const inputChange = (event) => {
        const data = event.target.value;
        setImg(data);
    }
    return <>
        <div>
            <div>
                <input type="text" placeholder="Search Results" val={img} onChange={inputChange} />
            </div>
            <div>
                {img === "" ? null : <Simg img={img} />}
            </div>
        </div>
    </>
};

export default Sresult;