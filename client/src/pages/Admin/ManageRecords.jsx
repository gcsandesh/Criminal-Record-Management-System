import React from "react";
import { Link } from "react-router-dom";

export default function ManageRecords() {
	return (
		<div>
			<button>
				<Link to="add">Add Record</Link>
			</button>
			<button>
				<Link to="edit">Edit Record</Link>
			</button>
			<button>
				<Link to="delete">Delete Record</Link>
			</button>
			{/* <button></button> */}
		</div>
	);
}
