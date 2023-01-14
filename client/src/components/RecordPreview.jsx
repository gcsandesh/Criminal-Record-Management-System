import React from "react";

export default function RecordPreview({
	recordId,
	firstName,
	middleName,
	lastName,
	age,
	gender,
	height,
	photo,
	isCriminal,
	crime,
}) {
	return (
		<div className="flex flex-col">
			<p>{photo}</p>
			<div className="flex items-center justify-between">
				<p>{recordId}</p>
				<p>{firstName}</p>
				<p>{middleName}</p>
				<p>{lastName}</p>
				<p>{age}</p>
				<p>{gender}</p>
				<p>{height}</p>
				<p>{isCriminal}</p>
				<p>{crime}</p>
			</div>
		</div>
	);
}
