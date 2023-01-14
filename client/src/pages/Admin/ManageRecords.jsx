import React from "react";
import { Link, Outlet } from "react-router-dom";
import { CgFileAdd } from "react-icons/cg";

export default function ManageRecords() {
	return (
		<div>
			<button>
				<Link to="add" className="flex items-center gap-2">
					<CgFileAdd color="white" size={24} /> Add Record
				</Link>
			</button>
			<Outlet />
		</div>
	);
}
