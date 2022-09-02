import React from 'react'
import { useEffect, useState } from 'react';
import { getData } from './service/getData';


export default function SearchOptions() {
    const [intervalId, setIntervalId] = useState();
    const [initElements, setElements] = useState(['A', 'B', 'C', 'D', 'E']);

    useEffect(() => {
        console.log(1);
        setIntervalId(setInterval(interval, 2000));
    }, []);

    async function LoadElements(band) {
        let data = await getData(band);
        clearInterval(intervalId);
        setElements([...initElements, ...data]);
        setIntervalId(setInterval(interval, 2000));
    }

    function interval () {
        let option = initElements[0];
        let newOptions = initElements;
        if (initElements.length <= 5)
            newOptions.push(option);
        newOptions.shift();
        setElements([...initElements]);
    }


    return (
        <>
            <input id='form' type='text' placeholder="Search Band" onInput={(e)=>LoadElements(e.target.value)} />
            <div id="search-options">
                {initElements.map((element, index) =>
                    index <= 4
                        ? <p key={index}>{element}</p>
                        : null
                )}
            </div>
        </>

    )
}
