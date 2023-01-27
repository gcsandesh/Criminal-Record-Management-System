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
	const [searchResult, setSearchResult] = useState([])
	const [isSubmitted, setIsSubmitted] = useState(false)

	return (
		<div className={`h-full w-full flex flex-col gap-4 p-2`}>
			<SearchRecordForm
				formData={formData}
				setFormData={setFormData}
				setSearchResult={setSearchResult}
				setIsSubmitted={setIsSubmitted}
			/>
			<div>
				{!isSubmitted ? (
					<AllRecords />
				) : (
					<SearchResults searchResult={searchResult} />
				)}
			</div>
		</div>
	)
}
