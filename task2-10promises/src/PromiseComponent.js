import React from 'react';
import { useEffect, useState } from "react";


export default function PromiseComponent() {
    const [responses, setResponse] = useState();

    useEffect(() => getData, []);

    const promises = [1, 2, 3].map(
        (value) => () => new Promise((resolve, reject) =>
            setTimeout(() => resolve(value), 3000)))

    function getData() {
        promises.reduce(
            (p, x) =>
              p.then(res => setResponse(res)),
            Promise.resolve()
          )
        // const promise = new Promise((resolve, reject) => {
        //     setTimeout(() => resolve(5), 3000)})
        //     .then(res => res + 5)
        //     .then(res => {throw 'error'})
        //     .catch(e => setResponse(e))
        //     // .then(res => setResponse(res))
    }

    return (
        <div>
            Status codes:
            {responses}
        </div>
    )
}
