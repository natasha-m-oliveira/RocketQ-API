const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', async (req, res) => {

    try {
        //Response é a resposta do axios MAS eu tiro o data de dentro do response
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')

        return res.json(data)
    } catch (error) {
        console.error(error)
    }
})
const PORT = '4567'
app.listen(PORT, () => {console.log(`Escutando na porta: ${PORT}`)})