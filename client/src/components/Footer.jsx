import React from "react";

export default function Footer() {
	const currentYear = new Date().getFullYear();
	
	return (
		<footer className="text-center mt-auto text-xs bg-black text-white p-2">
			Copyright &copy; 2023-{currentYear} -{" "}
			<a href="https://gcsandesh.me" target="_blank">Sandesh G.C.</a>
		</footer>
	);
}	
