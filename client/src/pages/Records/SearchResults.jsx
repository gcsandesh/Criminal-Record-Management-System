import React from "react";
import { UserPreview } from "../../components";

export default function SearchResults({ searchResult }) {
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
			isCriminal,
			crime_id,
		}) => (
			<li key={record_id}>
				<UserPreview
					recordId={record_id}
					firstName={first_name}
					middleName={middle_name}
					lastName={last_name}
					age={age}
					gender={gender_id}
					height={height_inch}
					photo={photo}
					isCriminal={isCriminal}
					crime={crime_id}
				/>
			</li>
		)
	);
	return (
		<div>
			<ul>{listOfUsers}</ul>
		</div>
	);
}
