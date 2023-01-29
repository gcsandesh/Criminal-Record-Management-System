import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AddRecord() {
	const emptyRecord = {
		firstName: "",
		middleName: "",
		lastName: "",
		age: "",
		gender: "",
		crime: "",
		height: "",
	}
	const navigate = useNavigate()

	const [record, setRecord] = useState(emptyRecord)

	async function handleSubmit(event) {
		event.preventDefault()
		console.log("submitting form")
		let formData = new FormData(event.target)
		// console.log(formData)
		// console.log("attempting to create record...")
		await fetch("http://localhost:9988/api/records/create", {
			method: "POST",
			body: formData,
		})
			.then(() => {
				window.alert("Record Created Successfully!")
				navigate("/admin/records")
			})
			.catch(() => {
				window.alert("Error creating record!")
				event.target.reset()
				setRecord(emptyRecord)
			})
	}

	function handleInput(event) {
		const property = event.target.name
		const value = event.target.value

		setRecord((prevRecord) => ({
			...prevRecord,
			[property]: value,
		}))
	}
	return (
		<div className="px-2">
			<form
				method="POST"
				onSubmit={handleSubmit}
				encType={"multipart/form-data"} //needed to correctly post the file data contained in the file input field
				className="flex flex-col justify-between items-start rounded-md gap-2 p-4 bg-gray-700 text-light"
			>
				<div className="flex justify-between gap-4">
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="firstName">First Name</label>
						<input
							onChange={handleInput}
							className="bg-gray-200 rounded-sm px-2 w-36 h-6 py-0.5 text-xs text-gray-600"
							type={"text"}
							name="firstName"
							id="firstName"
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
							id="middleName"
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
							id="lastName"
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
							id="age"
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
							id="height"
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
							id="crime"
							placeholder="Crime committed"
							value={record.crime}
						/>
					</div>
					<div className="flex flex-col items-start gap-1 justify-between my-2">
						<label htmlFor="photo">Photo</label>
						<input
							// onChange={handleInput}
							className="bg-gray-200 rounded-sm w-60 h-6 text-xs text-gray-600"
							type="file"
							name="photo"
							id="photo"
							value={record.photo}
							// required
						/>
					</div>
				</div>
				<button
					className="bg-green-500 text-white rounded-full w-1/2 mx-auto text-sm p-1"
					type="submit"
					// onClick={handleSubmit}
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
	)
}
