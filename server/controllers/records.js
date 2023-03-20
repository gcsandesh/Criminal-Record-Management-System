const db = require("../config/db")
const fs = require("fs")
const path = require("path")

const getAllRecords = (req, res) => {
    try {
        db.query(
            "SELECT * FROM records JOIN crimes ON records.crime_id = crimes.crime_id ORDER BY first_name;",
            async (error, result) => {
                // db.query("SELECT * FROM records;", async (error, result) => {
                if (error) return res.status(500).send(error)
                if (!result.length) return res.status(404).send(result)

                for (let record of result) {
                    if (record.photo) {
                        record.photo = await convertPhotoToObj(record.photo)
                    }
                }
                res.send(result)
            }
        )
    } catch {
        console.log("Error running query!")
        res.json({ message: "Error running query!" })
    }
}

const getRecord = (req, res) => {
    const recordId = req.params.id
    db.query(
        "SELECT * FROM records JOIN crimes ON records.crime_id = crimes.crime_id WHERE record_id=?;",
        recordId,
        async (error, result) => {
            if (error) return res.status(500).send(error)
            if (!result.length) return res.status(404).send(result)
            if (result[0].photo) {
                // console.log("converting image")
                result[0].photo = await convertPhotoToObj(result[0].photo)
            }
            res.send(result)
        }
    )
}

const createRecord = async (req, res) => {
    let { firstName, middleName, lastName, age, gender, cname, height } =
        req.body

    let crime_id = 0
    try {
        if (cname) {
            crime_id = await crimeToCrimeId(cname)
        }
    } catch (error) {
        // console.log(error)
        return res.status(400).json(error)
    }

    const photo = req.file
    // console.log(photo)

    let queryString =
        "INSERT INTO records(first_name, middle_name, last_name, age, gender, height_inch, crime_id) VALUES(?,?,?,?,?,?,?);"
    let queryParams = [
        firstName,
        middleName,
        lastName,
        age,
        gender,
        height,
        crime_id,
    ]

    if (photo) {
        queryParams.push(photo.filename)
        queryString =
            "INSERT INTO records(first_name, middle_name, last_name, age, gender, height_inch, crime_id, photo) VALUES(?,?,?,?,?,?,?,?);"
    }

    try {
        db.query(queryString, queryParams, (error, result) => {
            if (error) return res.json({ message: error })
            // console.log("Record Added!")
            return res.status(201).send(result)
        })
    } catch (err) {
        return res.json({ message: new Error(err) })
    }
}

// finding crime id from crime while creating record
function crimeToCrimeId(crimeName) {
    // console.log(crimeName)
    // if (!crimeName) return 0
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT crime_id FROM crimes WHERE cname=?",
            crimeName,
            (error, result) => {
                if (error) return reject({ message: error })
                if (!result.length)
                    return reject({ message: "Crime not defined!" })
                return resolve(result[0].crime_id)
            }
        )
    })
}

///////////// UPDATE RECORD ///////////
const updateRecord = (req, res) => {
    const record_id = req.params.id

    let {
        first_name,
        middle_name,
        last_name,
        age,
        gender,
        height_inch,
        cname,
    } = req.body

    if (!cname) cname = "-"
    // console.log(req.body.crime)

    const photo = req.file
    // console.log(photo)

    // check if record exists
    db.query(
        "SELECT * FROM records WHERE record_id=?",
        record_id,
        async (error, result) => {
            if (error) return res.status(500).send(error)
            if (!result.length) return res.status(404).send(result)

            const oldPhoto = result[0].photo

            let queryParams = [
                first_name,
                middle_name,
                last_name,
                age,
                gender,
                height_inch,
                cname,
                record_id,
            ]
            // UPDATE records JOIN crimes SET records.crime_id = (SELECT crime_id FROM crimes WHERE cname = 'Rape') WHERE record_id = 70
            let queryString =
                "UPDATE records JOIN crimes SET records.first_name=?, records.middle_name=?, records.last_name=?, records.age=?, records.gender=?, records.height_inch=?, records.crime_id=(SELECT crime_id FROM crimes WHERE cname= ?)"

            // if photo is sent in request
            if (photo) {
                queryString =
                    queryString + ", records.photo=? WHERE record_id=?;"
                queryParams = [
                    first_name,
                    middle_name,
                    last_name,
                    age,
                    gender,
                    height_inch,
                    cname,
                    photo.filename,
                    record_id,
                ]
            } else {
                queryString = queryString + " WHERE record_id=?;"
            }

            // if old photo existed for the record, remove the old photo from storage
            if (photo && oldPhoto) {
                const removeFile = await removeOldFileFromStorage(oldPhoto)

                console.log(removeFile)
            }

            // if no error occurs, and if there is some result
            db.query(queryString, queryParams, (error, result) => {
                if (error) return res.status(500).send(error)
                return res.send(result)
            })
        }
    )
}

