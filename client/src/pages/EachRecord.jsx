import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function EachRecord() {
	const { id } = useParams()
	const emptyRecord = {
		record_id: "",
		first_name: "",
		middle_name: "",
		last_name: "",
		gender_id: "",
		age: "",
		crime_id: "",
		photo: "",
		height_inch: "",
	}
	const [record, setRecord] = useState(emptyRecord)

	const {
		record_id,
		first_name,
		middle_name,
		last_name,
		gender_id,
		age,
		crime_id,
		photo,
		height_inch,
	} = record

	const [crime, setCrime] = useState({})
	const [gender, setGender] = useState({})

	// get crime
	useEffect(() => {
		fetch(`http://localhost:9988/api/crimes/get/id/${crime_id}`)
			.then((res) => res.json())
			.then((data) => setCrime(data[0]))
	}, [record])

	// get gender
	useEffect(() => {
		fetch(`http://localhost:9988/api/genders/get/id/${gender_id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data[0])
				setGender(data[0])
			})
	}, [record])

	// get record
	useEffect(() => {
		fetch(`http://localhost:9988/api/records/get/id/${id}`)
			.then((res) => res.json())
			.then((data) => {
				data[0] ? setRecord(data[0]) : setRecord(404)
			})
	}, [])

	return record === 404 ? (
		<div>Error 404: Congratulations, You are now accused of spying.</div>
	) : (
		<div className="p-4">
			<h1 className="text-2xl">Details</h1>
			{/* id shall be 3 or 4 digit number, idk */}
			<div className="flex flex-col gap-2">
				<img src={photo} className="w-36 h-36" />
				<p>Id: {record_id}</p>
				<p>
					Name: {first_name} {middle_name} {last_name}
				</p>
				<p>Age: {age}</p>
				<p>Height (inch): {height_inch}</p>
				<p>Gender: {gender ? gender.name : "-"}</p>
				<p>Crime: {crime ? crime.name : "-"}</p>
			</div>
		</div>
	)
}
