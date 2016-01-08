var express = require('express');
var router = express.Router();
const fse = require('fs-extra');
const rootApp = require('app-root-path');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('recorder/recorder');
});

router.post('/subTask/add', (req, res, next)=> {
    var monthSet = req.app.get('MonthSet');
    var id, month = monthSet[new Date().getMonth()];
    var path = rootApp + `/public/data/recorder/${month}.json`;

    if (req.body.name.match(/^LPS-/i))
        id = req.body.name.split('-')[1]
    else
        id = req.body.name

    fse.ensureFileSync(path);
    fse.readJson(path, function (err, json) {
        var temp = {
            id,
            name: 'LPS'
        };

        json.subTaskList.push(temp);

        if (!err)
            fse.writeJson(path, json, function (err) {
                if (!err) {
                    res.json(json)
                }
                else {
                    next(err)
                }
            })
        else {
            console.error(err.stack)
            next(err)
        }
    })
});

router.post('/subTask/delete', (req, res, next)=> {
    var monthSet = req.app.get('MonthSet');
    var id = req.body.id, month = monthSet[new Date().getMonth()];
    var path = rootApp + `/public/data/recorder/${month}.json`;

    fse.ensureFileSync(path);
    fse.readJson(path, function (err, json) {
        json.subTaskList = json.subTaskList.filter((st)=> {
            return st.id != id;
        })

        if (!err)
            fse.writeJson(path, json, function (err) {
                if (!err) {
                    res.json(json)
                }
                else {
                    next(err)
                }
            })
        else {
            console.error(err.stack)
            next(err)
        }
    })
})

module.exports = router;
