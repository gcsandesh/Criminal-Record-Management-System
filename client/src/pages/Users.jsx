import React, { useEffect, useState } from "react";

export default function Users() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch("http://127.0.0.1:9988/api/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	const usersList = users.map((eachUser) => (
		<li key={eachUser.user_id}>{eachUser.name}</li>
	));

	return (
		<div>
			This page is for admin purpose only.
			<div>
				All Users:
				<ul className="indent-4">{usersList}</ul>
			</div>
		</div>
	);
}
