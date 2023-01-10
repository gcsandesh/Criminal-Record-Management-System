import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Landing, Users, EachUser, Crimes } from "./pages";

function App() {
	return (
		<Router>
			<div className="App bg-blue-400 h-screen w-full flex flex-col justify-between">
				<Routes>
					<Route path="/" element={<Landing />} />
					{/* other pages are accessible when user is logged in */}
					<Route path="/users" element={<Users />} />
					<Route path="/crimes" element={<Crimes />} />
					<Route path="/user/:id" element={<EachUser />} />
				</Routes>
				<footer className="text-center text-xs bg-gray-900 text-white p-1">
					Copyright &copy; 2023 - Sandesh GC
				</footer>
			</div>
		</Router>
	);
}

export default App;
