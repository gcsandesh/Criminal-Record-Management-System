import React, { useState } from "react";
import { SearchUserForm } from "../../components";
import AllRecords from "./AllRecords";
import SearchResults from "./SearchResults";

export default function Records() {
	const initialForm = {
		firstName: "",
		middleName: "",
		lastName: "",
		age: "",
		gender: "",
		crime: "",
	};

	const [formData, setFormData] = useState(initialForm);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [searchResult, setSearchResult] = useState({});

	function handleSubmit(event) {
		event.preventDefault();
		if (!validateForm(formData)) return console.log("empty form");
		// const searchFormData = Object.fromEntries(new FormData(event.target));
		const searchFormData = formData;
		const firstName = searchFormData.firstName;
		// let requestURL = `http://127.0.0.1:9988/api/records/firstName/${firstName}`;
		// fetch(requestURL)
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		setSearchResult(data);
		// 		setIsSubmitted(true);
		// 	});
		let requestURL = `http://127.0.0.1:9988/api/records/get/firstName/${formData.firstName}`;
		fetch(requestURL)
			.then((res) => res.json())
			.then((data) => {
				setSearchResult(data);
				setIsSubmitted(true);
			});
	}

	function validateForm(data) {
		return (
			data.age.trim() ||
			data.crime.trim() ||
			data.firstName.trim() ||
			data.middleName.trim() ||
			data.lastName.trim() ||
			data.gender.trim()
		);
	}

	return (
		<div className=" h-full w-full flex flex-col gap-4">
			<SearchUserForm
				formData={formData}
				setFormData={setFormData}
				handleSubmit={handleSubmit}
			/>

			{!isSubmitted || !formData ? (
				<AllRecords />
			) : (
				<SearchResults searchResult={searchResult} />
			)}
		</div>
	);
}
