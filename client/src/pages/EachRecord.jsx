import React from "react";
import { useParams } from "react-router-dom";

export default function EachRecord() {
	const { id } = useParams();
	return (
		<div>
			<h1 className="text-2xl">EachRecord</h1>
			<p>
				{/* id shall be 3 or 4 digit number, idk */}
				id: {id}
				<br />
				Name: firstName LastName <br />
				photo, age, height, weight, gender, crime, isCriminal
			</p>
		</div>
	);
}
