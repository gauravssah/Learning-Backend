const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
    res.send('Shop home page.')
})

// define the about route
router.get('/about', (req, res) => {
    res.send("About Shop.")
})

// define the blogpost slug route
router.get('/products/:slug', (req, res) => {
    res.send(`Fetch the products for ${req.params.slug}`)
})

module.exports = router