import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Layout } from "./components";
import {
	Landing,
	Users,
	Crimes,
	Records,
	EachRecord,
	AddRecord,
	AdminDash,
} from "./pages";

function App() {
	return (
		<Router>
			<div className="App bg-blue-400">
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Landing />} />
						<Route path="/records" element={<Records />} />
						<Route path="/records/:id" element={<EachRecord />} />
						<Route path="/crimes" element={<Crimes />} />
						{/* for admin */}
						<Route path="/admin">
							<Route index element={<AdminDash />} />
							<Route path="users" element={<Users />} />
							<Route path="records" element={<AddRecord />} />
						</Route>
					</Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
