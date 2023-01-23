import React, { useState } from "react"
import { SearchRecordForm } from "../../components"
import AllRecords from "./AllRecords"
import SearchResults from "./SearchResults"

export default function Records() {
	const initialForm = {
		firstName: "",
		middleName: "",
		lastName: "",
		age: "",
		gender: "",
		crime: "",
	}

	const [formData, setFormData] = useState(initialForm)
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [searchResult, setSearchResult] = useState({})

	function handleSubmit(event) {
		event.preventDefault()
		if (!validateForm(formData)) return console.log("empty form")
		// const searchFormData = Object.fromEntries(new FormData(event.target));
		const { firstName, middleName, lastName, age, gender, crime } = formData
		let searchURL = new URL(`http://127.0.0.1:9988/api/records/get/record/`)
		Object.keys(formData).forEach((key) =>
			searchURL.searchParams.append(key, params[key])
		)

		fetch(searchURL)
			.then((res) => res.json())
			.then((data) => {
				setSearchResult(data)
				setIsSubmitted(true)
			})
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
		<div className=" h-full w-full flex flex-col gap-4">
			<SearchRecordForm
				formData={formData}
				setFormData={setFormData}
				handleSubmit={handleSubmit}
			/>

			{!isSubmitted ? (
				<AllRecords />
			) : (
				<SearchResults searchResult={searchResult} />
			)}
		</div>
	)
}
