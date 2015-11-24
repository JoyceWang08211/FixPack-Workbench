"use strict"

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

router.get(['/function', '/macro', '/testcase'], function (req, res, next) {
    res.render('editors/editor', {title: 'Easy Poshi Editor'})
});

router.post('/update', function (req, res, next) {
    var name = req.body.name.split('.')[0];
    var type = req.body.type;

    fs.readFile('../public/data/' + type + '/' + name + '.json', 'utf-8', function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                fail: 0,
                error: 'The Reading process failed due to ' + err + '.'
            })
        }
        else {
            var wrapData = JSON.parse(data);

            switch (type) {
                case 'function':
                    let commandObj = wrapData.definition.command;

                    wrapData.profile = {
                        name: name,
                        default_command: wrapData.definition.default
                    };

                    commandObj.constructor == Array ? wrapData.list = commandObj : wrapData.list = [commandObj];

                    //console.log(wrapData.list);
                    break;
                case 'macro':
                    break;
                case 'testcase':
                    break;
                default:
                    break;
            }
            res.json(JSON.stringify(wrapData));
        }
    });

})

router.post('/save', function (req, res, next) {
    var po = req.body.page_obj;
    var type = req.body.type;

    if (po.command) {
        var po_template_function = {
            definition: {
                "default": "copy",
                "command": po.command
            }
        };

        var fileName = po.name + '.' + type;
        var xml = xmlParser.toXml(po_template_function);

        fs.writeFile(path.resolve(__dirname, '../public/' + type + '/' + fileName), pd.xml(xml), function (err) {
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
