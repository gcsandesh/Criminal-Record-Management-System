import React, { useContext } from "react"
import { LoginForm } from "../components"
import { User } from "../App"
import { Navigate } from "react-router-dom"

export default function Landing() {
    const value = useContext(User)

    if (!value.user.isLoggedIn) {
        return (
            <div className="">
                <h1 className="text-5xl font-bold text-center leading-loose">
                    Criminal Record Mangement System
                </h1>
                <div className=" flex flex-col items-center p-4">
                    <LoginForm />
                </div>
            </div>
        )
    } else {
        return <Navigate to={"/records"} />
    }
}
