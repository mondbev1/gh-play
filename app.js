const express = require('express')
const app = express()

app.get('/', (req, res) => res.send(`Hello - ${process.env.HELLO} 0 21-september-2021 - skaffold-3`))
app.listen(3000, () => console.log('Server ready'))
app.get('/health', (req,res) => res.send("OK"))
app.get('/health', (req,res) => console.log("Got probe"))