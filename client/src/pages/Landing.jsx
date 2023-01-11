import React, { useState } from "react";
import { LoginForm } from "../components";
import { Records } from "../pages";

export default function Landing() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<div className=" h-full flex flex-col items-center p-4">
			<p className="text-3xl font-medium">Welcome to</p>
			<h1 className="text-5xl font-bold leading-loose">
				Criminal Record Mangement System
			</h1>

			{!isLoggedIn && <LoginForm />}
		</div>
	);
}
