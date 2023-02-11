import React, { useState, useEffect } from "react"

export default function Crimes() {
    const [crimes, setCrimes] = useState([])
    useEffect(() => {
        fetch("http://localhost:9988/api/crimes")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setCrimes(data)
            })
    }, [])

    const crimeEls = crimes.map((crime, index) => {
        if (!index) return
        return (
            <div className="flex flex-col gap-2 my-4 ">
                <h3 className="font-bold">{crime.cname} :- </h3>
                <div className=" text-gray-400">{crime.description}</div>
            </div>
        )
    })
    console.log(crimes)
    return <div className="container p-2">Crimes List: {crimeEls}</div>
}
