import React from "react";
import AdminSideNav from "./AdminSideNav";
import { Link, Outlet } from "react-router-dom";

export default function AdminDash() {
	return (
		<div className="flex flex-col justify-between">
			<h1 className="py-2 bg-blue-900 text-white font-semibold text-2xl text-center leading-loose">
				<Link to="/admin">CRMS DashBoard</Link>
			</h1>
			<div className="flex gap-4">
				<AdminSideNav />
				<div className="p-4">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
