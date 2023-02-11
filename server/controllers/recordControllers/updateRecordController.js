const fs = require("fs")
const path = require("path")

const db = require("../../config/db")

function updateRecord(req, res) {
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

                // console.log("old file removed!", removeFile)
            }

            // if no error occurs, and if there is some result
            db.query(queryString, queryParams, (error, result) => {
                if (error) return res.status(500).send(error)
                return res.send(result)
            })
        }
    )
}

// function to remove old photo from storage
async function removeOldFileFromStorage(fileName) {
    return new Promise((resolve, reject) => {
        fs.unlink(
            path.resolve(__dirname, `../../photos/${fileName}`),
            (err, res) => {
                if (err) {
                    reject("Error removing file!")
                }
                resolve("File removed!")
            }
        )
    })
}

module.exports = updateRecord
