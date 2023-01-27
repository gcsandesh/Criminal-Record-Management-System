import React from "react"
import { RecordPreview } from "../../components"

export default function SearchResults({ searchResult }) {
	// console.log(searchResult)
	const listOfUsers = searchResult.map(
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
		}) => (
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
	)
	return (
		<div className="rounded-md">
			<ul className="flex flex-col w-full rounded-md gap-4">
				{!searchResult.length ? "No records found!" : listOfUsers}
			</ul>
		</div>
	)
}
