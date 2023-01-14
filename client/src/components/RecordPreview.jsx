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
		<div className="flex justify-between items-center gap-2 h-24 my-2">
			<div className=" w-1/6 h-full ">
				<img src={photo} className="w-full h-full object-cover" />
			</div>
			<div className="flex w-full items-center justify-between">
				<p>Id: {recordId}</p>
				<p>{`${firstName} ${middleName ? middleName : ""} ${lastName}`}</p>
				<p>Age: {age}</p>
				<p>Sex: {gender}</p>
				<p>Height (inches): {height}</p>
				<p>Criminal: {isCriminal}</p>
				<p>Crime committed: {crime}</p>
			</div>
		</div>
	);
}
