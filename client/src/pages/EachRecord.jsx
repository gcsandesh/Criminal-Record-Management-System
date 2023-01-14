import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EachRecord() {
	const { id } = useParams();
	const [
		{
			record_id,
			first_name,
			middle_name,
			last_name,
			gender_id,
			age,
			crime_id,
			photo,
			height_inch,
		},
		setRecord,
	] = useState({});

	const crime = crime_id; //for now, later get crimes from crimes api and match with id
	useEffect(() => {
		fetch(`http://localhost:9988/api/records/id/${id}`)
			.then((res) => res.json())
			.then((data) => setRecord(data[0]));
	}, []);

	return (
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
				<p>Gender: {gender_id}</p>
				<p>Crime: {crime}</p>
			</div>
		</div>
	);
}
