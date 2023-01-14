import React, { useEffect, useState } from "react";

export default function Stats() {
	const [records, setRecords] = useState([]);
	const [users, setUsers] = useState([]);

	const noOfRecords = records.length;
	const noOfUsers = users.length;
	const noOfCriminals = records.filter((record) => record.isCriminal).length;
	const noOfNonCriminals = records.filter(
		(record) => !record.isCriminal
	).length;
	//count occurence of crime in every record
	const committedCrimes = records.map((record) => record.crime_id);
	const counts = []; //gives counts of every crime

	committedCrimes.forEach((value) => {
		console.log(value);
		return counts.push(
			committedCrimes.filter(
				(eachCrimeNum) => eachCrimeNum && eachCrimeNum == value
			).length
		);
	});
	const maxCount = Math.max.apply(Math, counts);
	const maxCountLoc = counts.indexOf(maxCount);
	const maxCommittedCrimeId = committedCrimes[maxCountLoc];
	let maxCommittedCrime = "";
	// console.log(counts);
	// console.log("Max count:", maxCount);
	// console.log("indexOf max count:", maxCountLoc);
	// console.log("crime: ", maxCommittedCrimeId);
	if (maxCommittedCrimeId == 21) {
		maxCommittedCrime = "Terrorism";
	}
	// now get all crimes and match the crimeWithMaxCount to crime_id in crimes table
	useEffect(() => {
		fetch("http://localhost:9988/api/records")
			.then((res) => res.json())
			.then((data) => setRecords(data));

		fetch("http://localhost:9988/api/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	return (
		<div>
			<h2>Site Statistics</h2>
			<ul>
				<li>Users: {noOfUsers}</li>
				<li>Records: {noOfRecords}</li>
				<li>Criminals: {noOfCriminals}</li>
				<li>Non-criminals: {noOfNonCriminals}</li>
				<li>Most committed crime: {maxCommittedCrime}</li>
			</ul>
		</div>
	);
}
