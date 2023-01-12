import React, { useState } from "react";

export default function AddRecord() {
	const emptyRecord = {
		firstName: "",
		middleName: "",
		lastName: "",
		age: "",
		gender: "",
		crime: "",
		height: "",
		isCriminal: "",
		photo: "",
	};

	const [record, setRecord] = useState(emptyRecord);

	function handleInput(event) {
		const property = event.target.name;
		const value = event.targe.value;

		setRecord((prevRecord) => ({
			...prevRecord,
			[property]: value,
		}));
	}
	return (
		<div>
			<form
				method="GET"
				onSubmit={handleSubmit}
				className="flex flex-col justify-between items-start rounded-md gap-2 p-4 bg-light text-dark"
			>
				<div className="flex justify-between gap-2">
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="firstName">First Name</label>
						<input
							onChange={handleInput}
							className="bg-gray-200 rounded-sm px-2 w-36"
							type={"text"}
							name="firstName"
							value={record.firstName}
						/>
					</div>
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="middleName">Middle Name</label>
						<input
							onChange={handleInput}
							className="bg-gray-200 rounded-sm px-2 w-36"
							type={"text"}
							name="middleName"
							value={record.middleName}
						/>
					</div>
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="lastName">Last Name</label>
						<input
							onChange={handleInput}
							className="bg-gray-200 rounded-sm px-2 w-36"
							type={"text"}
							name="lastName"
							value={record.lastName}
						/>
					</div>
				</div>
				<div className="flex justify-between gap-2">
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="age">Age</label>
						<input
							onChange={handleInput}
							className="bg-gray-200 rounded-sm px-2 w-36"
							type={"number"}
							name="age"
							value={record.age}
						/>
					</div>
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="gender">Gender</label>
						<input
							onChange={handleInput}
							className="bg-gray-200 rounded-sm px-2 w-36"
							type={"text"}
							name="gender"
							value={record.gender}
						/>
					</div>
				</div>
				<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
					<label htmlFor="crime">Crime</label>
					<input
						onChange={handleInput}
						className="bg-gray-200 rounded-sm px-2 w-36"
						type={"text"}
						name="crime"
						value={record.crime}
					/>
				</div>
				<button
					// onClick={handleSubmit}
					className="bg-green-500 text-white rounded-full w-1/2 mx-auto text-sm p-1"
					type="submit"
				>
					Search
				</button>
			</form>
		</div>
	);
}
