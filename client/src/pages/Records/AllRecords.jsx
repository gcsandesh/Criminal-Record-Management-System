import React, { useState, useEffect } from "react";
import { RecordPreview } from "../../components";
// import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function AllRecords({ isAdmin }) {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		fetch("http://localhost:9988/api/records")
			.then((res) => res.json())
			.then((data) => setRecords(data));

		// return () => {
		// 	setAllRecords([]);
		// };
	}, []);

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
			isCriminal,
			crime_id,
		}) => {
			return (
				<li key={record_id}>
					<RecordPreview
						isAdmin={false}
						// if admin => display edit and delete icons
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
			);
		}
	);

	return (
		<div>
			<ul>{allRecordsEl}</ul>
		</div>
	);
}