// function to remove old photo from storage while updating record
async function removeOldFileFromStorage(fileName) {
    return new Promise((resolve, reject) => {
        fs.unlink(
            path.resolve(__dirname, `../photos/${fileName}`),
            (err, res) => {
                if (err) {
                    reject("Error removing file!")
                }
                resolve("File removed!")
            }
        )
    })
}

////////// DELETE RECORD ///////////
const deleteRecord = async (req, res) => {
    const recordId = req.params.id

    // first find item
    const record = await findRecord(recordId)
    if (!record) return res.status(404).json({ message: "No records found!" })

    // if no error in searching record, and if item is found, then delete record from db
    db.query(
        "DELETE FROM records WHERE record_id=?",
        recordId,
        async (error, result) => {
            // if there is error while deleting record
            if (error) return res.status(500).send(error)

            // if the record had photo, then remove the photo from storage
            if (record.photo)
                await deletePhotoFromStorage(record.photo)
                    .then(() => console.log("photo deleted from storage!"))
                    .catch((error) =>
                        console.log("error deleting photo", error)
                    )
            // try {
            // } catch (error) {
            // console.log(error)
            // return res.json({ message: error })
            // }
        }
    )
    // if record existed and is now deleted then, send deleted record
    return res.send(record)
}

// find record
async function findRecord(id) {
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT * FROM records WHERE record_id=?",
            id,
            (error, result) => {
                if (error) reject(error)
                // else if (!result.length) reject({ message: "No record found!" })
                else {
                    resolve(result[0])
                }
            }
        )
    })
}

// delete the photo from storage which is linked to deleted record
async function deletePhotoFromStorage(photoURL) {
    // console.log(photoURL)
    // console.log(path.resolve(__dirname, "../photos/", photoURL))

    return new Promise((resolve, reject) => {
        fs.unlink(
            path.resolve(__dirname, "../photos/", photoURL),
            (err, res) => {
                if (err) reject({ message: "Error removing file!" })
                resolve({ message: "File removed!" })
            }
        )
    })
}

// get records according to search query
function getSearchedRecord(req, res) {
    console.log(req.body)
    const items = [
        ["firstName", "first_name"],
        ["middleName", "middle_name"],
        ["lastName", "last_name"],
        ["age", "age"],
        ["gender", "gender"],
        ["cname", "cname"],
    ]
    // since I've used eval() below, destructuring is necessary here
    const { firstName, middleName, lastName, age, gender, cname } = req.query
    const nonEmptyItems = Object.keys(req.query).filter(
        (eachItem) => req.query[eachItem]
    )
    const nonEmptyCols = nonEmptyItems.map((eachItem) => {
        return (eachItem = items.find((item) => item[0] === eachItem)[1])
    })

    let queryString = ""

    if (!nonEmptyCols.length) return res.status(400).json({message: "Empty form sent!"})
    else {
        let condition = ""
        for (let i = 0; i < nonEmptyCols.length; i++) {
            if (i === nonEmptyCols.length - 1) {
                condition = condition + nonEmptyCols[i] + "=?"
            } else {
                condition = condition + nonEmptyCols[i] + "=? && "
            }
        }
        queryString = `SELECT * FROM records JOIN crimes ON records.crime_id = crimes.crime_id WHERE ${condition} GROUP BY first_name;`
    }
    // console.log(queryString)
    // console.log(eval(nonEmptyItems[0]))
    db.query(
        queryString,
        nonEmptyItems.map((item) => eval(item)),
        async (error, result) => {
            if (error) return res.status(500).send(error)
            if (!result.length) {
                return res.status(404).send(result)
            }
            // if the records have photos
            for (record of result) {
                if (record.photo) {
                    record.photo = await convertPhotoToObj(record.photo)
                }
            }
            // console.log(result)
            return res.send(result)
        }
    )
}

async function convertPhotoToObj(fileName) {
    // console.log(path.resolve(__dirname, `../photos/${fileName}`))
    return new Promise((resolve, reject) => {
        fs.readFile(
            path.resolve(__dirname, `../photos/${fileName}`),
            (error, result) => {
                if (error) reject(error)
                if (!result) reject(result)
                else
                    resolve({
                        b64: Buffer.from(result.buffer).toString("base64"),
                    })
            }
        )
    })
}

module.exports = {
    getAllRecords,
    getRecord,
    createRecord,
    updateRecord,
    deleteRecord,
    getSearchedRecord,
}
