import React from "react"
import { FaSearch } from "react-icons/fa"

export default function SearchRecordForm({
    formData,
    setFormData,
    setSearchResult,
    setIsSubmitted,
}) {
    async function handleSubmit(event) {
        event.preventDefault()
        if (!validateForm(formData)) {
            event.target.reset()
            setIsSubmitted(false)
            return window.alert("Form is empty!")
            // return console.log("empty form")
        }
        const formInput = Object.fromEntries(new FormData(event.target))

        let searchURL = new URL(`http://localhost:9988/api/records/get/record/`)
        Object.keys(formInput).forEach((key) =>
            searchURL.searchParams.append(key, formInput[key])
        )
        // console.log(formInput)
        // console.log(searchURL)
        fetch(searchURL, { method: "GET" })
            .then((res) => res.json())
            .then((data) => {
                setSearchResult(data)
                setIsSubmitted(true)
            })
            .catch((error) => console.log("error fetching!!", error))
    }

    function handleInput(e) {
        // setIsSubmitted(false)
        if (!validateForm(formData)) {
            setIsSubmitted(false)
        }
        setSearchResult([])
        const property = e.target.name
        const value = e.target.value
        setFormData((prevFormData) => ({ ...prevFormData, [property]: value }))
    }

    function validateForm(data) {
        return (
            data.age.trim() ||
            data.cname.trim() ||
            data.firstName.trim() ||
            data.middleName.trim() ||
            data.lastName.trim() ||
            data.gender.trim()
        )
    }

    return (
        <div className="flex flex-col h-full w-full items-center justify-center">
            <form
                method="GET"
                onSubmit={handleSubmit}
                className="flex flex-wrap justify-between items-center rounded-md gap-4 p-4 w-full bg-gray-700 text-gray-200"
            >
                <div className="flex flex-col items-start gap-1 justify-between my-2">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        onChange={handleInput}
                        className="bg-gray-200 text-gray-700 rounded-sm px-2 w-36"
                        type={"text"}
                        name="firstName"
                        value={formData.firstName}
                    />
                </div>
                <div className="flex flex-col items-start gap-1 justify-between my-2">
                    <label htmlFor="middleName">Middle Name</label>
                    <input
                        onChange={handleInput}
                        className="bg-gray-200 text-gray-700 rounded-sm px-2 w-36"
                        type={"text"}
                        name="middleName"
                        value={formData.middleName}
                    />
                </div>
                <div className="flex flex-col items-start gap-1 justify-between my-2">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        onChange={handleInput}
                        className="bg-gray-200 text-gray-700 rounded-sm px-2 w-36"
                        type={"text"}
                        name="lastName"
                        value={formData.lastName}
                    />
                </div>
                <div className="flex flex-col items-start gap-1 justify-between my-2">
                    <label htmlFor="age">Age</label>
                    <input
                        onChange={handleInput}
                        className="bg-gray-200 text-gray-700 rounded-sm px-2 w-10"
                        type={"number"}
                        name="age"
                        value={formData.age}
                    />
                </div>
                <div className="flex flex-col items-start gap-1 justify-between my-2">
                    <label htmlFor="gender">Gender</label>
                    <div className="flex items-center gap-2 text-xs justify-start">
                        <input
                            onChange={handleInput}
                            className="bg-gray-200 text-gray-700 rounded-sm px-2 h-4 py-0.5 text-xs"
                            type={"radio"}
                            name="gender"
                            value={1}
                            id="male"
                        />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div className="flex items-center gap-2 text-xs  justify-start">
                        <input
                            onChange={handleInput}
                            className="bg-gray-200 text-gray-700 rounded-sm px-2 h-4 py-0.5 text-xs"
                            type={"radio"}
                            name="gender"
                            value={2}
                            id="female"
                        />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-1 justify-between my-2">
                    <label htmlFor="cname">Crime</label>
                    <input
                        onChange={handleInput}
                        className="bg-gray-200 text-gray-700 rounded-sm px-2 w-36"
                        type={"text"}
                        name="cname"
                        value={formData.cname}
                    />
                </div>
                <div>
                    <button
                        className="bg-green-600 h-full justify-between flex items-center gap-2 text-white rounded-full w-24 text-sm px-4 p-1"
                        type="submit"
                    >
                        <span>Search</span> <FaSearch />
                    </button>
                </div>
            </form>
        </div>
    )
}
