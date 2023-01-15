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

	async function handleSubmit(event) {
		event.preventDefault();
		const res = await fetch("http://localhost:9988/api/records/create", {
			method: "POST",
			body: JSON.stringify(record),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		});
		const resAfterSubmit = await res.json();
		console.log("record: ", record);
		console.log("response", resAfterSubmit);
		setRecord(emptyRecord);
	}

	function handleInput(event) {
		const property = event.target.name;
		const value = event.target.value;

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
				<div className="flex justify-between gap-4">
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="firstName">First Name</label>
						<input
							onChange={handleInput}
							className="bg-gray-200 rounded-sm px-2 w-36 h-6 py-0.5 text-xs text-gray-600"
							type={"text"}
							name="firstName"
							value={record.firstName}
							required
						/>
					</div>
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="middleName">Middle Name</label>
						<input
							onChange={handleInput}
							className="bg-gray-200 rounded-sm px-2 w-36 h-6 py-0.5 text-xs text-gray-600"
							type={"text"}
							name="middleName"
							value={record.middleName}
						/>
					</div>
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="lastName">Last Name</label>
						<input
							onChange={handleInput}
							className="bg-gray-200 rounded-sm px-2 w-36 h-6 py-0.5 text-xs text-gray-600"
							type={"text"}
							name="lastName"
							value={record.lastName}
							required
						/>
					</div>
				</div>
				<div className="flex justify-between gap-4">
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="age">Age</label>
						<input
							onChange={handleInput}
							className="bg-gray-200 rounded-sm pl-2 w-36 h-6 py-0.5 text-xs text-gray-600"
							type={"number"}
							name="age"
							value={record.age}
							required
						/>
					</div>
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="gender">Gender</label>
						<div className="flex items-center gap-2 text-xs justify-start">
							<input
								onChange={handleInput}
								className="bg-gray-200 rounded-sm px-2 h-4 py-0.5 text-xs text-gray-600"
								type={"radio"}
								name="gender"
								value={1}
								id="male"
								required
							/>
							<label htmlFor="male">Male</label>
						</div>
						<div className="flex items-center gap-2 text-xs  justify-start">
							<input
								onChange={handleInput}
								className="bg-gray-200 rounded-sm px-2 h-4 py-0.5 text-xs text-gray-600"
								type={"radio"}
								name="gender"
								value={2}
								id="female"
								required
							/>
							<label htmlFor="female">Female</label>
						</div>
					</div>
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="height">Height (inch)</label>
						<input
							onChange={handleInput}
							className="bg-gray-200 rounded-sm pl-2 w-36 h-6 py-0.5 text-xs text-gray-600"
							type={"number"}
							name="height"
							placeholder="Height in inches"
							value={record.height}
							required
						/>
					</div>
				</div>
				<div className="flex justify-between gap-4">
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="crime">Crime</label>
						<input
							onChange={handleInput}
							className="bg-gray-200 rounded-sm px-2 w-36 h-6 py-0.5 text-xs text-gray-600"
							type={"text"}
							name="crime"
							placeholder="Crime committed"
							value={record.crime}
						/>
					</div>
					<div className="flex flex-col items-start gap-1 justify-between my-2">
						<label htmlFor="photo">Photo</label>
						<input
							onChange={handleInput}
							className="bg-gray-200 rounded-sm w-60 h-6 text-xs text-gray-600"
							type={"file"}
							name="photo"
							value={record.photo}
							// required
						/>
					</div>
				</div>
				<button
					className="bg-green-500 text-white rounded-full w-1/2 mx-auto text-sm p-1"
					type="submit"
				>
					Add
				</button>
				<button
					className="bg-red-500 text-white rounded-full w-1/2 mx-auto text-sm p-1"
					type="reset"
				>
					Reset
				</button>
			</form>
		</div>
	);
}
