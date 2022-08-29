import React from 'react'
import { useEffect, useState } from 'react';


export default function SearchOptions({ initElements, setElements }) {

    const [intervalId, setIntervalId] = useState();

    useEffect(() => {
        console.log(1);
        setIntervalId(setInterval(()=>interval(), 2000));
    }, []);

    const interval = () => {
        let option = initElements[0];
        let newOptions = initElements; // za domashno
        newOptions.push(option);
        newOptions.shift();
        setElements([...newOptions]);
    }


    return (
        <div id="search-options">
            {initElements.map((element, index) => <p key={index}>{element}</p>)}
        </div>
    )
}
