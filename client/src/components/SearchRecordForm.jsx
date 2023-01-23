import React, { useState } from "react"
import { FaSearch } from "react-icons/fa"

export default function SearchRecordForm({
	formData,
	setFormData,
	setSearchResult,
	setIsSubmitted,
}) {
	function handleSubmit(event) {
		event.preventDefault()
		if (!validateForm(formData)) return console.log("empty form")
		// const searchFormData = Object.fromEntries(new FormData(event.target));
		// const { firstName, middleName, lastName, age, gender, crime } = formData
		let searchURL = new URL(`http://127.0.0.1:9988/api/records/get/record/`)
		Object.keys(formData).forEach((key) =>
			searchURL.searchParams.append(key, formData[key])
		)

		fetch(searchURL)
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				setSearchResult(data)
				setIsSubmitted(true)
			})
	}

	function handleInput(e) {
		setIsSubmitted(false)
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
		// <div className="flex flex-col h-full  w-full items-center justify-center">
		<form
			method="GET"
			onSubmit={handleSubmit}
			className="flex justify-between items-center rounded-md gap-4 p-4 w-full bg-light text-dark"
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
				<input
					onChange={handleInput}
					className="bg-gray-200 rounded-sm px-2 w-36"
					type={"text"}
					name="gender"
					value={formData.gender}
				/>
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
				className="bg-green-600 h-full justify-between flex items-center gap-2 text-white rounded-full w-24 mx-auto text-sm px-4 p-1"
				type="submit"
			>
				<span>Search</span> <FaSearch />
			</button>
		</form>
		// </div>
	)
}
