import axios from 'axios';
import React, { useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Fetch = () => {
    const [data, setData] = useState([]);

    const getCountryFetch = async () => {
        const countries = await (await fetch('https://pokeapi.co/api/v2/berry-flavor/1', { mode: 'cors' })).json();
        setData(countries.berries);
    };

    const getCountryAxios = async () => {
        const countries = await axios.get(`https://pokeapi.co/api/v2/berry-flavor/1`, { mode: 'cors' });        
        setData(countries.data.berries);
    };

    useEffect(() => {
        getCountryAxios();
    }, []);
    return <>
        <div>
            <div>
                <h1>List of Countries</h1>
                <table className="table table-striped table-responsive table-bordered table-hover table-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Url</th>
                            <th>Potency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((currentelem, index) => {
                                return (
                                    <tr classname="bg-info" key={index}>
                                        <td>{currentelem.berry.name}</td>
                                        <td>{currentelem.berry.url}</td>
                                        <td>{currentelem.potency}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
};

export default Fetch;