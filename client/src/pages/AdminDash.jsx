import React from "react"
import { AdminSideNav } from "../components/Admin"
import { Link, Outlet } from "react-router-dom"

export default function AdminDash() {
	return (
		<div className="flex flex-col justify-between">
			<h1 className="py-2 bg-dark border-b-2 border-gray-500 text-white font-bold text-xl text-center leading-loose">
				<Link to="/admin">CRMS DashBoard</Link>
			</h1>
			<div className="flex flex-col sm:flex-row ">
				<div className="w-auto">
					<AdminSideNav />
				</div>
				<div className="w-4/5 p-2">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
