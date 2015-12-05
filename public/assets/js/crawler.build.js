webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//js
	__webpack_require__(1);

	//css
	__webpack_require__(161);

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(159);
	var $ = __webpack_require__(160);

	var InputEntry = React.createClass({
	    displayName: 'InputEntry',
	    getDefaultProps: function getDefaultProps() {
	        return {
	            id: '',
	            spanName: '',
	            value: '',
	            placeholder: '',
	            onChange: function onChange() {}
	        };
	    },
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'input-group input-group-custom' },
	            React.createElement(
	                'span',
	                { className: 'input-group-addon input-group-addon-custom',
	                    id: this.props.id },
	                this.props.spanName
	            ),
	            React.createElement('input', { type: 'text', className: 'form-control', placeholder: this.props.placeholder,
	                'aria-describedby': this.props.id,
	                onChange: this.props.onChange, value: this.props.value })
	        );
	    }
	});

	var SettingBox = React.createClass({
	    displayName: 'SettingBox',
	    handleInputChange: function handleInputChange(e) {
	        var state = this.state;

	        state[$(e.target).attr('aria-describedby')] = e.target.value;

	        this.setState(state);
	    },
	    handleRadioChange: function handleRadioChange(e) {},
	    handleSaveAction: function handleSaveAction() {
	        console.log(this.state);
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            setting: {
	                user_info: {},
	                fixpack_info: {},
	                crawler_info: {},
	                jenkins_info: {}
	            }
	        };
	    },
	    getInitialState: function getInitialState() {
	        var userInfo = this.props.setting.user_info;
	        var fixpackInfo = this.props.setting.fixpack_info;
	        var crawlerInfo = this.props.setting.crawler_info;
	        var jenkinsInfo = this.props.setting.jenkins_info;

	        return {
	            username: userInfo.username,
	            password: userInfo.password,
	            fpName: fixpackInfo.name,
	            fpTicket: fixpackInfo.ticket,
	            fpBuild: fixpackInfo.build,
	            patchURL: crawlerInfo.url,
	            baselineURL: crawlerInfo.url_baseline,
	            crawlerBuild: crawlerInfo.build,
	            isBaseline: crawlerInfo.is_baseline,
	            jenkinsHost: jenkinsInfo.host
	        };
	    },
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'col-xs-5' },
	            React.createElement(
	                'div',
	                { className: 'row' },
	                React.createElement(
	                    'div',
	                    { className: 'col-xs-12' },
	                    React.createElement(
	                        'h2',
	                        null,
	                        'Crawler Setting'
	                    ),
	                    React.createElement(
	                        'dl',
	                        null,
	                        React.createElement(
	                            'dt',
	                            null,
	                            React.createElement(
	                                'h3',
	                                null,
	                                'User Info'
	                            )
	                        ),
	                        React.createElement(
	                            'dd',
	                            null,
	                            React.createElement(InputEntry, { id: 'username', spanName: 'Username', value: this.state.username,
	                                placeholder: '@liferay.com', onChange: this.handleInputChange }),
	                            React.createElement(InputEntry, { id: 'password', spanName: 'Password', value: this.state.password,
	                                placeholder: 'your password', onChange: this.handleInputChange })
	                        ),
	                        React.createElement(
	                            'dt',
	                            null,
	                            React.createElement(
	                                'h3',
	                                null,
	                                'FixPack Info'
	                            )
	                        ),
	                        React.createElement(
	                            'dd',
	                            null,
	                            React.createElement(InputEntry, { id: 'fpName', spanName: 'Name', value: this.state.fpName,
	                                placeholder: 'the fipack name, as portal-**-6210',
	                                onChange: this.handleInputChange }),
	                            React.createElement(InputEntry, { id: 'fpTicket', spanName: 'Ticket', value: this.state.fpTicket,
	                                placeholder: 'the ticket number of this fixpack, as LRQA-*****',
	                                onChange: this.handleInputChange }),
	                            React.createElement(InputEntry, { id: 'fpBuild', spanName: 'Build', value: this.state.fpBuild,
	                                placeholder: 'the build number of this fixpack',
	                                onChange: this.handleInputChange })
	                        ),
	                        React.createElement(
	                            'dt',
	                            null,
	                            React.createElement(
	                                'h3',
	                                null,
	                                'Crawler Info'
	                            )
	                        ),
	                        React.createElement(
	                            'dd',
	                            null,
	                            React.createElement(InputEntry, { id: 'patchURL', spanName: 'Patch URL', value: this.state.patchURL,
	                                placeholder: 'the Patch URL of Jenkins Server',
	                                onChange: this.handleInputChange }),
	                            React.createElement(InputEntry, { id: 'baselineURL', spanName: 'Baseline URL', value: this.state.baselineURL,
	                                placeholder: 'the Baseline URL of Jenkins Server',
	                                onChange: this.handleInputChange }),
	                            React.createElement(InputEntry, { id: 'crawlerBuild', spanName: 'Crawler Build', value: this.state.patchURL,
	                                placeholder: 'the Patch URL of Jenkins Server',
	                                onChange: this.handleInputChange }),
	                            '//TODO 实现radio'
	                        ),
	                        React.createElement(
	                            'dt',
	                            null,
	                            React.createElement(
	                                'h3',
	                                null,
	                                'Jenkins Info'
	                            )
	                        ),
	                        React.createElement(
	                            'dd',
	                            null,
	                            React.createElement(InputEntry, { id: 'jenkinsHost', spanName: 'Jenkins Host', value: this.state.jenkinsHost,
	                                placeholder: 'the base host of Jenkins Server, as test.liferay.com',
	                                onChange: this.handleInputChange })
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'row' },
	                React.createElement(
	                    'div',
	                    { className: 'col-xs-3' },
	                    React.createElement(
	                        'div',
	                        { className: 'btn-group', role: 'group', 'aria-label': 'start' },
	                        React.createElement(
	                            'button',
	                            { type: 'button', className: 'btn btn-group', onClick: this.handleSaveAction },
	                            'Start'
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	var LogBox = React.createClass({
	    displayName: 'LogBox',
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'col-xs-7' },
	            React.createElement(
	                'div',
	                { className: 'row' },
	                React.createElement('div', { className: 'col-xs-12' })
	            )
	        );
	    }
	});

	var CrawlerBox = React.createClass({
	    displayName: 'CrawlerBox',
	    getDefaultProps: function getDefaultProps() {
	        return {
	            setting: {}
	        };
	    },
	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'div',
	                { className: 'row' },
	                React.createElement(
	                    'div',
	                    { className: 'col-xs-8' },
	                    React.createElement(
	                        'h1',
	                        null,
	                        'Crawler For Jenkins Server'
	                    )
	                )
	            ),
	            React.createElement('hr', null),
	            React.createElement(SettingBox, { setting: this.props.setting }),
	            React.createElement(LogBox, null)
	        );
	    }
	});

	$(function () {
	    fetch('/crawler/get_setting').then(function (res) {
	        return res.json();
	    }).then(function (json) {
	        var setting = JSON.parse(json);
	        ReactDOM.render(React.createElement(CrawlerBox, { setting: setting }), document.getElementById('crawler'));
	    });
	});

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(4);


/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(162);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(164)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./crawler.css", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./crawler.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(163)();
	// imports


	// module
	exports.push([module.id, "/*bootstrap custom*/\r\n.input-group-custom {\r\n    width: 100%;\r\n}\r\n\r\n.input-group-addon-custom {\r\n    width: 30%;\r\n}", ""]);

	// exports


/***/ }

});