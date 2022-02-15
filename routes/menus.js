const express = require('express')
const MenuController = require('../controllers/MenuController')
const router = express.Router()

router.get('/',MenuController.getAll)

module.exports = router;