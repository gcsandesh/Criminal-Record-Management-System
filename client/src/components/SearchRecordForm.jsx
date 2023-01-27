import React from "react"
import { FaSearch } from "react-icons/fa"

export default function SearchRecordForm({
	formData,
	setFormData,
	setSearchResult,
	setIsSubmitted,
}) {
	async function handleSubmit(event) {
		event.preventDefault()
		if (!validateForm(formData)) return console.log("empty form")
		const formInput = Object.fromEntries(new FormData(event.target))
		// console.log(formInput)

		if (formInput.crime) {
			const response = await fetch("http://localhost:9988/api/crimes/get/")
			const crimes = await response.json()

			const crime = crimes.find(
				(eachCrime) => eachCrime.name === formInput.crime
			)
			console.log(crime)
			crime ? (formInput.crime = crime.crime_id) : (formInput.crime = "")
		}

		let searchURL = new URL(`http://127.0.0.1:9988/api/records/get/record/`)
		Object.keys(formInput).forEach((key) =>
			searchURL.searchParams.append(key, formInput[key])
		)
		// console.log("formdata: ", formData)
		// console.log(searchURL.toString())
		fetch(searchURL, { method: "GET" })
			.then((res) => res.json())
			.then((data) => {
				// console.log(data)
				setSearchResult(data)
				setIsSubmitted(true)
			})
	}

	function handleInput(e) {
		setIsSubmitted(false)
		setSearchResult([])
		const property = e.target.name
		const value = e.target.value
		setFormData((prevFormData) => ({ ...prevFormData, [property]: value }))
	}

	function validateForm(data) {
		return (
			data.age.trim() ||
			data.crime.trim() ||
			data.firstName.trim() ||
			data.middleName.trim() ||
			data.lastName.trim() ||
			data.gender.trim()
		)
	}

	return (
		<div className="flex flex-col h-full w-full items-center justify-center">
			<form
				method="GET"
				onSubmit={handleSubmit}
				className="flex flex-wrap justify-between items-center rounded-md gap-4 p-4 w-full bg-gray-400 text-dark"
			>
				<div className="flex flex-col items-start gap-1 justify-between my-2">
					<label htmlFor="firstName">First Name</label>
					<input
						onChange={handleInput}
						className="bg-gray-200 rounded-sm px-2 w-36"
						type={"text"}
						name="firstName"
						value={formData.firstName}
					/>
				</div>
				<div className="flex flex-col items-start gap-1 justify-between my-2">
					<label htmlFor="middleName">Middle Name</label>
					<input
						onChange={handleInput}
						className="bg-gray-200 rounded-sm px-2 w-36"
						type={"text"}
						name="middleName"
						value={formData.middleName}
					/>
				</div>
				<div className="flex flex-col items-start gap-1 justify-between my-2">
					<label htmlFor="lastName">Last Name</label>
					<input
						onChange={handleInput}
						className="bg-gray-200 rounded-sm px-2 w-36"
						type={"text"}
						name="lastName"
						value={formData.lastName}
					/>
				</div>
				<div className="flex flex-col items-start gap-1 justify-between my-2">
					<label htmlFor="age">Age</label>
					<input
						onChange={handleInput}
						className="bg-gray-200 rounded-sm px-2 w-10"
						type={"number"}
						name="age"
						value={formData.age}
					/>
				</div>
				<div className="flex flex-col items-start gap-1 justify-between my-2">
					<label htmlFor="gender">Gender</label>
					<div className="flex items-center gap-2 text-xs justify-start">
						<input
							onChange={handleInput}
							className="bg-gray-200 rounded-sm px-2 h-4 py-0.5 text-xs text-gray-600"
							type={"radio"}
							name="gender"
							value={1}
							id="male"
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
						/>
						<label htmlFor="female">Female</label>
					</div>
				</div>
				<div className="flex flex-col items-start gap-1 justify-between my-2">
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
					className="bg-green-600 h-full justify-between flex items-center gap-2 text-white rounded-full w-24 text-sm px-4 p-1"
					type="submit"
				>
					<span>Search</span> <FaSearch />
				</button>
			</form>
		</div>
	)
}
