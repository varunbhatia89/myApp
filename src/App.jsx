import React from 'react';
import Sdata from './Sdata';
import Card from './Cards';

let favseries = "Netflix";

const FavS = () => {
    if (favseries === "Netflix") {
        return Sdata.map((val) => {
            return (
                <Card
                    key={val.id}
                    sname={val.sname}
                    src={val.imgsrc}
                    title={val.title}
                    links={val.links} />
            );
        })
    }
    else {
        Sdata.map((val) => {
            return (
                <Card
                    key={val.id}
                    sname={val.sname}
                    src={val.imgsrc}
                    title={val.title}
                    links={val.links} />
            );
        })
    }
}
const App = () => {
    return <>
        <h1 className='heading_style'>List of top 5 Netflix Web Series</h1>
        <FavS />
    </>
}

export default App;