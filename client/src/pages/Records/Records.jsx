import React from "react";
import { Link } from "react-router-dom";
import { CgFileAdd } from "react-icons/cg";
import { SearchUserForm } from "../../components";
import SearchResults from "./SearchResults";

export default function Records() {
	return (
		<div className=" h-full flex flex-col items-center justify-center">
			<div>
				<Link to="/add-record">
					<CgFileAdd color="white" size={24} />
				</Link>
				<SearchUserForm />
			</div>
			<SearchResults />
		</div>
	);
}
