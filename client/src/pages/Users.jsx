import React, { useEffect, useState } from "react";

export default function Users() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		let allUsers = async () =>
			await fetch("http://127.0.0.1:9988/api/users").then((res) => res.json());
		setUsers(allUsers);
	}, []);
	// const usersList = users.map((eachUser) => <li>{eachUser.name}</li>);

	// useEffect(async () => {});
	return (
		<div>
			{/* {usersList} */}
			This page is for admin purpose. police and admin
		</div>
	);
}
