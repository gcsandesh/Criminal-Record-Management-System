import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Layout } from "./components";
import {
	Landing,
	Users,
	Crimes,
	Records,
	EachRecord,
	AdminDash,
} from "./pages";
import ManageRecords from "./pages/Admin/ManageRecords";

function App() {
	return (
		<Router>
			<div className="App bg-dark text-light">
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Landing />} />
						<Route path="/records" element={<Records />} />
						<Route path="/records/:id" element={<EachRecord />} />
						<Route path="/crimes" element={<Crimes />} />
						{/* for admin */}
						<Route path="/admin" element={<AdminDash />}>
							{/* <Route index element={<AdminDash />}> */}
							<Route index element={<Records />} />
							<Route path="users" element={<Users />} />
							<Route path="records" element={<ManageRecords />} />
							{/* </Route> */}
						</Route>
					</Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
