import React, { useState, useEffect } from "react";

export default function SearchUserForm() {
	const initialForm = {
		firstName: "",
		middleName: "",
		lastName: "",
		age: "",
		gender: "",
		crime: "",
	};
	const [formData, setFormData] = useState(initialForm);

	function handleSubmit(formEl) {
		const result = fetch(`http://localhost:9988/api/records/name/`).then(
			(res) => res.json()
		);
		const data = result.then((data) => data);
		console.log(data);
	}
	function handleInput(e) {
		const property = e.target.name;
		const value = e.target.value;
		setFormData((prevFormData) => ({ ...prevFormData, [property]: value }));
	}
	useEffect(() => {
		console.log(formData);

		return () => {
			console.log("removeEffect");
		};
	}, [formData]);

	return (
		<div className="flex flex-col h-full items-center justify-center">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col justify-between items-start rounded-md gap-2 p-4 bg-white"
			>
				<div className="flex justify-between gap-2">
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="firstName">First Name</label>
						<input
							onChange={handleInput}
							className="bg-gray-200 rounded-sm px-2 w-36"
							type={"text"}
							name="firstName"
							value={formData.firstName}
						/>
					</div>
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="middleName">Middle Name</label>
						<input
							onChange={handleInput}
							className="bg-gray-200 rounded-sm px-2 w-36"
							type={"text"}
							name="middleName"
							value={formData.middleName}
						/>
					</div>
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="lastName">Last Name</label>
						<input
							onChange={handleInput}
							className="bg-gray-200 rounded-sm px-2 w-36"
							type={"text"}
							name="lastName"
							value={formData.lastName}
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
							value={formData.age}
						/>
					</div>
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="gender">Gender</label>
						<input
							onChange={handleInput}
							className="bg-gray-200 rounded-sm px-2 w-36"
							type={"text"}
							name="gender"
							value={formData.gender}
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
						value={formData.crime}
					/>
				</div>
				<button
					className="bg-green-500 text-white rounded-full w-1/2 mx-auto text-sm p-1"
					type="submit"
				>
					Search
				</button>
			</form>
		</div>
	);
}
