import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgFileAdd } from "react-icons/cg";
import { SearchUserForm } from "../../components";
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
	const [searchResult, setSearchResult] = useState({});

	function handleSubmit(event) {
		event.preventDefault();
		// const searchFormData = Object.fromEntries(new FormData(event.target));
		const searchFormData = formData;
		const firstName = searchFormData.firstName;
		let requestURL = `http://127.0.0.1:9988/api/records/firstName/${firstName}`;
		fetch(requestURL)
			.then((res) => res.json())
			.then((data) => {
				setSearchResult(data);
			});
		// console.log(searchResult);
	}

	return (
		<div className=" h-full flex flex-col items-center justify-center">
			<div>
				<Link to="/add-record">
					<CgFileAdd color="white" size={24} />
				</Link>
				<SearchUserForm
					formData={formData}
					setFormData={setFormData}
					handleSubmit={handleSubmit}
				/>
			</div>
			<SearchResults searchResult={searchResult} />
		</div>
	);
}
