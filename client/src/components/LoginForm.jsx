import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { User } from "../App"
import { APIv1, BASE_URL } from "../constants/api"
import { BsEye, BsEyeSlash } from "react-icons/bs"

export default function LoginForm() {
    const nav = useNavigate()
    const userContext = useContext(User)
    const [formInput, setFormInput] = useState({ username: "", password: "" })

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    function handleLogin(event) {
        event.preventDefault()
        // console.log(Object.fromEntries(new FormData(event.target)))
        fetch(`${BASE_URL}${APIv1.auth.login}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                Object.fromEntries(new FormData(event.target))
            ),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.isValid) {
                    data.isLoggedIn = true

                    // console.log(data)
                    userContext.setUser(data)

                    if (data.role === "admin") {
                        nav("/admin")
                    } else {
                        // console.log("login success")
                        // nav("/records")
                    }
                } else {
                    window.alert("Login failed!")
                    // console.log("login failed")
                    userContext.setIsLoggedIn(false)
                    event.target.reset()
                }
            })
            .catch((error) => {
                window.alert("Error logging in")
                // console.log(error)
            })
    }

    function handleInput(event) {
        const property = event.target.name
        const value = event.target.value

        setFormInput((prevFormInput) => ({
            ...prevFormInput,
            [property]: value,
        }))
    }

    return (
        <div className="">
            <form
                onSubmit={handleLogin}
                className="bg-white text-black p-4 rounded-md flex flex-col gap-2"
            >
                <h3 className="text-center border-b-2 border-blue-400 font-bold text-lg">
                    Login
                </h3>

                <div className="my-2">
                    <div className="flex flex-col items-start gap-1 justify-between w-full my-2">
                        <label htmlFor="username" className="text-xs font-bold">
                            Username
                        </label>
                        <input
                            className="bg-gray-200 py-1 px-2 rounded-sm w-full"
                            type={"text"}
                            name="username"
                            placeholder="username"
                            value={formInput.username}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="flex flex-col items-start gap-1 justify-between w-full">
                        <label htmlFor="password" className="text-xs font-bold">
                            Password
                        </label>
                        <div className="flex items-center">
                            <input
                                className="bg-gray-200 py-1 px-2 rounded-sm rounded-r-none"
                                type={isPasswordVisible ? "text" : "password"}
                                name="password"
                                placeholder="password"
                                value={formInput.password}
                                onChange={handleInput}
                            />
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setIsPasswordVisible(!isPasswordVisible)
                                }}
                                className="bg-gray-200 p-2 rounded-sm rounded-l-none"
                            >
                                {isPasswordVisible ? <BsEyeSlash /> : <BsEye />}
                            </button>
                        </div>
                    </div>
                </div>

                <button
                    className="bg-green-500 text-white text-sm p-1 rounded-sm"
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    )
}
