import React from "react";
import { NavLink } from "react-router-dom";
import { BsClipboardData } from "react-icons/bs";
import { FaUsersCog } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";

export default function AdminSideNav() {
	return (
		<ul className=" flex flex-col items-start justify-between gap-2 w-fit max-w-xs bg-blue-700 h-full p-2">
			<li>
				<NavLink to={"/admin"}>
					<button className=" flex items-center gap-2 px-2 py-0.5 w-44 rounded-sm text-left">
						<ImStatsBars />
						<p>Dashboard</p>
					</button>
				</NavLink>
			</li>
			<li>
				<NavLink
					style={({ isActive }) => (isActive ? { fontWeight: 800 } : undefined)}
					to={"users"}
				>
					<button className=" flex items-center gap-2 px-2 py-0.5 w-44 rounded-sm text-left">
						<FaUsersCog />
						<p>Manage Users</p>
					</button>
				</NavLink>
			</li>
			<li>
				<NavLink
					style={({ isActive }) => (isActive ? { fontWeight: 800 } : undefined)}
					to={"records"}
				>
					<button className=" flex items-center gap-2 px-2 py-0.5 w-44 rounded-sm text-left">
						<BsClipboardData /> <p>Manage Records</p>
					</button>
				</NavLink>
			</li>
		</ul>
	);
}
