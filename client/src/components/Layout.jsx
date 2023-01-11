import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./";

export default function Layout() {
	return (
		<div className="flex flex-col justify-between min-h-screen">
			<Outlet />
			<Footer />
		</div>
	);
}
