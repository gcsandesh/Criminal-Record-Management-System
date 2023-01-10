import React from "react";

export default function LoginForm() {
	return (
		<div className="m-auto">
			<div className="bg-white p-4 rounded-md flex flex-col gap-2">
				<h3 className="text-center border-b-2 border-blue-400">Login</h3>
				<div className="my-2">
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="username">Username</label>
						<input
							className="bg-gray-200 py-1 px-2 rounded-sm"
							type={"text"}
							name="username"
							placeholder="username"
						/>
					</div>
					<div className="flex flex-col items-start gap-1 justify-between w-full">
						<label htmlFor="password">Password</label>
						<input
							className="bg-gray-200 py-1 px-2 rounded-sm"
							type={"password"}
							name="password"
							placeholder="password"
						/>
					</div>
				</div>
				<button
					className="bg-green-500 text-white rounded-full w-1/2 mx-auto text-sm p-1"
					type="submit"
				>
					Login
				</button>
			</div>
		</div>
	);
}
