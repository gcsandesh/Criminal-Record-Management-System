import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { Layout } from "./components"
import {
    Users,
    Stats,
    Crimes,
    AddRecord,
    EditRecord,
    ManageRecords,
} from "./components/Admin"
import { Landing, Records, EachRecord, AdminDash } from "./pages"

function App() {
    return (
        <Router>
            <div className="App bg-gray-900 text-light text-xs md:text-base">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Landing />} />
                        <Route
                            path="/records"
                            element={<Records isAdmin={false} />}
                        />
                        <Route path="/records/:id" element={<EachRecord />} />
                        {/* let the user view list of crimes with no. of people who have committed that crime */}
                        <Route path="/crimes" element={<Crimes />} />
                        {/* for admin */}
                        <Route path="/admin" element={<AdminDash />}>
                            <Route index element={<Stats />} />
                            <Route path="users" element={<Users />} />
                            <Route path="records" element={<ManageRecords />}>
                                <Route index element={<Records />} />
                                <Route path=":id" element={<EachRecord />} />
                                <Route path="add" element={<AddRecord />} />
                                <Route
                                    path="edit/:id"
                                    element={<EditRecord />}
                                />
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App
