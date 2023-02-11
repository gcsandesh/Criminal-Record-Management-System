import React from "react"
import { NavLink } from "react-router-dom"
import { BsClipboardData } from "react-icons/bs"
import { FaUsersCog } from "react-icons/fa"
import { ImStatsBars } from "react-icons/im"

export default function AdminSideNav() {
	return (
		<ul className="flex sm:flex-col items-start gap-2 h-screen p-2 border-r-2 border-gray-500">
			<li>
				<NavLink to={"/admin"}>
					<button className="flex items-center gap-2 py-0.5 rounded-sm text-left">
						<ImStatsBars />
						<p>Dashboard</p>
					</button>
				</NavLink>
			</li>
			<li>
				<NavLink
					style={({ isActive }) => (isActive ? { fontWeight: 700 } : undefined)}
					to={"users"}
				>
					<button className=" flex items-center gap-2 py-0.5 rounded-sm text-left">
						<FaUsersCog />
						<p>Manage Users</p>
					</button>
				</NavLink>
			</li>
			<li>
				<NavLink
					style={({ isActive }) => (isActive ? { fontWeight: 700 } : undefined)}
					to={"records"}
				>
					<button className=" flex items-center gap-2 py-0.5 rounded-sm text-left">
						<BsClipboardData /> <p>Manage Records</p>
					</button>
				</NavLink>
			</li>
		</ul>
	)
}
