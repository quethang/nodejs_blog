const express = require('express')
const newsController = require('../app/controllers/newsController')
const router = express.Router()

router.get('/slug', newsController.show)
router.get('/', newsController.index)

module.exports = router