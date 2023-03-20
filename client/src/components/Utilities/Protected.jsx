import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import { User } from "../../App"

export default function Protected(props) {
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    const userValue = useState(User)
    console.log(userValue)

    // useEffect(() => {
    //     const user = JSON.parse(localStorage.getItem("user"))
    //     const accessToken = JSON.parse(localStorage.getItem("accessToken"))

    //     if (user && accessToken) {
    //         setIsLoggedIn(true)
    //     } else {
    //         setIsLoggedIn(false)
    //     }
    //     return () => {}
    // }, [])

    if (!isLoggedIn) {
        return <Navigate to={"/"} />
    } else {
        return <div>{props.children}</div>
    }
}
