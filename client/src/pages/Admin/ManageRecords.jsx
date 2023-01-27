import React from "react"
import { Link, Outlet, useParams } from "react-router-dom"
import { CgFileAdd } from "react-icons/cg"
import { FaRegEdit, FaTrashAlt } from "react-icons/fa"

export default function ManageRecords() {
	const { id } = useParams()
	// console.log(id, window.location.pathname)
	return (
		<div className="">
			<nav className="flex gap-2 px-2">
				<button className="flex items-centerhover:bg-opacity-70 gap-2 p-2 my-2 bg-light text-dark rounded-md">
					<Link to={""}>Records</Link>
				</button>
				<Link to="add">
					<button className="flex items-center hover:bg-opacity-70 gap-2 p-2 my-2 bg-green-600 text-light rounded-md">
						<CgFileAdd color="dark" size={24} /> Add Record
					</button>
				</Link>
				{window.location.pathname == `/admin/records/${id}` && (
					<Link to={`edit/${id}`}>
						<button className="flex items-center hover:bg-opacity-70 gap-2 p-2 my-2 bg-blue-500 text-light rounded-md">
							<FaRegEdit color="dark" size={24} /> Edit Record
						</button>
					</Link>
				)}
				{window.location.pathname == `/admin/records/${id}` && (
					<Link to="add">
						<button className="flex items-center hover:bg-opacity-70 gap-2 p-2 my-2 bg-[#e63946] text-light rounded-md">
							<FaTrashAlt color="dark" size={24} /> Delete Record
						</button>
					</Link>
				)}
			</nav>
			<div className="w-full">
				<Outlet />
			</div>
		</div>
	)
}
