const { request } = require("express")


const info1 = {
    "name": "ali",
    "lname": "nazari",
    "age": 25,
    "date": new Date
}

const info2 = [
    "parsa amir",
    "25 years",
    "still fuckin' alive"

]

function myform(req, res) {
    res.write(`
            <html>
                <head>
                    <title>Roocket Website</title>
                </head>
                <body>
                    <h1>Search</h1>
                    <form action="" method="POST">
                        <label for="serach">Search</label>
                        <input name="search" id="search"/>
                        <button>send Data</button>
                    </form>
                </body>
            </html>
        `)
}
function arr1(req, res) {
    console.log(request.body)
    if (info2.length > 0 && request.body == "parsa")
        res.status(200).json(info2)
    else
        res.status(404).send('not found')
}

module.exports = {
    myarr: arr1,
    myf: myform
}