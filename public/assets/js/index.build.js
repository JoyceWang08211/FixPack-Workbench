webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//css
	__webpack_require__(197);

	//js
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(159);
	var $ = __webpack_require__(160);

	$(document).ready(function () {
	    var ContentBox = React.createClass({
	        displayName: 'ContentBox',
	        render: function render() {
	            return React.createElement(
	                'div',
	                { className: 'jumbotron' },
	                React.createElement(
	                    'h1',
	                    null,
	                    'Fix Pack Workbench',
	                    React.createElement(
	                        'small',
	                        null,
	                        ' For more accuracy and efficiency'
	                    )
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    'Crawler For Jenkins Server'
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    React.createElement(
	                        'a',
	                        { className: 'btn btn-primary btn-lg', href: '/crawler', role: 'button' },
	                        'Learn more'
	                    )
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    'Editor For Liferay POSHI'
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    React.createElement(
	                        'a',
	                        { className: 'btn btn-primary btn-lg', href: '/editors', role: 'button' },
	                        'Learn more'
	                    )
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    'CNQA Knowledge Base'
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    React.createElement(
	                        'a',
	                        { className: 'btn btn-primary btn-lg', href: '/kb', role: 'button' },
	                        'Learn more'
	                    )
	                )
	            );
	        }
	    });

	    ReactDOM.render(React.createElement(ContentBox, null), document.getElementById('_content'));
	});

/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(198);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(164)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(163)();
	// imports


	// module
	exports.push([module.id, "body {\r\n    padding: 50px;\r\n    font: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif;\r\n    background-color: #eee;\r\n}\r\n\r\na {\r\n    color: #00B7FF;\r\n}\r\n", ""]);

	// exports


/***/ }

});