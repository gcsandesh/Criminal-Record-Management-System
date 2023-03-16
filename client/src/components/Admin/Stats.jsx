import React, { useEffect, useState } from "react"

export default function Stats() {
    const [records, setRecords] = useState([])
    const [users, setUsers] = useState([])

    const noOfUsers = users.length
    const noOfRecords = records.length
    const noOfCriminals = records.filter(
        (record) => record.crime_id !== 0
    ).length
    const noOfNonCriminals = records.filter((record) => !record.crime_id).length

    //count occurence of crime in every record
    const mostCommittedCrime = getMostCommittedCrime()
    function getMostCommittedCrime() {
        const committedCrimes = records.map((record) => record.cname)
        const counts = [] //gives counts of every crime

        committedCrimes.forEach((value) => {
            return counts.push(
                committedCrimes.filter(
                    (crime) => crime != "-" && crime == value
                ).length
            )
        })
        const maxCount = Math.max.apply(Math, counts)
        const maxCountLoc = counts.indexOf(maxCount)
        const maxCommittedCrime = committedCrimes[maxCountLoc]
        return maxCommittedCrime
    }

    useEffect(() => {
        fetch("http://localhost:9988/api/records")
            .then((res) => res.json())
            .then((data) => setRecords(data))

        fetch("http://localhost:9988/api/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
    }, [])

    return (
        <div>
            <h2 className="font-bold text-lg underline underline-offset-4">
                Site Statistics
            </h2>
            <ul>
                <li>Users: {noOfUsers}</li>
                <li>Records: {noOfRecords}</li>
                <li>Criminals: {noOfCriminals}</li>
                <li>Non-criminals: {noOfNonCriminals}</li>
                <li>Most committed crime: {mostCommittedCrime}</li>
            </ul>
        </div>
    )
}
