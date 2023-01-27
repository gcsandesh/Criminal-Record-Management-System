import React, { useState, useEffect } from "react"
import { RecordPreview } from "../../components"

export default function AllRecords() {
	const [records, setRecords] = useState([])

	useEffect(() => {
		fetch("http://localhost:9988/api/records/get")
			.then((res) => res.json())
			.then((data) => setRecords(data))
	}, [])

	const allRecordsEl = records.map(
		({
			record_id,
			first_name,
			middle_name,
			last_name,
			age,
			gender_id,
			height_inch,
			photo,
			crime_id,
		}) => {
			return (
				<li key={record_id}>
					<RecordPreview
						recordId={record_id}
						firstName={first_name}
						middleName={middle_name}
						lastName={last_name}
						age={age}
						genderId={gender_id}
						height={height_inch}
						photo={photo}
						crimeId={crime_id}
					/>
				</li>
			)
		}
	)

	return (
		<div>
			<ul>{allRecordsEl}</ul>
		</div>
	)
}
