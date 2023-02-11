import React, { useEffect, useState } from "react"

export default function Stats() {
	const [records, setRecords] = useState([])
	const [users, setUsers] = useState([])

	const noOfRecords = records.length
	const noOfUsers = users.length
	const noOfCriminals = records.filter((record) => record.isCriminal).length
	const noOfNonCriminals = records.filter((record) => !record.isCriminal).length
	//count occurence of crime in every record
	const mostCommittedCrime = getMostCommittedCrime()
	function getMostCommittedCrime() {
		const committedCrimes = records.map((record) =>
			record.crime_id ? record.crime_id : 0
		)
		const counts = [] //gives counts of every crime

		committedCrimes.forEach((value) => {
			return counts.push(
				committedCrimes.filter(
					(eachCrimeNum) => eachCrimeNum && eachCrimeNum == value
				).length
			)
		})
		const maxCount = Math.max.apply(Math, counts)
		const maxCountLoc = counts.indexOf(maxCount)
		const maxCommittedCrimeId = committedCrimes[maxCountLoc]

		if (maxCommittedCrimeId == 21) {
			return "Terrorism"
		} else if (maxCommittedCrimeId == 0) {
			return "None"
		} else if (maxCommittedCrimeId == 2) {
			return "Murder"
		}
	}
	// now get all crimes and match the crimeWithMaxCount to crime_id in crimes table
	useEffect(() => {
		fetch("http://localhost:9988/api/records/get")
			.then((res) => res.json())
			.then((data) => setRecords(data))

		fetch("http://localhost:9988/api/users/get")
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
