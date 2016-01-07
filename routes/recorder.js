var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('recorder/recorder');
});

router.post('/subTask/add', (req, res, next)=> {
    var id;

    if (req.body.name.match(/^LPS-/i))
        id = req.body.name.split('-')[1]
    else
        id = req.body.name


    res.json({
        "subTaskList": [
            {
                "id": id,
                "name": 'LPS'
            }
        ]
    })
});

module.exports = router;
