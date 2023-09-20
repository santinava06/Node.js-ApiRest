const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Santiago",
        "apellido":"Navarro"
    };
    res.json(data)
})
module.exports = router;