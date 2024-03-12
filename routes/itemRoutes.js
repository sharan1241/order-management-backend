const express = require('express')
const {deleteItemController ,getItemController,addItemController,editItemController } = require('../controllers/itemController')

const router = express.Router()

router.get("/get-item",getItemController)

router.post('/add-item',addItemController)

router.put('/edit-item',editItemController)

router.post("/delete-item",deleteItemController)

module.exports = router