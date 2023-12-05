const express = require("express");
const axios = require("axios")
const app = express();

const url = "https://api.kanye.rest/"

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

app.listen(3000, () => {
    console.log("Server listening on port 3000")
})