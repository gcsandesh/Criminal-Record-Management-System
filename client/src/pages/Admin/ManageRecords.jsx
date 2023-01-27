import React from "react"
import { Link, Outlet, useNavigate, useParams } from "react-router-dom"
import { CgFileAdd } from "react-icons/cg"
import { FaRegEdit, FaTrashAlt } from "react-icons/fa"

export default function ManageRecords() {
	const { id } = useParams()
	const navigate = useNavigate()

	async function handleDelete() {
		await fetch(`http://localhost:9988/api/records/delete/id/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("Deleted record:", data)
				console.log("redirecting in 1 seconds...")
				setTimeout(() => navigate(""), 1000)
				// navigate("")
			})
	}
	// console.log(id, window.location.pathname)
	return (
		<div className="">
			<nav className="flex gap-2 px-2">
				<button className="flex items-center transition duration-200 hover:bg-opacity-70 gap-2 p-2 my-2 bg-light text-dark rounded-md">
					<Link to={""}>Records</Link>
				</button>
				<Link to="add">
					<button className="flex items-center transition duration-200 hover:bg-opacity-70 gap-2 p-2 my-2 bg-green-600 text-light rounded-md">
						<CgFileAdd color="dark" size={24} /> Add Record
					</button>
				</Link>
				{window.location.pathname == `/admin/records/${id}` && (
					<Link to={`edit/${id}`}>
						<button className="flex items-center transition duration-200 hover:bg-opacity-70 gap-2 p-2 my-2 bg-blue-500 text-light rounded-md">
							<FaRegEdit color="dark" size={24} /> Edit Record
						</button>
					</Link>
				)}
				{window.location.pathname == `/admin/records/${id}` && (
					<button
						onClick={handleDelete}
						className="flex items-center transition duration-200 hover:bg-opacity-70 gap-2 p-2 my-2 bg-[#e63946] text-light rounded-md"
					>
						<FaTrashAlt color="dark" size={24} /> Delete Record
					</button>
				)}
			</nav>
			<div className="w-full">
				<Outlet />
			</div>
		</div>
	)
}
