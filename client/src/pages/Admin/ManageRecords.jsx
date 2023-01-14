import React from "react";
import { Link, Outlet } from "react-router-dom";
import { CgFileAdd } from "react-icons/cg";

export default function ManageRecords() {
	return (
		<div>
			<button>
				<Link
					to="add"
					className="flex items-center gap-2 p-2 my-2 bg-light text-dark rounded-md"
				>
					<CgFileAdd color="dark" size={24} /> Add Record
				</Link>
			</button>
			<Outlet />
		</div>
	);
}
