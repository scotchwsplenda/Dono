const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({message: 'this is a good idea'})
})


module.exports = router