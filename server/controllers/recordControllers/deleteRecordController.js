const db = require("../../config/db")
const fs = require("fs")
const path = require("path")

async function deleteRecord(req, res) {
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
            if (record.photo) await deletePhotoFromStorage(record.photo)
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
    return new Promise((resolve, reject) => {
        fs.unlink(path.resolve(photoURL), (err, res) => {
            if (err) reject({ message: "Error removing file!" })
            resolve({ message: "File removed!" })
        })
    })
}

module.exports = deleteRecord
