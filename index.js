const fs = require("fs");
// const path = require("path");
// const unlink = require("fs")

fs.readFile("./blog1.txt", (err, fileBuffer) => {
    if (err) {
        console.log(err);
        throw err
    }

    console.log(fileBuffer)
})


fs.writeFile("./blog1.txt", "Hallihallo Welt", () => {
    console.log("text changed in blog1 successfully");
})

fs.open("./blog1.txt", "r+", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data)
    console.log("blog1 opened")

    fs.close(data, () => {
        console.log("blog1 closed")
    })
})

fs.writeFile("./blog2.txt", "Hallihallo Welt in blog2", () => {
    console.log("sth written in blog2");
})

fs.mkdir("./assets", (err) => {
    if (err) throw err;
    console.log("Folder created")
})

fs.rmdir("./assets", () => {
    console.log("Folder deleted")
})

fs.writeFile("./delete.txt", "das ist mein Dateiinhalt", () => {
    console.log("new file created")
})

fs.unlink("./delete.txt", (err) => {
    if (err) throw err;
    console.log("file was deleted")
})
