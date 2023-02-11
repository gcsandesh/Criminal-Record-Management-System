import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function EditRecord() {
    const { id } = useParams()
    const navigate = useNavigate()

    const emptyRecord = {
        first_name: "",
        middle_name: "",
        last_name: "",
        age: 0,
        gender: 1,
        cname: "",
        height_inch: "",
        // photo: "",
    }

    const [record, setRecord] = useState(emptyRecord)
    const [isMale, setIsMale] = useState(false)
    const [isFemale, setIsFemale] = useState(false)

    // get record
    useEffect(() => {
        fetch(`http://localhost:9988/api/records/get/id/${id}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data[0])
                setRecord(data[0])
            })
    }, [])

    // get crime
    useEffect(() => {
        console.log(record.crime)
        fetch(`http://localhost:9988/api/crimes/id/${record.crime}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setRecord((prevRecord) => ({ ...prevRecord, crime: data }))
            })
    }, [])

    // check radio button when record.gender changes
    useEffect(() => {
        if (record.gender == 1) {
            // console.log("male")
            setIsMale(true)
            setIsFemale(false)
        } else if (record.gender == 2) {
            // console.log("female")
            setIsMale(false)
            setIsFemale(true)
        }
    }, [record.gender])

    async function handleEdit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        await fetch(`http://localhost:9988/api/records/update/id/${id}`, {
            method: "PATCH",
            body: formData,
        })
        navigate("/admin/records")
    }

    function handleInput(event) {
        const property = event.target.name
        const value = event.target.value
        setRecord((prevRecord) => ({ ...prevRecord, [property]: value }))
    }
    return (
        <div>
            <form
                onSubmit={handleEdit}
                className="flex flex-col justify-between items-start rounded-md gap-2 p-4 bg-gray-700 text-light"
            >
                <div className="flex justify-between gap-4">
                    <div className="flex flex-col items-start gap-1 justify-between w-full my-2">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            onChange={handleInput}
                            className="bg-gray-200 rounded-sm px-2 w-36 h-6 py-0.5 text-xs text-gray-600"
                            type={"text"}
                            name="first_name"
                            id="firstName"
                            placeholder="First Name"
                            value={record.first_name}
                        />
                    </div>
                    <div className="flex flex-col items-start gap-1 justify-between w-full my-2">
                        <label htmlFor="middleName">Middle Name</label>
                        <input
                            onChange={handleInput}
                            className="bg-gray-200 rounded-sm px-2 w-36 h-6 py-0.5 text-xs text-gray-600"
                            type={"text"}
                            name="middle_name"
                            id="middleName"
                            value={record.middle_name}
                        />
                    </div>
                    <div className="flex flex-col items-start gap-1 justify-between w-full my-2">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            onChange={handleInput}
                            className="bg-gray-200 rounded-sm px-2 w-36 h-6 py-0.5 text-xs text-gray-600"
                            type={"text"}
                            name="last_name"
                            id="lastName"
                            placeholder="Last Name"
                            value={record.last_name}
                        />
                    </div>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="flex flex-col items-start gap-1 justify-between w-full my-2">
                        <label htmlFor="age">Age</label>
                        <input
                            onChange={handleInput}
                            className="bg-gray-200 rounded-sm pl-2 w-36 h-6 py-0.5 text-xs text-gray-600"
                            type={"number"}
                            name="age"
                            id="age"
                            placeholder="Age"
                            value={record.age}
                        />
                    </div>
                    <div className="flex flex-col items-start gap-1 justify-between w-full my-2">
                        <label htmlFor="gender">Gender</label>
                        <div className="flex items-center gap-2 text-xs justify-start">
                            <input
                                onChange={handleInput}
                                className="bg-gray-200 rounded-sm px-2 h-4 py-0.5 text-xs text-gray-600"
                                type={"radio"}
                                name="gender"
                                value={1}
                                id="male"
                                checked={isMale}
                            />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="flex items-center gap-2 text-xs  justify-start">
                            <input
                                onChange={handleInput}
                                className="bg-gray-200 rounded-sm px-2 h-4 py-0.5 text-xs text-gray-600"
                                type={"radio"}
                                name="gender"
                                value={2}
                                id="female"
                                checked={isFemale}
                            />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-1 justify-between w-full my-2">
                        <label htmlFor="height">Height (inch)</label>
                        <input
                            onChange={handleInput}
                            className="bg-gray-200 rounded-sm pl-2 w-36 h-6 py-0.5 text-xs text-gray-600"
                            type={"number"}
                            name="height_inch"
                            id="height"
                            placeholder="Height in inches"
                            value={record.height_inch}
                        />
                    </div>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="flex flex-col items-start gap-1 justify-between w-full my-2">
                        <label htmlFor="cname">Crime</label>
                        <input
                            onChange={handleInput}
                            className="bg-gray-200 rounded-sm px-2 w-36 h-6 py-0.5 text-xs text-gray-600"
                            type={"text"}
                            name="cname"
                            id="cname"
                            placeholder="Crime committed"
                            value={record.cname}
                        />
                    </div>
                    <div className="flex flex-col items-start gap-1 justify-between my-2">
                        <label htmlFor="photo">Photo</label>
                        <input
                            // onChange={handleInput}
                            className="bg-gray-200 rounded-sm w-60 h-6 text-xs text-gray-600"
                            type={"file"}
                            name="photo"
                            id="photo"
                            // value={""}
                            // required
                        />
                    </div>
                </div>
                <div className="mr-auto flex gap-4 justify-between items-center">
                    <button
                        className="bg-green-500 text-white rounded-full w-1/2 min-w-min px-4 py-1  max-w-[80px] text-sm p-1"
                        type="submit"
                    >
                        Edit
                    </button>
                </div>
            </form>
        </div>
    )
}
