const express = require('express')
const morgan = require('morgan')
const bodyParser = require("body-parser")
const cors = require("cors")
const dotanv = require('dotenv')
const { bgCyan } = require('colors')
const connectDb = require('./config/config')
const mongoose = require('mongoose')
const itemModel = require('./models/itemModel')
const items = require('./utils/data')
require('colors')


dotanv.config()

connectDb()

const importData = async()=>{
    try {
        await itemModel.deleteMany()
        const itemsData = await itemModel.insertMany(items)
        console.log('All Items Added'.bgGreen)
        process.exit()

    } catch (error) {
        console.log(`${error}`.bgRed.inverse)
        process.exit(1)
    }
}
useEffect(() => {
    importData()
}, [])



const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))

app.use('/api/items',require('./routes/itemRoutes'))
app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/bills',require('./routes/billsRoutes'))


const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Server Running successfully`.bgCyan.white)
})


