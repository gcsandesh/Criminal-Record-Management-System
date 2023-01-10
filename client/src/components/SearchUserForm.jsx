import React from "react";

export default function SearchUserForm() {
	return (
		<div className="flex flex-col h-full items-center justify-center">
			<form className="flex flex-col justify-between items-start rounded-md gap-2 p-4 bg-white">
				<div className="flex justify-between gap-2">
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="firstName">First Name</label>
						<input
							className="bg-gray-200 rounded-sm px-2 w-24"
							type={"text"}
							name="firstName"
						/>
					</div>
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="lastName">Last Name</label>
						<input
							className="bg-gray-200 rounded-sm px-2 w-24"
							type={"text"}
							name="lastName"
						/>
					</div>
				</div>
				<div className="flex justify-between gap-2">
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="age">Age</label>
						<input
							className="bg-gray-200 rounded-sm px-2 w-24"
							type={"number"}
							name="age"
						/>
					</div>
					<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
						<label htmlFor="gender">Gender</label>
						<input
							className="bg-gray-200 rounded-sm px-2 w-24"
							type={"text"}
							name="gender"
						/>
					</div>
				</div>
				<div className="flex flex-col items-start gap-1 justify-between w-full my-2">
					<label htmlFor="crime">Crime</label>
					<input
						className="bg-gray-200 rounded-sm px-2 w-24"
						type={"text"}
						name="crime"
					/>
				</div>
				<button
					className="bg-green-500 text-white rounded-full w-1/2 mx-auto text-sm p-1"
					type="submit"
				>
					Search
				</button>
			</form>
		</div>
	);
}
