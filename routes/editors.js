var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.redirect('/editors/function')
});

router.get('/function', function (req, res, next) {
    res.render('editors/editor_function', {title: 'Easy Poshi Editor'})
});

module.exports = router;
