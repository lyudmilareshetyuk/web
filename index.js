const express = require('express')
/*const path = require("path")*/
const app = express()
const port = 3000

/*app.use(express.json())*/

app.get('/', (req, res) => {
    res.send('Good morning!');
    /*res.sendFile('index.html', {root: path.join(__dirname, "./static")})*/
})
app.get('/hello', (req, res) => {
    res.send('Hello!');
})
app.get('/hi', (req, res) => {
    res.send('hi! Get request recieved!');
})

app.post('/hi', (req, res) => {
    res.send('hi! Post request recieved');
})

app.put('/hi', (req, res) => {
    res.send('hi! Put request recieved');
})

/*
app.post('/reg-data', (req, res) => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>", req.body)
})
*/

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})