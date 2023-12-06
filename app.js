const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser")
const app = express();


const url = "https://api.kanye.rest/"
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html")

})

app.get("/quote", (req, res) => {
    const fetchQuote = async () => {
        const response = await axios.get(url)
        const json = response.data;
        const { quote } = json;

        res.write(`<p>${quote}</p>`)
        res.write(`<form action="/" method="get"><button>Go back</button></form>`)
        res.send()
    }

    fetchQuote();
})

app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/signup.html")
})


app.post("/signup", (req, res) => {
    const { fName, lName, email } = req.body;
    res.write(`<p>First Name: ${fName}</p>`)
    res.write(`<p>Last Name: ${lName}</p>`)
    res.write(`<p>Email: ${email}</p>`)
    res.send();
})

app.listen(3000, () => {
    console.log("Server listening on port 3000")
})