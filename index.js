const express = require('express')
const app = express()
const port  = 4000

app.get('/', (req, res) => {
    res.send("BranyBuys server is running...")
})

app.listen(port, () => {
    console.log(`BrainyBusy server is running on port: ${port}`);
})