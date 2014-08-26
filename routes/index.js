var express = require('express');
var router = express.Router();


var bunnies = {
    greeting: "Welcome to Stefan's officially unofficial api, bunnies!",
    available: [
        site_url: "http://stfn.me"
    ]
}


/* GET home page. */
router.get('/', function(req, res) {
    res.json(bunnies);
});

module.exports = router;
