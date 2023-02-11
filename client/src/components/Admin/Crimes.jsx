import React, { useState } from "react"

export default function Crimes({ nameList }) {
    const [crimes, setCrimes] = useState([])
    fetch("http://localhost:9988/api/crimes")
        .then((res) => res.json())
        .then((data) => setCrimes(data))

    console.log(crimes)
    return <div>Crimes List: {nameList}</div>
}
