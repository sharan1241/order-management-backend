const billsModel = require('../models/billsModel')

const addBillsController = async(req,res)=>{
    try {
        const newBill = new billsModel(req.body)
        await newBill.save()
        res.send("bill created successfully")
    } catch (error) {
        res.send('something went wrong')
        console.log(error)
    }
}
const getBillsController = async(req,res) =>{
    try {
        const bills = await billsModel.find()
        res.send(bills)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    addBillsController,
    getBillsController
}