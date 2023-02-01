import React from "react"
import { RecordPreview } from "../../components"

export default function SearchResults({ searchResult }) {
<<<<<<< HEAD
	console.log("srcRes:", searchResult)
=======
>>>>>>> server
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
			<div className="mx-auto flex gap-1 w-full border-b-2 pb-2 border-gray-400">
				<span className="w-2/12 text-center">Photo</span>
				<span className="w-1/12 text-center">Id</span>
				<span className="w-3/12 text-center">Name</span>
				<span className="w-1/12 text-center">Age</span>
				<span className="w-1/12 text-center">Gender</span>
				<span className="w-2/12 text-center">Height (inch)</span>
				<span className="w-2/12 text-center">Crime</span>
			</div>
			<ul className="flex flex-col w-full rounded-md gap-4">
				{!searchResult.length ? "No records found!" : listOfUsers}
			</ul>
		</div>
	)
}
