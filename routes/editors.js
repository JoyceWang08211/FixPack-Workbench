var express = require('express');
var fs = require('fs');

var xmlParser = require('xml2json');
var path = require('path');
var pd = require('pretty-data').pd;
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.redirect('/editors/function')
});

router.get('/function', function (req, res, next) {
    res.render('editors/editor_function', {title: 'Easy Poshi Editor'})
});

router.post('/save', function (req, res, next) {
    var po = req.body.page_obj;

    if (po.command) {
        var po_template_function = {
            definition: {
                "default": "copy",
                "command": po.command
            }
        };

        var xml = xmlParser.toXml(po_template_function);

        fs.writeFile(path.resolve(__dirname, '../private/data/Test.xml'), pd.xml(xml), function (err) {
            if (err) {
                res.json({
                    fail: 0,
                    error: 'The Writing process failed due to ' + err + '.'
                })
            }
            else {
                res.json({success: 1});
            }
        })

    }
    else {
        res.json({
            fail: 0,
            error: 'The Page Object is null'
        })
    }

});

module.exports = router;
