webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//js
	__webpack_require__(165);

	//css
	__webpack_require__(189);
	__webpack_require__(191);
	__webpack_require__(193);
	__webpack_require__(195);

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(159);
	var $ = __webpack_require__(160);

	var ToolbarBox = __webpack_require__(166);
	var EditorPanelBox = __webpack_require__(168);

	$(function () {
	    ReactDOM.render(React.createElement(ToolbarBox, null), document.getElementById('editor_toolbar'));
	    ReactDOM.render(React.createElement(EditorPanelBox, null), document.getElementById('editor_panel'));
	});

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var $ = __webpack_require__(160);
	//metisMenu plugin
	__webpack_require__(167);

	var EditorUpdateBox = React.createClass({
	    displayName: 'EditorUpdateBox',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            isActive: false
	        };
	    },

	    render: function render() {
	        return React.createElement(
	            'li',
	            { className: this.props.isActive ? 'active' : '' },
	            React.createElement(
	                'a',
	                { href: '#', 'aria-expanded': 'true' },
	                React.createElement('span', { className: 'sidebar-nav-item-icon fa fa-github fa-lg' }),
	                'POSHI Editor v0.1.0'
	            ),
	            React.createElement(
	                'ul',
	                { 'aria-expanded': 'true' },
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'a',
	                        { href: '#' },
	                        'GitHub Source'
	                    )
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'a',
	                        { href: '#' },
	                        'Update'
	                    )
	                )
	            )
	        );
	    }
	});

	var EditorTypeBox = React.createClass({
	    displayName: 'EditorTypeBox',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            isActive: false
	        };
	    },

	    render: function render() {
	        return React.createElement(
	            'li',
	            { className: this.props.isActive ? 'active' : '' },
	            React.createElement(
	                'a',
	                { href: '#', 'aria-expanded': 'true' },
	                React.createElement('span', { className: 'sidebar-nav-item-icon glyphicon glyphicon-file' }),
	                'Page Object Editor'
	            ),
	            React.createElement(
	                'ul',
	                { 'aria-expanded': 'true' },
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'a',
	                        { href: '/editors/function' },
	                        'Function Files'
	                    )
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'a',
	                        { href: '/editors/macro' },
	                        'Macro Files'
	                    )
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'a',
	                        { href: '/editors/testcase' },
	                        'Testcase Files'
	                    )
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'a',
	                        { href: '/editors/path' },
	                        'Path Files'
	                    )
	                )
	            )
	        );
	    }
	});

	var EditorTipsBox = React.createClass({
	    displayName: 'EditorTipsBox',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            isActive: false
	        };
	    },

	    render: function render() {
	        return React.createElement(
	            'li',
	            { className: this.props.isActive ? 'active' : '' },
	            React.createElement(
	                'a',
	                { href: '#', 'aria-expanded': 'true' },
	                React.createElement('span', { className: 'sidebar-nav-item-icon glyphicon glyphicon-question-sign' }),
	                'Tips'
	            ),
	            React.createElement(
	                'ul',
	                { 'aria-expanded': 'true' },
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'a',
	                        { href: '#' },
	                        'Tip 1'
	                    )
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'a',
	                        { href: '#' },
	                        'Tip 2'
	                    )
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'a',
	                        { href: '#' },
	                        'Tip 3'
	                    )
	                )
	            )
	        );
	    }
	});

	var ToolbarBox = React.createClass({
	    displayName: 'ToolbarBox',

	    render: function render() {
	        return React.createElement(
	            'aside',
	            { className: 'sidebar' },
	            React.createElement(
	                'nav',
	                { className: 'sidebar-nav' },
	                React.createElement(
	                    'ul',
	                    { className: 'metismenu', id: 'menu' },
	                    React.createElement(EditorUpdateBox, null),
	                    React.createElement(EditorTypeBox, { isActive: true }),
	                    React.createElement(EditorTipsBox, null)
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'tooltips' },
	                    React.createElement(
	                        'p',
	                        null,
	                        'some tooltips'
	                    )
	                )
	            )
	        );
	    },

	    componentDidMount: function componentDidMount() {
	        $("#menu").metisMenu({
	            preventDefault: false
	        });
	    }
	});

	module.exports = ToolbarBox;

/***/ },

/***/ 167:
/***/ function(module, exports) {

	"use strict";

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	/*
	 * metismenu - v2.2.0
	 * A jQuery menu plugin
	 * https://github.com/onokumus/metisMenu#readme
	 *
	 * Made by Osman Nuri Okumuş <onokumus@gmail.com> (https://github.com/onokumus)
	 * Under MIT License
	 */

	!(function (a) {
	  "use strict";
	  function b() {
	    var a = document.createElement("mm"),
	        b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var c in b) {
	      if (void 0 !== a.style[c]) return { end: b[c] };
	    }return !1;
	  }function c(b) {
	    return this.each(function () {
	      var c = a(this),
	          d = c.data("mm"),
	          f = a.extend({}, e.DEFAULTS, c.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);d || c.data("mm", d = new e(this, f)), "string" == typeof b && d[b]();
	    });
	  }a.fn.emulateTransitionEnd = function (b) {
	    var c = !1,
	        e = this;a(this).one("mmTransitionEnd", function () {
	      c = !0;
	    });var f = function f() {
	      c || a(e).trigger(d.end);
	    };return setTimeout(f, b), this;
	  };var d = b();d && (a.event.special.mmTransitionEnd = { bindType: d.end, delegateType: d.end, handle: function handle(b) {
	      return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
	    } });var e = function e(b, c) {
	    this.$element = a(b), this.options = a.extend({}, e.DEFAULTS, c), this.transitioning = null, this.init();
	  };e.TRANSITION_DURATION = 350, e.DEFAULTS = { toggle: !0, doubleTapToGo: !1, preventDefault: !0, activeClass: "active", collapseClass: "collapse", collapseInClass: "in", collapsingClass: "collapsing", onTransitionStart: !1, onTransitionEnd: !1 }, e.prototype.init = function () {
	    var b = this,
	        c = this.options.activeClass,
	        d = this.options.collapseClass,
	        e = this.options.collapseInClass;this.$element.find("li." + c).has("ul").children("ul").attr("aria-expanded", !0).addClass(d + " " + e), this.$element.find("li").not("." + c).has("ul").children("ul").attr("aria-expanded", !1).addClass(d), this.options.doubleTapToGo && this.$element.find("li." + c).has("ul").children("a").addClass("doubleTapToGo"), this.$element.find("li").has("ul").children("a").on("click.metisMenu", function (d) {
	      var e = a(this),
	          f = e.parent("li"),
	          g = f.children("ul");return b.options.preventDefault && d.preventDefault(), f.hasClass(c) && !b.options.doubleTapToGo ? (b.hide(g), e.attr("aria-expanded", !1)) : (b.show(g), e.attr("aria-expanded", !0)), b.options.onTransitionStart && b.options.onTransitionStart(), b.options.doubleTapToGo && b.doubleTapToGo(e) && "#" !== e.attr("href") && "" !== e.attr("href") ? (d.stopPropagation(), void (document.location = e.attr("href"))) : void 0;
	    });
	  }, e.prototype.doubleTapToGo = function (a) {
	    var b = this.$element;return a.hasClass("doubleTapToGo") ? (a.removeClass("doubleTapToGo"), !0) : a.parent().children("ul").length ? (b.find(".doubleTapToGo").removeClass("doubleTapToGo"), a.addClass("doubleTapToGo"), !1) : void 0;
	  }, e.prototype.show = function (b) {
	    var c = this.options.activeClass,
	        f = this.options.collapseClass,
	        g = this.options.collapseInClass,
	        h = this.options.collapsingClass,
	        i = a(b),
	        j = i.parent("li");if (!this.transitioning && !i.hasClass(g)) {
	      j.addClass(c), this.options.toggle && this.hide(j.siblings().children("ul." + g).attr("aria-expanded", !1)), i.removeClass(f).addClass(h).height(0), this.transitioning = 1;var k = function k() {
	        this.transitioning && this.options.onTransitionEnd && this.options.onTransitionEnd(), i.removeClass(h).addClass(f + " " + g).height("").attr("aria-expanded", !0), this.transitioning = 0;
	      };return d ? void i.one("mmTransitionEnd", a.proxy(k, this)).emulateTransitionEnd(e.TRANSITION_DURATION).height(i[0].scrollHeight) : k.call(this);
	    }
	  }, e.prototype.hide = function (b) {
	    var c = this.options.activeClass,
	        f = this.options.collapseClass,
	        g = this.options.collapseInClass,
	        h = this.options.collapsingClass,
	        i = a(b);if (!this.transitioning && i.hasClass(g)) {
	      i.parent("li").removeClass(c), i.height(i.height())[0].offsetHeight, i.addClass(h).removeClass(f).removeClass(g), this.transitioning = 1;var j = function j() {
	        this.transitioning && this.options.onTransitionEnd && this.options.onTransitionEnd(), this.transitioning = 0, i.removeClass(h).addClass(f).attr("aria-expanded", !1);
	      };return d ? void i.height(0).one("mmTransitionEnd", a.proxy(j, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : j.call(this);
	    }
	  };var f = a.fn.metisMenu;a.fn.metisMenu = c, a.fn.metisMenu.Constructor = e, a.fn.metisMenu.noConflict = function () {
	    return a.fn.metisMenu = f, this;
	  };
	})(jQuery);

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var $ = __webpack_require__(160);

	//JSON Search Input plugin
	__webpack_require__(159);

	var SelectSearchBox = __webpack_require__(169);

	//Editor
	var EditorBox = __webpack_require__(175);

	var editor_type = window.location.href.split('/').pop();

	var getOptions = function getOptions() {
	    return fetch('http://' + window.location.host + '/data/common/MenuLists.json').then(function (response) {
	        return response.json();
	    }).then(function (json) {
	        switch (editor_type) {
	            case 'function':
	                return { options: json.functionMenuList };
	                break;
	            case 'macro':
	                return { options: json.macroMenuList };
	                break;
	            case 'testcase':
	                return { options: json.testcaseMenuList };
	                break;
	            default:
	                return { options: {} };
	                break;
	        }
	    });
	};

	var EditorPanelBox = React.createClass({
	    displayName: 'EditorPanelBox',
	    handleChange: function handleChange(val) {
	        var _this = this;

	        $.ajax({
	            type: "POST",
	            url: "/editors/update",
	            data: {
	                name: val,
	                type: editor_type
	            },
	            dataType: "json",
	            success: function success(result) {
	                var fileObject = JSON.parse(result);

	                _this.setState({
	                    currentFile: fileObject
	                });
	            }
	        });
	    },
	    getInitialState: function getInitialState() {
	        return {
	            currentFile: {}
	        };
	    },
	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'div',
	                { id: 'search', className: 'row' },
	                React.createElement(SelectSearchBox, {
	                    name: 'poshi-object-name',
	                    asyncOptions: getOptions,
	                    onChange: this.handleChange
	                })
	            ),
	            React.createElement(
	                'div',
	                { className: 'row' },
	                React.createElement(
	                    'ul',
	                    { id: 'editor', className: 'nav nav-tabs nav-justified' },
	                    React.createElement(
	                        'li',
	                        { role: 'presentation', className: 'active' },
	                        React.createElement(
	                            'a',
	                            { href: '#profile', 'aria-controls': 'profile', role: 'tab', 'data-toggle': 'tab' },
	                            'Profile'
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        { role: 'presentation' },
	                        React.createElement(
	                            'a',
	                            { href: '#settings', 'aria-controls': 'settings', role: 'tab',
	                                'data-toggle': 'tab' },
	                            'Settings'
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'tab-content' },
	                React.createElement(
	                    'div',
	                    { role: 'tabpanel', className: 'tab-pane active', id: 'profile' },
	                    React.createElement(EditorBox, { editorType: editor_type,
	                        fileObj: this.state.currentFile })
	                ),
	                React.createElement(
	                    'div',
	                    { role: 'tabpanel', className: 'tab-pane', id: 'settings' },
	                    '3'
	                )
	            )
	        );
	    },
	    componentDidMount: function componentDidMount() {
	        var _this2 = this;

	        $('#editor').find('a').click(function (e) {
	            e.preventDefault();
	            $(_this2).tab('show');
	        });
	    }
	});

	module.exports = EditorPanelBox;

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	/* disable some rules until we refactor more completely; fixing them now would
	   cause conflicts with some open PRs unnecessarily. */
	/* eslint react/jsx-sort-prop-types: 0, react/sort-comp: 0, react/prop-types: 0 */

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(159);
	var Input = __webpack_require__(170);
	var classes = __webpack_require__(171);
	var Value = __webpack_require__(172);
	var SingleValue = __webpack_require__(173);
	var Option = __webpack_require__(174);

	var requestId = 0;

	var Select = React.createClass({

		displayName: 'Select',

		propTypes: {
			addLabelText: React.PropTypes.string, // placeholder displayed when you want to add a label on a multi-value input
			allowCreate: React.PropTypes.bool, // whether to allow creation of new entries
			asyncOptions: React.PropTypes.func, // function to call to get options
			autoload: React.PropTypes.bool, // whether to auto-load the default async options set
			backspaceRemoves: React.PropTypes.bool, // whether backspace removes an item if there is no text input
			cacheAsyncResults: React.PropTypes.bool, // whether to allow cache
			className: React.PropTypes.string, // className for the outer element
			clearAllText: React.PropTypes.string, // title for the "clear" control when multi: true
			clearValueText: React.PropTypes.string, // title for the "clear" control
			clearable: React.PropTypes.bool, // should it be possible to reset value
			delimiter: React.PropTypes.string, // delimiter to use to join multiple values
			disabled: React.PropTypes.bool, // whether the Select is disabled or not
			filterOption: React.PropTypes.func, // method to filter a single option  (option, filterString)
			filterOptions: React.PropTypes.func, // method to filter the options array: function ([options], filterString, [values])
			ignoreCase: React.PropTypes.bool, // whether to perform case-insensitive filtering
			inputProps: React.PropTypes.object, // custom attributes for the Input (in the Select-control) e.g: {'data-foo': 'bar'}
			isLoading: React.PropTypes.bool, // whether the Select is loading externally or not (such as options being loaded)
			labelKey: React.PropTypes.string, // path of the label value in option objects
			matchPos: React.PropTypes.string, // (any|start) match the start or entire string when filtering
			matchProp: React.PropTypes.string, // (any|label|value) which option property to filter on
			multi: React.PropTypes.bool, // multi-value input
			name: React.PropTypes.string, // field name, for hidden <input /> tag
			newOptionCreator: React.PropTypes.func, // factory to create new options when allowCreate set
			noResultsText: React.PropTypes.string, // placeholder displayed when there are no matching search results
			onBlur: React.PropTypes.func, // onBlur handler: function (event) {}
			onChange: React.PropTypes.func, // onChange handler: function (newValue) {}
			onFocus: React.PropTypes.func, // onFocus handler: function (event) {}
			onInputChange: React.PropTypes.func, // onInputChange handler: function (inputValue) {}
			onOptionLabelClick: React.PropTypes.func, // onCLick handler for value labels: function (value, event) {}
			optionComponent: React.PropTypes.func, // option component to render in dropdown
			optionRenderer: React.PropTypes.func, // optionRenderer: function (option) {}
			options: React.PropTypes.array, // array of options
			placeholder: React.PropTypes.string, // field placeholder, displayed when there's no value
			searchable: React.PropTypes.bool, // whether to enable searching feature or not
			searchingText: React.PropTypes.string, // message to display whilst options are loading via asyncOptions
			searchPromptText: React.PropTypes.string, // label to prompt for search input
			singleValueComponent: React.PropTypes.func, // single value component when multiple is set to false
			value: React.PropTypes.any, // initial field value
			valueComponent: React.PropTypes.func, // value component to render in multiple mode
			valueKey: React.PropTypes.string, // path of the label value in option objects
			valueRenderer: React.PropTypes.func // valueRenderer: function (option) {}
		},

		getDefaultProps: function getDefaultProps() {
			return {
				addLabelText: 'Add "{label}"?',
				allowCreate: false,
				asyncOptions: undefined,
				autoload: true,
				backspaceRemoves: true,
				cacheAsyncResults: true,
				className: undefined,
				clearAllText: 'Clear all',
				clearValueText: 'Clear value',
				clearable: true,
				delimiter: ',',
				disabled: false,
				ignoreCase: true,
				inputProps: {},
				isLoading: false,
				labelKey: 'label',
				matchPos: 'any',
				matchProp: 'any',
				name: undefined,
				newOptionCreator: undefined,
				noResultsText: 'No results found',
				onChange: undefined,
				onInputChange: undefined,
				onOptionLabelClick: undefined,
				optionComponent: Option,
				options: undefined,
				placeholder: 'Select...',
				searchable: true,
				searchingText: 'Searching...',
				searchPromptText: 'Type to search',
				singleValueComponent: SingleValue,
				value: undefined,
				valueComponent: Value,
				valueKey: 'value'
			};
		},

		getInitialState: function getInitialState() {
			return {
				/*
	    * set by getStateFromValue on componentWillMount:
	    * - value
	    * - values
	    * - filteredOptions
	    * - inputValue
	    * - placeholder
	    * - focusedOption
	   */
				isFocused: false,
				isLoading: false,
				isOpen: false,
				options: this.props.options
			};
		},

		componentWillMount: function componentWillMount() {
			var _this = this;

			this._optionsCache = {};
			this._optionsFilterString = '';
			this._closeMenuIfClickedOutside = function (event) {
				if (!_this.state.isOpen) {
					return;
				}
				var menuElem = ReactDOM.findDOMNode(_this.refs.selectMenuContainer);
				var controlElem = ReactDOM.findDOMNode(_this.refs.control);

				var eventOccuredOutsideMenu = _this.clickedOutsideElement(menuElem, event);
				var eventOccuredOutsideControl = _this.clickedOutsideElement(controlElem, event);

				// Hide dropdown menu if click occurred outside of menu
				if (eventOccuredOutsideMenu && eventOccuredOutsideControl) {
					_this.setState({
						isOpen: false
					}, _this._unbindCloseMenuIfClickedOutside);
				}
			};
			this._bindCloseMenuIfClickedOutside = function () {
				if (!document.addEventListener && document.attachEvent) {
					document.attachEvent('onclick', _this._closeMenuIfClickedOutside);
				} else {
					document.addEventListener('click', _this._closeMenuIfClickedOutside);
				}
			};
			this._unbindCloseMenuIfClickedOutside = function () {
				if (!document.removeEventListener && document.detachEvent) {
					document.detachEvent('onclick', _this._closeMenuIfClickedOutside);
				} else {
					document.removeEventListener('click', _this._closeMenuIfClickedOutside);
				}
			};
			this.setState(this.getStateFromValue(this.props.value));
		},

		componentDidMount: function componentDidMount() {
			if (this.props.asyncOptions && this.props.autoload) {
				this.autoloadAsyncOptions();
			}
		},

		componentWillUnmount: function componentWillUnmount() {
			clearTimeout(this._blurTimeout);
			clearTimeout(this._focusTimeout);
			if (this.state.isOpen) {
				this._unbindCloseMenuIfClickedOutside();
			}
		},

		componentWillReceiveProps: function componentWillReceiveProps(newProps) {
			var _this2 = this;

			var optionsChanged = false;
			if (JSON.stringify(newProps.options) !== JSON.stringify(this.props.options)) {
				optionsChanged = true;
				this.setState({
					options: newProps.options,
					filteredOptions: this.filterOptions(newProps.options)
				});
			}
			if (newProps.value !== this.state.value || newProps.placeholder !== this.props.placeholder || optionsChanged) {
				var setState = function setState(newState) {
					_this2.setState(_this2.getStateFromValue(newProps.value, newState && newState.options || newProps.options, newProps.placeholder));
				};
				if (this.props.asyncOptions) {
					this.loadAsyncOptions(newProps.value, {}, setState);
				} else {
					setState();
				}
			}
		},

		componentDidUpdate: function componentDidUpdate() {
			var _this3 = this;

			if (!this.props.disabled && this._focusAfterUpdate) {
				clearTimeout(this._blurTimeout);
				clearTimeout(this._focusTimeout);
				this._focusTimeout = setTimeout(function () {
					if (!_this3.isMounted()) return;
					_this3.getInputNode().focus();
					_this3._focusAfterUpdate = false;
				}, 50);
			}
			if (this._focusedOptionReveal) {
				if (this.refs.focused && this.refs.menu) {
					var focusedDOM = ReactDOM.findDOMNode(this.refs.focused);
					var menuDOM = ReactDOM.findDOMNode(this.refs.menu);
					var focusedRect = focusedDOM.getBoundingClientRect();
					var menuRect = menuDOM.getBoundingClientRect();

					if (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top) {
						menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
					}
				}
				this._focusedOptionReveal = false;
			}
		},

		focus: function focus() {
			this.getInputNode().focus();
		},

		clickedOutsideElement: function clickedOutsideElement(element, event) {
			var eventTarget = event.target ? event.target : event.srcElement;
			while (eventTarget != null) {
				if (eventTarget === element) return false;
				eventTarget = eventTarget.offsetParent;
			}
			return true;
		},

		getStateFromValue: function getStateFromValue(value, options, placeholder) {
			var _this4 = this;

			if (!options) {
				options = this.state.options;
			}
			if (!placeholder) {
				placeholder = this.props.placeholder;
			}

			// reset internal filter string
			this._optionsFilterString = '';

			var values = this.initValuesArray(value, options);
			var filteredOptions = this.filterOptions(options, values);

			var focusedOption;
			var valueForState = null;
			if (!this.props.multi && values.length) {
				focusedOption = values[0];
				valueForState = values[0][this.props.valueKey];
			} else {
				focusedOption = this.getFirstFocusableOption(filteredOptions);
				valueForState = values.map(function (v) {
					return v[_this4.props.valueKey];
				}).join(this.props.delimiter);
			}

			return {
				value: valueForState,
				values: values,
				inputValue: '',
				filteredOptions: filteredOptions,
				placeholder: !this.props.multi && values.length ? values[0][this.props.labelKey] : placeholder,
				focusedOption: focusedOption
			};
		},

		getFirstFocusableOption: function getFirstFocusableOption(options) {
			for (var optionIndex = 0; optionIndex < options.length; ++optionIndex) {
				if (!options[optionIndex].disabled) {
					return options[optionIndex];
				}
			}
		},

		initValuesArray: function initValuesArray(values, options) {
			var _this5 = this;

			if (!Array.isArray(values)) {
				if (typeof values === 'string') {
					values = values === '' ? [] : this.props.multi ? values.split(this.props.delimiter) : [values];
				} else {
					values = values !== undefined && values !== null ? [values] : [];
				}
			}
			return values.map(function (val) {
				if (typeof val === 'string' || typeof val === 'number') {
					var _ref;

					for (var key in options) {
						if (options.hasOwnProperty(key) && options[key] && (options[key][_this5.props.valueKey] === val || typeof options[key][_this5.props.valueKey] === 'number' && options[key][_this5.props.valueKey].toString() === val)) {
							return options[key];
						}
					}
					return _ref = {}, _defineProperty(_ref, _this5.props.valueKey, val), _defineProperty(_ref, _this5.props.labelKey, val), _ref;
				} else {
					return val;
				}
			});
		},

		setValue: function setValue(value, focusAfterUpdate) {
			if (focusAfterUpdate || focusAfterUpdate === undefined) {
				this._focusAfterUpdate = true;
			}
			var newState = this.getStateFromValue(value);
			newState.isOpen = false;
			this.fireChangeEvent(newState);
			this.setState(newState);
		},

		selectValue: function selectValue(value) {
			if (!this.props.multi) {
				this.setValue(value);
			} else if (value) {
				this.addValue(value);
			}
			this._unbindCloseMenuIfClickedOutside();
		},

		addValue: function addValue(value) {
			this.setValue(this.state.values.concat(value));
		},

		popValue: function popValue() {
			this.setValue(this.state.values.slice(0, this.state.values.length - 1));
		},

		removeValue: function removeValue(valueToRemove) {
			this.setValue(this.state.values.filter(function (value) {
				return value !== valueToRemove;
			}));
		},

		clearValue: function clearValue(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, ignore it.
			if (event && event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();
			this.setValue(null);
		},

		resetValue: function resetValue() {
			this.setValue(this.state.value === '' ? null : this.state.value);
		},

		getInputNode: function getInputNode() {
			var input = this.refs.input;
			return this.props.searchable ? input : ReactDOM.findDOMNode(input);
		},

		fireChangeEvent: function fireChangeEvent(newState) {
			if (newState.value !== this.state.value && this.props.onChange) {
				this.props.onChange(newState.value, newState.values);
			}
		},

		handleMouseDown: function handleMouseDown(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();

			// for the non-searchable select, close the dropdown when button is clicked
			if (this.state.isOpen && !this.props.searchable) {
				this.setState({
					isOpen: false
				}, this._unbindCloseMenuIfClickedOutside);
				return;
			}

			if (this.state.isFocused) {
				this.setState({
					isOpen: true
				}, this._bindCloseMenuIfClickedOutside);
			} else {
				this._openAfterFocus = true;
				this.getInputNode().focus();
			}
		},

		handleMouseDownOnMenu: function handleMouseDownOnMenu(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();
		},

		handleMouseDownOnArrow: function handleMouseDownOnArrow(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			// If not focused, handleMouseDown will handle it
			if (!this.state.isOpen) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();
			this.setState({
				isOpen: false
			}, this._unbindCloseMenuIfClickedOutside);
		},

		handleInputFocus: function handleInputFocus(event) {
			var _this6 = this;

			var newIsOpen = this.state.isOpen || this._openAfterFocus;
			this.setState({
				isFocused: true,
				isOpen: newIsOpen
			}, function () {
				if (newIsOpen) {
					_this6._bindCloseMenuIfClickedOutside();
				} else {
					_this6._unbindCloseMenuIfClickedOutside();
				}
			});
			this._openAfterFocus = false;
			if (this.props.onFocus) {
				this.props.onFocus(event);
			}
		},

		handleInputBlur: function handleInputBlur(event) {
			var _this7 = this;

			var menuDOM = ReactDOM.findDOMNode(this.refs.menu);
			if (document.activeElement.isEqualNode(menuDOM)) {
				return;
			}
			this._blurTimeout = setTimeout(function () {
				if (_this7._focusAfterUpdate || !_this7.isMounted()) return;
				_this7.setState({
					inputValue: '',
					isFocused: false,
					isOpen: false
				});
			}, 50);
			if (this.props.onBlur) {
				this.props.onBlur(event);
			}
		},

		handleKeyDown: function handleKeyDown(event) {
			if (this.props.disabled) return;
			switch (event.keyCode) {
				case 8:
					// backspace
					if (!this.state.inputValue && this.props.backspaceRemoves) {
						event.preventDefault();
						this.popValue();
					}
					return;
				case 9:
					// tab
					if (event.shiftKey || !this.state.isOpen || !this.state.focusedOption) {
						return;
					}
					this.selectFocusedOption();
					break;
				case 13:
					// enter
					if (!this.state.isOpen) return;
					this.selectFocusedOption();
					break;
				case 27:
					// escape
					if (this.state.isOpen) {
						this.resetValue();
					} else if (this.props.clearable) {
						this.clearValue(event);
					}
					break;
				case 38:
					// up
					this.focusPreviousOption();
					break;
				case 40:
					// down
					this.focusNextOption();
					break;
				case 188:
					// ,
					if (this.props.allowCreate && this.props.multi) {
						event.preventDefault();
						event.stopPropagation();
						this.selectFocusedOption();
					} else {
						return;
					}
					break;
				default:
					return;
			}
			event.preventDefault();
		},

		// Ensures that the currently focused option is available in filteredOptions.
		// If not, returns the first available option.
		_getNewFocusedOption: function _getNewFocusedOption(filteredOptions) {
			for (var key in filteredOptions) {
				if (filteredOptions.hasOwnProperty(key) && filteredOptions[key] === this.state.focusedOption) {
					return filteredOptions[key];
				}
			}
			return this.getFirstFocusableOption(filteredOptions);
		},

		handleInputChange: function handleInputChange(event) {
			// assign an internal variable because we need to use
			// the latest value before setState() has completed.
			this._optionsFilterString = event.target.value;
			if (this.props.onInputChange) {
				this.props.onInputChange(event.target.value);
			}
			if (this.props.asyncOptions) {
				this.setState({
					isLoading: true,
					inputValue: event.target.value
				});
				this.loadAsyncOptions(event.target.value, {
					isLoading: false,
					isOpen: true
				}, this._bindCloseMenuIfClickedOutside);
			} else {
				var filteredOptions = this.filterOptions(this.state.options);
				this.setState({
					isOpen: true,
					inputValue: event.target.value,
					filteredOptions: filteredOptions,
					focusedOption: this._getNewFocusedOption(filteredOptions)
				}, this._bindCloseMenuIfClickedOutside);
			}
		},

		autoloadAsyncOptions: function autoloadAsyncOptions() {
			var _this8 = this;

			this.setState({
				isLoading: true
			});
			this.loadAsyncOptions('', { isLoading: false }, function () {
				// update with new options but don't focus
				_this8.setValue(_this8.props.value, false);
			});
		},

		loadAsyncOptions: function loadAsyncOptions(input, state, callback) {
			if (input === undefined) input = '';

			var _this9 = this;

			var thisRequestId = this._currentRequestId = requestId++;
			if (this.props.cacheAsyncResults) {
				for (var i = 0; i <= input.length; i++) {
					var cacheKey = input.slice(0, i);
					if (this._optionsCache[cacheKey] && (input === cacheKey || this._optionsCache[cacheKey].complete)) {
						var options = this._optionsCache[cacheKey].options;
						var filteredOptions = this.filterOptions(options);
						var newState = {
							options: options,
							filteredOptions: filteredOptions,
							focusedOption: this._getNewFocusedOption(filteredOptions)
						};
						for (var key in state) {
							if (state.hasOwnProperty(key)) {
								newState[key] = state[key];
							}
						}
						this.setState(newState);
						if (callback) callback.call(this, newState);
						return;
					}
				}
			}

			var optionsResponseHandler = function optionsResponseHandler(err, data) {
				if (err) throw err;
				if (_this9.props.cacheAsyncResults) {
					_this9._optionsCache[input] = data;
				}
				if (thisRequestId !== _this9._currentRequestId) {
					return;
				}
				var filteredOptions = _this9.filterOptions(data.options);
				var newState = {
					options: data.options,
					filteredOptions: filteredOptions,
					focusedOption: _this9._getNewFocusedOption(filteredOptions)
				};
				for (var key in state) {
					if (state.hasOwnProperty(key)) {
						newState[key] = state[key];
					}
				}
				_this9.setState(newState);
				if (callback) callback.call(_this9, newState);
			};

			var asyncOpts = this.props.asyncOptions(input, optionsResponseHandler);

			if (asyncOpts && typeof asyncOpts.then === 'function') {
				asyncOpts.then(function (data) {
					optionsResponseHandler(null, data);
				}, function (err) {
					optionsResponseHandler(err);
				});
			}
		},

		filterOptions: function filterOptions(options, values) {
			var _this10 = this;

			var filterValue = this._optionsFilterString;
			var exclude = (values || this.state.values).map(function (i) {
				return i[_this10.props.valueKey];
			});
			if (this.props.filterOptions) {
				return this.props.filterOptions.call(this, options, filterValue, exclude);
			} else {
				var filterOption = function filterOption(op) {
					if (this.props.multi && exclude.indexOf(op[this.props.valueKey]) > -1) return false;
					if (this.props.filterOption) return this.props.filterOption.call(this, op, filterValue);
					var valueTest = String(op[this.props.valueKey]);
					var labelTest = String(op[this.props.labelKey]);
					if (this.props.ignoreCase) {
						valueTest = valueTest.toLowerCase();
						labelTest = labelTest.toLowerCase();
						filterValue = filterValue.toLowerCase();
					}
					return !filterValue || this.props.matchPos === 'start' ? this.props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || this.props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : this.props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || this.props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
				};
				return (options || []).filter(filterOption, this);
			}
		},

		selectFocusedOption: function selectFocusedOption() {
			if (this.props.allowCreate && !this.state.focusedOption) {
				return this.selectValue(this.state.inputValue);
			}

			if (this.state.focusedOption) {
				return this.selectValue(this.state.focusedOption);
			}
		},

		focusOption: function focusOption(op) {
			this.setState({
				focusedOption: op
			});
		},

		focusNextOption: function focusNextOption() {
			this.focusAdjacentOption('next');
		},

		focusPreviousOption: function focusPreviousOption() {
			this.focusAdjacentOption('previous');
		},

		focusAdjacentOption: function focusAdjacentOption(dir) {
			this._focusedOptionReveal = true;
			var ops = this.state.filteredOptions.filter(function (op) {
				return !op.disabled;
			});
			if (!this.state.isOpen) {
				this.setState({
					isOpen: true,
					inputValue: '',
					focusedOption: this.state.focusedOption || ops[dir === 'next' ? 0 : ops.length - 1]
				}, this._bindCloseMenuIfClickedOutside);
				return;
			}
			if (!ops.length) {
				return;
			}
			var focusedIndex = -1;
			for (var i = 0; i < ops.length; i++) {
				if (this.state.focusedOption === ops[i]) {
					focusedIndex = i;
					break;
				}
			}
			var focusedOption = ops[0];
			if (dir === 'next' && focusedIndex > -1 && focusedIndex < ops.length - 1) {
				focusedOption = ops[focusedIndex + 1];
			} else if (dir === 'previous') {
				if (focusedIndex > 0) {
					focusedOption = ops[focusedIndex - 1];
				} else {
					focusedOption = ops[ops.length - 1];
				}
			}
			this.setState({
				focusedOption: focusedOption
			});
		},

		unfocusOption: function unfocusOption(op) {
			if (this.state.focusedOption === op) {
				this.setState({
					focusedOption: null
				});
			}
		},

		renderOptionLabel: function renderOptionLabel(op) {
			return op[this.props.labelKey];
		},

		buildMenu: function buildMenu() {
			var focusedValue = this.state.focusedOption ? this.state.focusedOption[this.props.valueKey] : null;
			var renderLabel = this.props.optionRenderer || this.renderOptionLabel;
			if (this.state.filteredOptions.length > 0) {
				focusedValue = focusedValue == null ? this.state.filteredOptions[0] : focusedValue;
			}
			// Add the current value to the filtered options in last resort
			var options = this.state.filteredOptions;
			if (this.props.allowCreate && this.state.inputValue.trim()) {
				var inputValue = this.state.inputValue;
				options = options.slice();
				var newOption = this.props.newOptionCreator ? this.props.newOptionCreator(inputValue) : {
					value: inputValue,
					label: inputValue,
					create: true
				};
				options.unshift(newOption);
			}
			var ops = Object.keys(options).map(function (key) {
				var op = options[key];
				var isSelected = this.state.value === op[this.props.valueKey];
				var isFocused = focusedValue === op[this.props.valueKey];
				var optionClass = classes({
					'Select-option': true,
					'is-selected': isSelected,
					'is-focused': isFocused,
					'is-disabled': op.disabled
				});
				var ref = isFocused ? 'focused' : null;
				var optionResult = React.createElement(this.props.optionComponent, {
					key: 'option-' + op[this.props.valueKey],
					className: optionClass,
					renderFunc: renderLabel,
					mouseDown: this.selectValue,
					mouseEnter: this.focusOption,
					mouseLeave: this.unfocusOption,
					addLabelText: this.props.addLabelText,
					option: op,
					ref: ref
				});
				return optionResult;
			}, this);

			if (ops.length) {
				return ops;
			} else {
				var noResultsText, promptClass;
				if (this.isLoading()) {
					promptClass = 'Select-searching';
					noResultsText = this.props.searchingText;
				} else if (this.state.inputValue || !this.props.asyncOptions) {
					promptClass = 'Select-noresults';
					noResultsText = this.props.noResultsText;
				} else {
					promptClass = 'Select-search-prompt';
					noResultsText = this.props.searchPromptText;
				}

				return React.createElement(
					'div',
					{ className: promptClass },
					noResultsText
				);
			}
		},

		handleOptionLabelClick: function handleOptionLabelClick(value, event) {
			if (this.props.onOptionLabelClick) {
				this.props.onOptionLabelClick(value, event);
			}
		},

		isLoading: function isLoading() {
			return this.props.isLoading || this.state.isLoading;
		},

		render: function render() {
			var selectClass = classes('Select', this.props.className, {
				'Select--multi': this.props.multi,
				'is-searchable': this.props.searchable,
				'is-open': this.state.isOpen,
				'is-focused': this.state.isFocused,
				'is-loading': this.isLoading(),
				'is-disabled': this.props.disabled,
				'has-value': this.state.value
			});
			var value = [];
			if (this.props.multi) {
				this.state.values.forEach(function (val) {
					var renderLabel = this.props.valueRenderer || this.renderOptionLabel;
					var onOptionLabelClick = this.handleOptionLabelClick.bind(this, val);
					var onRemove = this.removeValue.bind(this, val);
					var valueComponent = React.createElement(this.props.valueComponent, {
						key: val[this.props.valueKey],
						option: val,
						renderer: renderLabel,
						optionLabelClick: !!this.props.onOptionLabelClick,
						onOptionLabelClick: onOptionLabelClick,
						onRemove: onRemove,
						disabled: this.props.disabled
					});
					value.push(valueComponent);
				}, this);
			}

			if (!this.state.inputValue && (!this.props.multi || !value.length)) {
				var val = this.state.values[0] || null;
				if (this.props.valueRenderer && !!this.state.values.length) {
					value.push(React.createElement(Value, {
						key: 0,
						option: val,
						renderer: this.props.valueRenderer,
						disabled: this.props.disabled }));
				} else {
					var singleValueComponent = React.createElement(this.props.singleValueComponent, {
						key: 'placeholder',
						value: val,
						placeholder: this.state.placeholder
					});
					value.push(singleValueComponent);
				}
			}

			// loading spinner
			var loading = this.isLoading() ? React.createElement(
				'span',
				{ className: 'Select-loading-zone', 'aria-hidden': 'true' },
				React.createElement('span', { className: 'Select-loading' })
			) : null;

			// clear "x" button
			var clear = this.props.clearable && this.state.value && !this.props.disabled && !this.isLoading() ? React.createElement(
				'span',
				{ className: 'Select-clear-zone', title: this.props.multi ? this.props.clearAllText : this.props.clearValueText, 'aria-label': this.props.multi ? this.props.clearAllText : this.props.clearValueText, onMouseDown: this.clearValue, onTouchEnd: this.clearValue, onClick: this.clearValue },
				React.createElement('span', { className: 'Select-clear', dangerouslySetInnerHTML: { __html: '&times;' } })
			) : null;

			// indicator arrow
			var arrow = React.createElement(
				'span',
				{ className: 'Select-arrow-zone', onMouseDown: this.handleMouseDownOnArrow },
				React.createElement('span', { className: 'Select-arrow', onMouseDown: this.handleMouseDownOnArrow })
			);

			var menu;
			var menuProps;
			if (this.state.isOpen) {
				menuProps = {
					ref: 'menu',
					className: 'Select-menu',
					onMouseDown: this.handleMouseDownOnMenu
				};
				menu = React.createElement(
					'div',
					{ ref: 'selectMenuContainer', className: 'Select-menu-outer' },
					React.createElement(
						'div',
						menuProps,
						this.buildMenu()
					)
				);
			}

			var input;
			var inputProps = {
				ref: 'input',
				className: 'Select-input ' + (this.props.inputProps.className || ''),
				tabIndex: this.props.tabIndex || 0,
				onFocus: this.handleInputFocus,
				onBlur: this.handleInputBlur
			};
			for (var key in this.props.inputProps) {
				if (this.props.inputProps.hasOwnProperty(key) && key !== 'className') {
					inputProps[key] = this.props.inputProps[key];
				}
			}

			if (!this.props.disabled) {
				if (this.props.searchable) {
					input = React.createElement(Input, _extends({ value: this.state.inputValue, onChange: this.handleInputChange, minWidth: '5' }, inputProps));
				} else {
					input = React.createElement(
						'div',
						inputProps,
						' '
					);
				}
			} else if (!this.props.multi || !this.state.values.length) {
				input = React.createElement(
					'div',
					{ className: 'Select-input' },
					' '
				);
			}

			return React.createElement(
				'div',
				{ ref: 'wrapper', className: selectClass },
				React.createElement('input', { type: 'hidden', ref: 'value', name: this.props.name, value: this.state.value, disabled: this.props.disabled }),
				React.createElement(
					'div',
					{ className: 'Select-control', ref: 'control', onKeyDown: this.handleKeyDown, onMouseDown: this.handleMouseDown, onTouchEnd: this.handleMouseDown },
					value,
					input,
					loading,
					clear,
					arrow
				),
				menu
			);
		}
	});

	module.exports = Select;

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(2);

	var sizerStyle = { position: 'absolute', visibility: 'hidden', height: 0, width: 0, overflow: 'scroll', whiteSpace: 'nowrap' };

	var nextFrame = typeof window !== 'undefined' ? (function () {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
			window.setTimeout(callback, 1000 / 60);
		};
	})() : undefined; // If window is undefined, then we can't define a nextFrame function

	var AutosizeInput = React.createClass({
		displayName: 'AutosizeInput',

		propTypes: {
			value: React.PropTypes.any, // field value
			defaultValue: React.PropTypes.any, // default field value
			onChange: React.PropTypes.func, // onChange handler: function(newValue) {}
			style: React.PropTypes.object, // css styles for the outer element
			className: React.PropTypes.string, // className for the outer element
			minWidth: React.PropTypes.oneOfType([// minimum width for input element
			React.PropTypes.number, React.PropTypes.string]),
			inputStyle: React.PropTypes.object, // css styles for the input element
			inputClassName: React.PropTypes.string // className for the input element
		},
		getDefaultProps: function getDefaultProps() {
			return {
				minWidth: 1
			};
		},
		getInitialState: function getInitialState() {
			return {
				inputWidth: this.props.minWidth
			};
		},
		componentDidMount: function componentDidMount() {
			this.copyInputStyles();
			this.updateInputWidth();
		},
		componentDidUpdate: function componentDidUpdate() {
			this.queueUpdateInputWidth();
		},
		copyInputStyles: function copyInputStyles() {
			if (!this.isMounted() || !window.getComputedStyle) {
				return;
			}
			var inputStyle = window.getComputedStyle(this.refs.input);
			var widthNode = this.refs.sizer;
			widthNode.style.fontSize = inputStyle.fontSize;
			widthNode.style.fontFamily = inputStyle.fontFamily;
			widthNode.style.fontWeight = inputStyle.fontWeight;
			widthNode.style.fontStyle = inputStyle.fontStyle;
			widthNode.style.letterSpacing = inputStyle.letterSpacing;
			if (this.props.placeholder) {
				var placeholderNode = this.refs.placeholderSizer;
				placeholderNode.style.fontSize = inputStyle.fontSize;
				placeholderNode.style.fontFamily = inputStyle.fontFamily;
				placeholderNode.style.fontWeight = inputStyle.fontWeight;
				placeholderNode.style.fontStyle = inputStyle.fontStyle;
				placeholderNode.style.letterSpacing = inputStyle.letterSpacing;
			}
		},
		queueUpdateInputWidth: function queueUpdateInputWidth() {
			nextFrame(this.updateInputWidth);
		},
		updateInputWidth: function updateInputWidth() {
			if (!this.isMounted() || typeof this.refs.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = undefined;
			if (this.props.placeholder) {
				newInputWidth = Math.max(this.refs.sizer.scrollWidth, this.refs.placeholderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.refs.sizer.scrollWidth + 2;
			}
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		},
		getInput: function getInput() {
			return this.refs.input;
		},
		focus: function focus() {
			this.refs.input.focus();
		},
		select: function select() {
			this.refs.input.select();
		},
		render: function render() {
			var escapedValue = (this.props.value || '').replace(/\&/g, '&amp;').replace(/ /g, '&nbsp;').replace(/\</g, '&lt;').replace(/\>/g, '&gt;');
			var wrapperStyle = this.props.style || {};
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';
			var inputStyle = _extends({}, this.props.inputStyle);
			inputStyle.width = this.state.inputWidth;
			inputStyle.boxSizing = 'content-box';
			var placeholder = this.props.placeholder ? React.createElement(
				'div',
				{ ref: 'placeholderSizer', style: sizerStyle },
				this.props.placeholder
			) : null;
			return React.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				React.createElement('input', _extends({}, this.props, { ref: 'input', className: this.props.inputClassName, style: inputStyle })),
				React.createElement('div', { ref: 'sizer', style: sizerStyle, dangerouslySetInnerHTML: { __html: escapedValue } }),
				placeholder
			);
		}
	});

	module.exports = AutosizeInput;

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var classes = __webpack_require__(171);

	var Value = React.createClass({

		displayName: 'Value',

		propTypes: {
			disabled: React.PropTypes.bool, // disabled prop passed to ReactSelect
			onOptionLabelClick: React.PropTypes.func, // method to handle click on value label
			onRemove: React.PropTypes.func, // method to handle remove of that value
			option: React.PropTypes.object.isRequired, // option passed to component
			optionLabelClick: React.PropTypes.bool, // indicates if onOptionLabelClick should be handled
			renderer: React.PropTypes.func // method to render option label passed to ReactSelect
		},

		blockEvent: function blockEvent(event) {
			event.stopPropagation();
		},

		handleOnRemove: function handleOnRemove(event) {
			if (!this.props.disabled) {
				this.props.onRemove(event);
			}
		},

		render: function render() {
			var label = this.props.option.label;
			if (this.props.renderer) {
				label = this.props.renderer(this.props.option);
			}

			if (!this.props.onRemove && !this.props.optionLabelClick) {
				return React.createElement(
					'div',
					{
						className: classes('Select-value', this.props.option.className),
						style: this.props.option.style,
						title: this.props.option.title
					},
					label
				);
			}

			if (this.props.optionLabelClick) {
				label = React.createElement(
					'a',
					{ className: classes('Select-item-label__a', this.props.option.className),
						onMouseDown: this.blockEvent,
						onTouchEnd: this.props.onOptionLabelClick,
						onClick: this.props.onOptionLabelClick,
						style: this.props.option.style,
						title: this.props.option.title },
					label
				);
			}

			return React.createElement(
				'div',
				{ className: classes('Select-item', this.props.option.className),
					style: this.props.option.style,
					title: this.props.option.title },
				React.createElement(
					'span',
					{ className: 'Select-item-icon',
						onMouseDown: this.blockEvent,
						onClick: this.handleOnRemove,
						onTouchEnd: this.handleOnRemove },
					'×'
				),
				React.createElement(
					'span',
					{ className: 'Select-item-label' },
					label
				)
			);
		}

	});

	module.exports = Value;

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var classes = __webpack_require__(171);

	var SingleValue = React.createClass({
		displayName: 'SingleValue',

		propTypes: {
			placeholder: React.PropTypes.string, // this is default value provided by React-Select based component
			value: React.PropTypes.object // selected option
		},
		render: function render() {
			var classNames = classes('Select-placeholder', this.props.value && this.props.value.className);
			return React.createElement(
				'div',
				{
					className: classNames,
					style: this.props.value && this.props.value.style,
					title: this.props.value && this.props.value.title
				},
				this.props.placeholder
			);
		}
	});

	module.exports = SingleValue;

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var classes = __webpack_require__(171);

	var Option = React.createClass({
		displayName: 'Option',

		propTypes: {
			addLabelText: React.PropTypes.string, // string rendered in case of allowCreate option passed to ReactSelect
			className: React.PropTypes.string, // className (based on mouse position)
			mouseDown: React.PropTypes.func, // method to handle click on option element
			mouseEnter: React.PropTypes.func, // method to handle mouseEnter on option element
			mouseLeave: React.PropTypes.func, // method to handle mouseLeave on option element
			option: React.PropTypes.object.isRequired, // object that is base for that option
			renderFunc: React.PropTypes.func // method passed to ReactSelect component to render label text
		},
		blockEvent: function blockEvent(event) {
			event.preventDefault();
			if (event.target.tagName !== 'A' || !('href' in event.target)) {
				return;
			}

			if (event.target.target) {
				window.open(event.target.href);
			} else {
				window.location.href = event.target.href;
			}
		},
		handleMouseDown: function handleMouseDown(e) {
			this.props.mouseDown(this.props.option, e);
		},
		handleMouseEnter: function handleMouseEnter(e) {
			this.props.mouseEnter(this.props.option, e);
		},
		handleMouseLeave: function handleMouseLeave(e) {
			this.props.mouseLeave(this.props.option, e);
		},
		render: function render() {
			var option = this.props.option;
			var label = option.create ? this.props.addLabelText.replace('{label}', option.label) : this.props.renderFunc(option);
			var optionClasses = classes(this.props.className, option.className);

			return option.disabled ? React.createElement(
				'div',
				{ className: optionClasses,
					onMouseDown: this.blockEvent,
					onClick: this.blockEvent },
				label
			) : React.createElement(
				'div',
				{ className: optionClasses,
					style: option.style,
					onMouseDown: this.handleMouseDown,
					onMouseEnter: this.handleMouseEnter,
					onMouseLeave: this.handleMouseLeave,
					onClick: this.handleMouseDown,
					title: option.title },
				label
			);
		}
	});

	module.exports = Option;

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var createFragment = __webpack_require__(176);
	var $ = __webpack_require__(160);
	var pd = __webpack_require__(178).pd;
	var Clipboard = __webpack_require__(179);

	var editor_type = window.location.href.split('/').pop();

	var profile = __webpack_require__(188);
	var ProfileEntry = profile.ProfileEntry;

	var ControlBox = React.createClass({
	    displayName: 'ControlBox',
	    handleSave: function handleSave() {
	        var payload = {
	            type: editor_type
	        };

	        $.ajax({
	            type: "POST",
	            url: "/editors/save",
	            data: payload,
	            dataType: "json",
	            success: function success(result) {
	                console.log(result);
	            }
	        });
	    },
	    render: function render() {
	        return React.createElement(
	            'div',
	            { id: 'control_btn', className: 'row' },
	            React.createElement(
	                'div',
	                { className: 'btn-group', role: 'group', 'aria-label': 'save' },
	                React.createElement(
	                    'button',
	                    { type: 'button', className: 'btn btn-default', onClick: this.handleSave },
	                    'Save'
	                )
	            )
	        );
	    }
	});

	var ProfileBox = React.createClass({
	    displayName: 'ProfileBox',
	    getDefaultProps: function getDefaultProps() {
	        return {
	            type: 'function',
	            profile: {}
	        };
	    },
	    render: function render() {
	        var profileHTML = undefined;
	        var fileName = this.props.profile.name;
	        var defaultCommand = this.props.profile.default_command;

	        if (fileName != '' && fileName != undefined) switch (this.props.type) {
	            case 'function':
	                profileHTML = React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                        'h3',
	                        null,
	                        fileName,
	                        ' Info'
	                    ),
	                    React.createElement(
	                        'dl',
	                        null,
	                        React.createElement(
	                            'dt',
	                            null,
	                            'File Type'
	                        ),
	                        React.createElement(
	                            'dd',
	                            null,
	                            React.createElement(ProfileEntry, { value: this.props.type })
	                        ),
	                        React.createElement(
	                            'dt',
	                            null,
	                            'File Name'
	                        ),
	                        React.createElement(
	                            'dd',
	                            null,
	                            React.createElement(ProfileEntry, { value: fileName })
	                        ),
	                        React.createElement(
	                            'dt',
	                            null,
	                            'Default Command'
	                        ),
	                        React.createElement(
	                            'dd',
	                            null,
	                            React.createElement(ProfileEntry, { value: defaultCommand })
	                        )
	                    )
	                );
	                break;
	            case 'macro':

	                break;
	            case 'testcase':

	                break;
	            default:
	                break;
	        } else profileHTML = React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'p',
	                null,
	                'No file is selected.'
	            )
	        );

	        return profileHTML;
	    }
	});

	var ListGroupBox = React.createClass({
	    displayName: 'ListGroupBox',
	    getDefaultProps: function getDefaultProps() {
	        return {
	            lists: [],
	            name: ''
	        };
	    },
	    render: function render() {
	        var children = [];
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = this.props.lists[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var item = _step.value;

	                children.push(createFragment({
	                    name: item.name
	                }));
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }

	        var list = React.Children.map(children, function (child) {
	            return React.createElement(
	                'div',
	                null,
	                child
	            );
	        });

	        return React.createElement(
	            'div',
	            { id: 'editor_list' },
	            list
	        );
	    }
	});

	var EditorBox = React.createClass({
	    displayName: 'EditorBox',
	    getDefaultProps: function getDefaultProps() {
	        return {
	            type: 'function',
	            fileObj: {}
	        };
	    },
	    render: function render() {
	        var editorHTML = undefined;
	        var profile = this.props.fileObj.profile;
	        var list = this.props.fileObj.list;

	        switch (this.props.type) {
	            case 'function':
	                editorHTML = React.createElement(
	                    'div',
	                    { className: 'col-xs-3' },
	                    React.createElement(ControlBox, null),
	                    React.createElement(ProfileBox, { eidtorType: 'function', profile: profile }),
	                    React.createElement(ListGroupBox, { lists: list })
	                );
	                break;
	            case 'macro':
	                break;
	            case 'testcase':
	                break;
	            default:
	                break;
	        }

	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'div',
	                { id: 'diaplay_file', className: 'row' },
	                editorHTML,
	                React.createElement(
	                    'div',
	                    { className: 'col-xs-9' },
	                    React.createElement('textarea', { className: 'form-control', rows: '48' })
	                )
	            )
	        );
	    }
	});

	module.exports = EditorBox;

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(177).create;

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactFragment
	 */

	'use strict';

	var ReactChildren = __webpack_require__(111);
	var ReactElement = __webpack_require__(43);

	var emptyFunction = __webpack_require__(16);
	var invariant = __webpack_require__(14);
	var warning = __webpack_require__(26);

	/**
	 * We used to allow keyed objects to serve as a collection of ReactElements,
	 * or nested sets. This allowed us a way to explicitly key a set a fragment of
	 * components. This is now being replaced with an opaque data structure.
	 * The upgrade path is to call React.addons.createFragment({ key: value }) to
	 * create a keyed fragment. The resulting data structure is an array.
	 */

	var numericPropertyRegex = /^\d+$/;

	var warnedAboutNumeric = false;

	var ReactFragment = {
	  // Wrap a keyed object in an opaque proxy that warns you if you access any
	  // of its properties.
	  create: function (object) {
	    if (typeof object !== 'object' || !object || Array.isArray(object)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment only accepts a single object. Got: %s', object) : undefined;
	      return object;
	    }
	    if (ReactElement.isValidElement(object)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment does not accept a ReactElement ' + 'without a wrapper object.') : undefined;
	      return object;
	    }

	    !(object.nodeType !== 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.addons.createFragment(...): Encountered an invalid child; DOM ' + 'elements are not valid children of React components.') : invariant(false) : undefined;

	    var result = [];

	    for (var key in object) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (!warnedAboutNumeric && numericPropertyRegex.test(key)) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment(...): Child objects should have ' + 'non-numeric keys so ordering is preserved.') : undefined;
	          warnedAboutNumeric = true;
	        }
	      }
	      ReactChildren.mapIntoWithKeyPrefixInternal(object[key], result, key, emptyFunction.thatReturnsArgument);
	    }

	    return result;
	  }
	};

	module.exports = ReactFragment;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },

/***/ 178:
/***/ function(module, exports) {

	/**
	* pretty-data - nodejs plugin to pretty-print or minify data in XML, JSON and CSS formats.
	*  
	* Version - 0.40.0
	* Copyright (c) 2012 Vadim Kiryukhin
	* vkiryukhin @ gmail.com
	* http://www.eslinstructor.net/pretty-data/
	* 
	* Dual licensed under the MIT and GPL licenses:
	*   http://www.opensource.org/licenses/mit-license.php
	*   http://www.gnu.org/licenses/gpl.html
	*
	*	pd.xml(data ) - pretty print XML;
	*	pd.json(data) - pretty print JSON;
	*	pd.css(data ) - pretty print CSS;
	*	pd.sql(data)  - pretty print SQL;
	*
	*	pd.xmlmin(data [, preserveComments] ) - minify XML; 
	*	pd.jsonmin(data)                      - minify JSON; 
	*	pd.cssmin(data [, preserveComments] ) - minify CSS; 
	*	pd.sqlmin(data)                       - minify SQL; 
	*
	* PARAMETERS:
	*
	*	@data  			- String; XML, JSON, CSS or SQL text to beautify;
	* 	@preserveComments	- Bool (optional, used in minxml and mincss only); 
	*				  Set this flag to true to prevent removing comments from @text; 
	*	@Return 		- String;
	*	
	* USAGE:
	*	
	*	var pd  = require('pretty-data').pd;
	*
	*	var xml_pp   = pd.xml(xml_text);
	*	var xml_min  = pd.xmlmin(xml_text [,true]);
	*	var json_pp  = pd.json(json_text);
	*	var json_min = pd.jsonmin(json_text);
	*	var css_pp   = pd.css(css_text);
	*	var css_min  = pd.cssmin(css_text [, true]);
	*	var sql_pp   = pd.sql(sql_text);
	*	var sql_min  = pd.sqlmin(sql_text);
	*
	* TEST:
	*	comp-name:pretty-data$ node ./test/test_xml
	*	comp-name:pretty-data$ node ./test/test_json
	*	comp-name:pretty-data$ node ./test/test_css
	*	comp-name:pretty-data$ node ./test/test_sql
	*/


	function pp() {
		this.shift = ['\n']; // array of shifts
		this.step = '  ', // 2 spaces
			maxdeep = 100, // nesting level
			ix = 0;

		// initialize array with shifts //
		for(ix=0;ix<maxdeep;ix++){
			this.shift.push(this.shift[ix]+this.step); 
		}

	};	
		
	// ----------------------- XML section ----------------------------------------------------

	pp.prototype.xml = function(text) {

		var ar = text.replace(/>\s{0,}</g,"><")
					 .replace(/</g,"~::~<")
					 .replace(/xmlns\:/g,"~::~xmlns:")
					 .replace(/xmlns\=/g,"~::~xmlns=")
					 .split('~::~'),
			len = ar.length,
			inComment = false,
			deep = 0,
			str = '',
			ix = 0;

			for(ix=0;ix<len;ix++) {
				// start comment or <![CDATA[...]]> or <!DOCTYPE //
				if(ar[ix].search(/<!/) > -1) { 
					str += this.shift[deep]+ar[ix];
					inComment = true; 
					// end comment  or <![CDATA[...]]> //
					if(ar[ix].search(/-->/) > -1 || ar[ix].search(/\]>/) > -1 || ar[ix].search(/!DOCTYPE/) > -1 ) { 
						inComment = false; 
					}
				} else 
				// end comment  or <![CDATA[...]]> //
				if(ar[ix].search(/-->/) > -1 || ar[ix].search(/\]>/) > -1) { 
					str += ar[ix];
					inComment = false; 
				} else 
				// <elm></elm> //
				if( /^<\w/.exec(ar[ix-1]) && /^<\/\w/.exec(ar[ix]) &&
					/^<[\w:\-\.\,]+/.exec(ar[ix-1]) == /^<\/[\w:\-\.\,]+/.exec(ar[ix])[0].replace('/','')) { 
					str += ar[ix];
					if(!inComment) deep--;
				} else
				 // <elm> //
				if(ar[ix].search(/<\w/) > -1 && ar[ix].search(/<\//) == -1 && ar[ix].search(/\/>/) == -1 ) {
					str = !inComment ? str += this.shift[deep++]+ar[ix] : str += ar[ix];
				} else 
				 // <elm>...</elm> //
				if(ar[ix].search(/<\w/) > -1 && ar[ix].search(/<\//) > -1) {
					str = !inComment ? str += this.shift[deep]+ar[ix] : str += ar[ix];
				} else 
				// </elm> //
				if(ar[ix].search(/<\//) > -1) { 
					str = !inComment ? str += this.shift[--deep]+ar[ix] : str += ar[ix];
				} else 
				// <elm/> //
				if(ar[ix].search(/\/>/) > -1 ) { 
					str = !inComment ? str += this.shift[deep]+ar[ix] : str += ar[ix];
				} else 
				// <? xml ... ?> //
				if(ar[ix].search(/<\?/) > -1) { 
					str += this.shift[deep]+ar[ix];
				} else 
				// xmlns //
				if( ar[ix].search(/xmlns\:/) > -1  || ar[ix].search(/xmlns\=/) > -1) { 
					str += this.shift[deep]+ar[ix];
				} 
				
				else {
					str += ar[ix];
				}
			}
			
		return  (str[0] == '\n') ? str.slice(1) : str;
	}

	// ----------------------- JSON section ----------------------------------------------------

	pp.prototype.json = function(text) {

		if ( typeof text === "string" ) {
			return JSON.stringify(JSON.parse(text), null, this.step);
		}
		if ( typeof text === "object" ) {
			return JSON.stringify(text, null, this.step);
		}
		return null;
	}

	// ----------------------- CSS section ----------------------------------------------------

	pp.prototype.css = function(text) {

		var ar = text.replace(/\s{1,}/g,' ')
					.replace(/\{/g,"{~::~")
					.replace(/\}/g,"~::~}~::~")
					.replace(/\;/g,";~::~")
					.replace(/\/\*/g,"~::~/*")
					.replace(/\*\//g,"*/~::~")
					.replace(/~::~\s{0,}~::~/g,"~::~")
					.split('~::~'),
			len = ar.length,
			deep = 0,
			str = '',
			ix = 0;
			
			for(ix=0;ix<len;ix++) {

				if( /\{/.exec(ar[ix]))  { 
					str += this.shift[deep++]+ar[ix];
				} else 
				if( /\}/.exec(ar[ix]))  { 
					str += this.shift[--deep]+ar[ix];
				} else
				if( /\*\\/.exec(ar[ix]))  { 
					str += this.shift[deep]+ar[ix];
				}
				else {
					str += this.shift[deep]+ar[ix];
				}
			}
			return str.replace(/^\n{1,}/,'');
	}

	// ----------------------- SQL section ----------------------------------------------------

	function isSubquery(str, parenthesisLevel) {
	  return  parenthesisLevel - (str.replace(/\(/g,'').length - str.replace(/\)/g,'').length )
	}

	function split_sql(str, tab) {

	    return str.replace(/\s{1,}/g," ")

	        .replace(/ AND /ig,"~::~"+tab+tab+"AND ")
	        .replace(/ BETWEEN /ig,"~::~"+tab+"BETWEEN ")
	        .replace(/ CASE /ig,"~::~"+tab+"CASE ")
	        .replace(/ ELSE /ig,"~::~"+tab+"ELSE ")
	        .replace(/ END /ig,"~::~"+tab+"END ")
	        .replace(/ FROM /ig,"~::~FROM ")
	        .replace(/ GROUP\s{1,}BY/ig,"~::~GROUP BY ")
	        .replace(/ HAVING /ig,"~::~HAVING ")
	        //.replace(/ IN /ig,"~::~"+tab+"IN ")
	        .replace(/ IN /ig," IN ")
	        .replace(/ JOIN /ig,"~::~JOIN ")
	        .replace(/ CROSS~::~{1,}JOIN /ig,"~::~CROSS JOIN ")
	        .replace(/ INNER~::~{1,}JOIN /ig,"~::~INNER JOIN ")
	        .replace(/ LEFT~::~{1,}JOIN /ig,"~::~LEFT JOIN ")
	        .replace(/ RIGHT~::~{1,}JOIN /ig,"~::~RIGHT JOIN ")
	        .replace(/ ON /ig,"~::~"+tab+"ON ")
	        .replace(/ OR /ig,"~::~"+tab+tab+"OR ")
	        .replace(/ ORDER\s{1,}BY/ig,"~::~ORDER BY ")
	        .replace(/ OVER /ig,"~::~"+tab+"OVER ")
	        .replace(/\(\s{0,}SELECT /ig,"~::~(SELECT ")
	        .replace(/\)\s{0,}SELECT /ig,")~::~SELECT ")
	        .replace(/ THEN /ig," THEN~::~"+tab+"")
	        .replace(/ UNION /ig,"~::~UNION~::~")
	        .replace(/ USING /ig,"~::~USING ")
	        .replace(/ WHEN /ig,"~::~"+tab+"WHEN ")
	        .replace(/ WHERE /ig,"~::~WHERE ")
	        .replace(/ WITH /ig,"~::~WITH ")
	        //.replace(/\,\s{0,}\(/ig,",~::~( ")
	        //.replace(/\,/ig,",~::~"+tab+tab+"")
	        .replace(/ ALL /ig," ALL ")
	        .replace(/ AS /ig," AS ")
	        .replace(/ ASC /ig," ASC ") 
	        .replace(/ DESC /ig," DESC ") 
	        .replace(/ DISTINCT /ig," DISTINCT ")
	        .replace(/ EXISTS /ig," EXISTS ")
	        .replace(/ NOT /ig," NOT ")
	        .replace(/ NULL /ig," NULL ")
	        .replace(/ LIKE /ig," LIKE ")
	        .replace(/\s{0,}SELECT /ig,"SELECT ")
	        .replace(/~::~{1,}/g,"~::~")
	        .split('~::~');
	}

	pp.prototype.sql = function(text) {

	    var ar_by_quote = text.replace(/\s{1,}/g," ")
	                        .replace(/\'/ig,"~::~\'")
	                        .split('~::~'),
	        len = ar_by_quote.length,
	        ar = [],
	        deep = 0,
	        tab = this.step,//+this.step,
	        inComment = true,
	        inQuote = false,
	        parenthesisLevel = 0,
	        str = '',
	        ix = 0;

	    for(ix=0;ix<len;ix++) {

	        if(ix%2) {
	            ar = ar.concat(ar_by_quote[ix]);
	        } else {
	            ar = ar.concat(split_sql(ar_by_quote[ix], tab) );
	        }
	    }

	    len = ar.length;
	    for(ix=0;ix<len;ix++) {

	        parenthesisLevel = isSubquery(ar[ix], parenthesisLevel);

	        if( /\s{0,}\s{0,}SELECT\s{0,}/.exec(ar[ix]))  { 
	            ar[ix] = ar[ix].replace(/\,/g,",\n"+tab+tab+"")
	        } 

	        if( /\s{0,}\(\s{0,}SELECT\s{0,}/.exec(ar[ix]))  { 
	            deep++;
	            str += this.shift[deep]+ar[ix];
	        } else 
	        if( /\'/.exec(ar[ix]) )  { 
	            if(parenthesisLevel<1 && deep) {
	                deep--;
	            }
	            str += ar[ix];
	        }
	        else  { 
	            str += this.shift[deep]+ar[ix];
	            if(parenthesisLevel<1 && deep) {
	                deep--;
	            }
	        } 
	    }

	    str = str.replace(/^\n{1,}/,'').replace(/\n{1,}/g,"\n");
	    return str;
	}

	// ----------------------- min section ----------------------------------------------------

	pp.prototype.xmlmin = function(text, preserveComments) {

		var str = preserveComments ? text
					   : text.replace(/\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g,"");
		return  str.replace(/>\s{0,}</g,"><"); 
	}

	pp.prototype.jsonmin = function(text) {
									  
	    return  text.replace(/\s{0,}\{\s{0,}/g,"{")
	                .replace(/\s{0,}\[$/g,"[")
	                .replace(/\[\s{0,}/g,"[")
	                .replace(/:\s{0,}\[/g,':[')
	                .replace(/\s{0,}\}\s{0,}/g,"}")
	                .replace(/\s{0,}\]\s{0,}/g,"]")
	                .replace(/\"\s{0,}\,/g,'",')
	                .replace(/\,\s{0,}\"/g,',"')
	                .replace(/\"\s{0,}:/g,'":')
	                .replace(/:\s{0,}\"/g,':"')
	                .replace(/:\s{0,}\[/g,':[')
	                .replace(/\,\s{0,}\[/g,',[')
	                .replace(/\,\s{2,}/g,', ')
	                .replace(/\]\s{0,},\s{0,}\[/g,'],[');   
	}

	pp.prototype.cssmin = function(text, preserveComments) {
		
		var str = preserveComments ? text
					   : text.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g,"") ;
		return str.replace(/\s{1,}/g,' ')
				  .replace(/\{\s{1,}/g,"{")
				  .replace(/\}\s{1,}/g,"}")
				  .replace(/\;\s{1,}/g,";")
				  .replace(/\/\*\s{1,}/g,"/*")
				  .replace(/\*\/\s{1,}/g,"*/");
	}	

	pp.prototype.sqlmin = function(text) {
	    return text.replace(/\s{1,}/g," ").replace(/\s{1,}\(/,"(").replace(/\s{1,}\)/,")");
	}

	// --------------------------------------------------------------------------------------------

	exports.pd= new pp;	












/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _clipboardAction = __webpack_require__(180);

	var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

	var _tinyEmitter = __webpack_require__(182);

	var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

	var _goodListener = __webpack_require__(183);

	var _goodListener2 = _interopRequireDefault(_goodListener);

	/**
	 * Base class which takes one or more elements, adds event listeners to them,
	 * and instantiates a new `ClipboardAction` on each click.
	 */

	var Clipboard = (function (_Emitter) {
	    _inherits(Clipboard, _Emitter);

	    /**
	     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
	     * @param {Object} options
	     */

	    function Clipboard(trigger, options) {
	        _classCallCheck(this, Clipboard);

	        _Emitter.call(this);

	        this.resolveOptions(options);
	        this.listenClick(trigger);
	    }

	    /**
	     * Helper function to retrieve attribute value.
	     * @param {String} suffix
	     * @param {Element} element
	     */

	    /**
	     * Defines if attributes would be resolved using internal setter functions
	     * or custom functions that were passed in the constructor.
	     * @param {Object} options
	     */

	    Clipboard.prototype.resolveOptions = function resolveOptions() {
	        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
	        this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
	        this.text = typeof options.text === 'function' ? options.text : this.defaultText;
	    };

	    /**
	     * Adds a click event listener to the passed trigger.
	     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
	     */

	    Clipboard.prototype.listenClick = function listenClick(trigger) {
	        var _this = this;

	        this.listener = _goodListener2['default'](trigger, 'click', function (e) {
	            return _this.onClick(e);
	        });
	    };

	    /**
	     * Defines a new `ClipboardAction` on each click event.
	     * @param {Event} e
	     */

	    Clipboard.prototype.onClick = function onClick(e) {
	        var trigger = e.delegateTarget || e.currentTarget;

	        if (this.clipboardAction) {
	            this.clipboardAction = null;
	        }

	        this.clipboardAction = new _clipboardAction2['default']({
	            action: this.action(trigger),
	            target: this.target(trigger),
	            text: this.text(trigger),
	            trigger: trigger,
	            emitter: this
	        });
	    };

	    /**
	     * Default `action` lookup function.
	     * @param {Element} trigger
	     */

	    Clipboard.prototype.defaultAction = function defaultAction(trigger) {
	        return getAttributeValue('action', trigger);
	    };

	    /**
	     * Default `target` lookup function.
	     * @param {Element} trigger
	     */

	    Clipboard.prototype.defaultTarget = function defaultTarget(trigger) {
	        var selector = getAttributeValue('target', trigger);

	        if (selector) {
	            return document.querySelector(selector);
	        }
	    };

	    /**
	     * Default `text` lookup function.
	     * @param {Element} trigger
	     */

	    Clipboard.prototype.defaultText = function defaultText(trigger) {
	        return getAttributeValue('text', trigger);
	    };

	    /**
	     * Destroy lifecycle.
	     */

	    Clipboard.prototype.destroy = function destroy() {
	        this.listener.destroy();

	        if (this.clipboardAction) {
	            this.clipboardAction.destroy();
	            this.clipboardAction = null;
	        }
	    };

	    return Clipboard;
	})(_tinyEmitter2['default']);

	function getAttributeValue(suffix, element) {
	    var attribute = 'data-clipboard-' + suffix;

	    if (!element.hasAttribute(attribute)) {
	        return;
	    }

	    return element.getAttribute(attribute);
	}

	exports['default'] = Clipboard;
	module.exports = exports['default'];

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _select = __webpack_require__(181);

	var _select2 = _interopRequireDefault(_select);

	/**
	 * Inner class which performs selection from either `text` or `target`
	 * properties and then executes copy or cut operations.
	 */

	var ClipboardAction = (function () {
	    /**
	     * @param {Object} options
	     */

	    function ClipboardAction(options) {
	        _classCallCheck(this, ClipboardAction);

	        this.resolveOptions(options);
	        this.initSelection();
	    }

	    /**
	     * Defines base properties passed from constructor.
	     * @param {Object} options
	     */

	    ClipboardAction.prototype.resolveOptions = function resolveOptions() {
	        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        this.action = options.action;
	        this.emitter = options.emitter;
	        this.target = options.target;
	        this.text = options.text;
	        this.trigger = options.trigger;

	        this.selectedText = '';
	    };

	    /**
	     * Decides which selection strategy is going to be applied based
	     * on the existence of `text` and `target` properties.
	     */

	    ClipboardAction.prototype.initSelection = function initSelection() {
	        if (this.text && this.target) {
	            throw new Error('Multiple attributes declared, use either "target" or "text"');
	        } else if (this.text) {
	            this.selectFake();
	        } else if (this.target) {
	            this.selectTarget();
	        } else {
	            throw new Error('Missing required attributes, use either "target" or "text"');
	        }
	    };

	    /**
	     * Creates a fake textarea element, sets its value from `text` property,
	     * and makes a selection on it.
	     */

	    ClipboardAction.prototype.selectFake = function selectFake() {
	        var _this = this;

	        this.removeFake();

	        this.fakeHandler = document.body.addEventListener('click', function () {
	            return _this.removeFake();
	        });

	        this.fakeElem = document.createElement('textarea');
	        this.fakeElem.style.position = 'absolute';
	        this.fakeElem.style.left = '-9999px';
	        this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + 'px';
	        this.fakeElem.setAttribute('readonly', '');
	        this.fakeElem.value = this.text;

	        document.body.appendChild(this.fakeElem);

	        this.selectedText = _select2['default'](this.fakeElem);
	        this.copyText();
	    };

	    /**
	     * Only removes the fake element after another click event, that way
	     * a user can hit `Ctrl+C` to copy because selection still exists.
	     */

	    ClipboardAction.prototype.removeFake = function removeFake() {
	        if (this.fakeHandler) {
	            document.body.removeEventListener('click');
	            this.fakeHandler = null;
	        }

	        if (this.fakeElem) {
	            document.body.removeChild(this.fakeElem);
	            this.fakeElem = null;
	        }
	    };

	    /**
	     * Selects the content from element passed on `target` property.
	     */

	    ClipboardAction.prototype.selectTarget = function selectTarget() {
	        this.selectedText = _select2['default'](this.target);
	        this.copyText();
	    };

	    /**
	     * Executes the copy operation based on the current selection.
	     */

	    ClipboardAction.prototype.copyText = function copyText() {
	        var succeeded = undefined;

	        try {
	            succeeded = document.execCommand(this.action);
	        } catch (err) {
	            succeeded = false;
	        }

	        this.handleResult(succeeded);
	    };

	    /**
	     * Fires an event based on the copy operation result.
	     * @param {Boolean} succeeded
	     */

	    ClipboardAction.prototype.handleResult = function handleResult(succeeded) {
	        if (succeeded) {
	            this.emitter.emit('success', {
	                action: this.action,
	                text: this.selectedText,
	                trigger: this.trigger,
	                clearSelection: this.clearSelection.bind(this)
	            });
	        } else {
	            this.emitter.emit('error', {
	                action: this.action,
	                trigger: this.trigger,
	                clearSelection: this.clearSelection.bind(this)
	            });
	        }
	    };

	    /**
	     * Removes current selection and focus from `target` element.
	     */

	    ClipboardAction.prototype.clearSelection = function clearSelection() {
	        if (this.target) {
	            this.target.blur();
	        }

	        window.getSelection().removeAllRanges();
	    };

	    /**
	     * Sets the `action` to be performed which can be either 'copy' or 'cut'.
	     * @param {String} action
	     */

	    /**
	     * Destroy lifecycle.
	     */

	    ClipboardAction.prototype.destroy = function destroy() {
	        this.removeFake();
	    };

	    _createClass(ClipboardAction, [{
	        key: 'action',
	        set: function set() {
	            var action = arguments.length <= 0 || arguments[0] === undefined ? 'copy' : arguments[0];

	            this._action = action;

	            if (this._action !== 'copy' && this._action !== 'cut') {
	                throw new Error('Invalid "action" value, use either "copy" or "cut"');
	            }
	        },

	        /**
	         * Gets the `action` property.
	         * @return {String}
	         */
	        get: function get() {
	            return this._action;
	        }

	        /**
	         * Sets the `target` property using an element
	         * that will be have its content copied.
	         * @param {Element} target
	         */
	    }, {
	        key: 'target',
	        set: function set(target) {
	            if (target !== undefined) {
	                if (target && typeof target === 'object' && target.nodeType === 1) {
	                    this._target = target;
	                } else {
	                    throw new Error('Invalid "target" value, use a valid Element');
	                }
	            }
	        },

	        /**
	         * Gets the `target` property.
	         * @return {String|HTMLElement}
	         */
	        get: function get() {
	            return this._target;
	        }
	    }]);

	    return ClipboardAction;
	})();

	exports['default'] = ClipboardAction;
	module.exports = exports['default'];

/***/ },

/***/ 181:
/***/ function(module, exports) {

	function select(element) {
	    var selectedText;

	    if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
	        element.focus();
	        element.setSelectionRange(0, element.value.length);

	        selectedText = element.value;
	    }
	    else {
	        if (element.hasAttribute('contenteditable')) {
	            element.focus();
	        }

	        var selection = window.getSelection();
	        var range = document.createRange();

	        range.selectNodeContents(element);
	        selection.removeAllRanges();
	        selection.addRange(range);

	        selectedText = selection.toString();
	    }

	    return selectedText;
	}

	module.exports = select;


/***/ },

/***/ 182:
/***/ function(module, exports) {

	function E () {
		// Keep this empty so it's easier to inherit from
	  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
	}

	E.prototype = {
		on: function (name, callback, ctx) {
	    var e = this.e || (this.e = {});

	    (e[name] || (e[name] = [])).push({
	      fn: callback,
	      ctx: ctx
	    });

	    return this;
	  },

	  once: function (name, callback, ctx) {
	    var self = this;
	    function listener () {
	      self.off(name, listener);
	      callback.apply(ctx, arguments);
	    };

	    listener._ = callback
	    return this.on(name, listener, ctx);
	  },

	  emit: function (name) {
	    var data = [].slice.call(arguments, 1);
	    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
	    var i = 0;
	    var len = evtArr.length;

	    for (i; i < len; i++) {
	      evtArr[i].fn.apply(evtArr[i].ctx, data);
	    }

	    return this;
	  },

	  off: function (name, callback) {
	    var e = this.e || (this.e = {});
	    var evts = e[name];
	    var liveEvents = [];

	    if (evts && callback) {
	      for (var i = 0, len = evts.length; i < len; i++) {
	        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
	          liveEvents.push(evts[i]);
	      }
	    }

	    // Remove event from queue to prevent memory leak
	    // Suggested by https://github.com/lazd
	    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

	    (liveEvents.length)
	      ? e[name] = liveEvents
	      : delete e[name];

	    return this;
	  }
	};

	module.exports = E;


/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	var is = __webpack_require__(184);
	var delegate = __webpack_require__(185);

	/**
	 * Validates all params and calls the right
	 * listener function based on its target type.
	 *
	 * @param {String|HTMLElement|HTMLCollection|NodeList} target
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listen(target, type, callback) {
	    if (!target && !type && !callback) {
	        throw new Error('Missing required arguments');
	    }

	    if (!is.string(type)) {
	        throw new TypeError('Second argument must be a String');
	    }

	    if (!is.function(callback)) {
	        throw new TypeError('Third argument must be a Function');
	    }

	    if (is.node(target)) {
	        return listenNode(target, type, callback);
	    }
	    else if (is.nodeList(target)) {
	        return listenNodeList(target, type, callback);
	    }
	    else if (is.string(target)) {
	        return listenSelector(target, type, callback);
	    }
	    else {
	        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
	    }
	}

	/**
	 * Adds an event listener to a HTML element
	 * and returns a remove listener function.
	 *
	 * @param {HTMLElement} node
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenNode(node, type, callback) {
	    node.addEventListener(type, callback);

	    return {
	        destroy: function() {
	            node.removeEventListener(type, callback);
	        }
	    }
	}

	/**
	 * Add an event listener to a list of HTML elements
	 * and returns a remove listener function.
	 *
	 * @param {NodeList|HTMLCollection} nodeList
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenNodeList(nodeList, type, callback) {
	    Array.prototype.forEach.call(nodeList, function(node) {
	        node.addEventListener(type, callback);
	    });

	    return {
	        destroy: function() {
	            Array.prototype.forEach.call(nodeList, function(node) {
	                node.removeEventListener(type, callback);
	            });
	        }
	    }
	}

	/**
	 * Add an event listener to a selector
	 * and returns a remove listener function.
	 *
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenSelector(selector, type, callback) {
	    return delegate(document.body, selector, type, callback);
	}

	module.exports = listen;


/***/ },

/***/ 184:
/***/ function(module, exports) {

	/**
	 * Check if argument is a HTML element.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.node = function(value) {
	    return value !== undefined
	        && value instanceof HTMLElement
	        && value.nodeType === 1;
	};

	/**
	 * Check if argument is a list of HTML elements.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.nodeList = function(value) {
	    var type = Object.prototype.toString.call(value);

	    return value !== undefined
	        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
	        && ('length' in value)
	        && (value.length === 0 || exports.node(value[0]));
	};

	/**
	 * Check if argument is a string.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.string = function(value) {
	    return typeof value === 'string'
	        || value instanceof String;
	};

	/**
	 * Check if argument is a function.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.function = function(value) {
	    var type = Object.prototype.toString.call(value);

	    return type === '[object Function]';
	};


/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	var closest = __webpack_require__(186);

	/**
	 * Delegates event to a selector.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function delegate(element, selector, type, callback) {
	    var listenerFn = listener.apply(this, arguments);

	    element.addEventListener(type, listenerFn);

	    return {
	        destroy: function() {
	            element.removeEventListener(type, listenerFn);
	        }
	    }
	}

	/**
	 * Finds closest match and invokes callback.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Function}
	 */
	function listener(element, selector, type, callback) {
	    return function(e) {
	        e.delegateTarget = closest(e.target, selector, true);

	        if (e.delegateTarget) {
	            callback.call(element, e);
	        }
	    }
	}

	module.exports = delegate;


/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	var matches = __webpack_require__(187)

	module.exports = function (element, selector, checkYoSelf) {
	  var parent = checkYoSelf ? element : element.parentNode

	  while (parent && parent !== document) {
	    if (matches(parent, selector)) return parent;
	    parent = parent.parentNode
	  }
	}


/***/ },

/***/ 187:
/***/ function(module, exports) {

	
	/**
	 * Element prototype.
	 */

	var proto = Element.prototype;

	/**
	 * Vendor function.
	 */

	var vendor = proto.matchesSelector
	  || proto.webkitMatchesSelector
	  || proto.mozMatchesSelector
	  || proto.msMatchesSelector
	  || proto.oMatchesSelector;

	/**
	 * Expose `match()`.
	 */

	module.exports = match;

	/**
	 * Match `el` to `selector`.
	 *
	 * @param {Element} el
	 * @param {String} selector
	 * @return {Boolean}
	 * @api public
	 */

	function match(el, selector) {
	  if (vendor) return vendor.call(el, selector);
	  var nodes = el.parentNode.querySelectorAll(selector);
	  for (var i = 0; i < nodes.length; ++i) {
	    if (nodes[i] == el) return true;
	  }
	  return false;
	}

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var $ = __webpack_require__(160);
	var Clipboard = __webpack_require__(179);

	exports.ProfileEntry = React.createClass({
	    displayName: 'ProfileEntry',

	    clipboard: {},

	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'input-group' },
	            React.createElement(
	                'p',
	                { ref: 'target' },
	                this.props.value
	            ),
	            React.createElement(
	                'span',
	                { className: 'input-group-btn' },
	                React.createElement(
	                    'button',
	                    { className: 'btn btn-default', ref: 'trigger', type: 'button' },
	                    'Copy'
	                )
	            )
	        );
	    },
	    componentDidMount: function componentDidMount() {
	        var _this = this;

	        this.clipboard = new Clipboard(this.refs.trigger, {
	            target: function target() {
	                return _this.refs.target;
	            }
	        });

	        this.clipboard.on('success', function (e) {
	            console.log('Process Copy command successfully. The cotent is ' + e.text + '.');
	        });
	        this.clipboard.on('error', function (e) {
	            console.log('Fail to process Copy command.');
	        });
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        this.clipboard.destroy();
	    }
	});

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(190);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(164)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./editors.css", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./editors.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(163)();
	// imports


	// module
	exports.push([module.id, "html, body {\r\n    margin: 0;\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    font: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif;\r\n}\r\n\r\na {\r\n    color: #00B7FF;\r\n}\r\n\r\n.editor-container {\r\n    height: 100%;\r\n}\r\n\r\ndiv.editor-toolbar {\r\n    background-color: #565151;\r\n    height: 100%;\r\n}\r\n\r\ndiv.editor-toolbar .row {\r\n    height: 100%;\r\n}\r\n\r\ndiv.editor-panel {\r\n    height: 100%;\r\n}\r\n\r\n#search {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.break-line > a {\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n#diaplay_file {\r\n    margin-top: 5px;\r\n}\r\n\r\n#editor_list > span {\r\n    display: block;\r\n    width: 100%;\r\n}", ""]);

	// exports


/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(192);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(164)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./react-select.min.css", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./react-select.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(163)();
	// imports


	// module
	exports.push([module.id, ".Select,.Select-control{position:relative}.Select,.Select div,.Select input,.Select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.Select.is-disabled>.Select-control{background-color:#f6f6f6}.Select.is-disabled .Select-arrow-zone{cursor:default;pointer-events:none}.Select-control{background-color:#fff;border-radius:4px;border:1px solid #ccc;color:#333;cursor:default;display:table;height:36px;outline:0;overflow:hidden;width:100%}.is-searchable.is-focused:not(.is-open)>.Select-control,.is-searchable.is-open>.Select-control{cursor:text}.Select-placeholder,.Select-value{left:0;position:absolute;top:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select-control:hover{box-shadow:0 1px 0 rgba(0,0,0,.06)}.is-open>.Select-control{border-bottom-right-radius:0;border-bottom-left-radius:0;background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.is-open>.Select-control>.Select-arrow{border-color:transparent transparent #999;border-width:0 5px 5px}.is-focused:not(.is-open)>.Select-control{border-color:#08c #0099e6 #0099e6;box-shadow:inset 0 1px 2px rgba(0,0,0,.1),0 0 5px -1px rgba(0,136,204,.5)}.Select-placeholder{bottom:0;color:#aaa;line-height:34px;padding-left:10px;padding-right:10px;right:0}.has-value>.Select-control>.Select-placeholder{color:#333}.Select-value{color:#aaa;padding:8px 52px 8px 10px;right:-15px}.Select-arrow-zone,.Select-clear-zone,.Select-loading,.Select-loading-zone{position:relative;vertical-align:middle}.has-value>.Select-control>.Select-value{color:#333}.Select-input{height:34px;padding-left:10px;padding-right:10px;vertical-align:middle}.Select-input>input{background:none;border:0;box-shadow:none;cursor:default;display:inline-block;font-family:inherit;font-size:inherit;height:34px;margin:0;outline:0;padding:0;-webkit-appearance:none}.is-focused .Select-input>input{cursor:text}.Select-control:not(.is-searchable)>.Select-input{outline:0}.Select-loading-zone{cursor:pointer;display:table-cell;text-align:center;width:16px}.Select-loading{-webkit-animation:Select-animation-spin .4s infinite linear;-o-animation:Select-animation-spin .4s infinite linear;animation:Select-animation-spin .4s infinite linear;width:16px;height:16px;box-sizing:border-box;border-radius:50%;border:2px solid #ccc;border-right-color:#333;display:inline-block}.Select-clear-zone{-webkit-animation:Select-animation-fadeIn .2s;-o-animation:Select-animation-fadeIn .2s;animation:Select-animation-fadeIn .2s;color:#999;cursor:pointer;display:table-cell;text-align:center;width:17px}.Select-clear-zone:hover{color:#D0021B}.Select-clear{display:inline-block;font-size:18px;line-height:1}.Select--multi .Select-clear-zone{width:17px}.Select-arrow-zone{cursor:pointer;display:table-cell;text-align:center;width:25px;padding-right:5px}.Select-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px;display:inline-block;height:0;width:0}.Select-arrow-zone:hover>.Select-arrow,.is-open .Select-arrow{border-top-color:#666}@-webkit-keyframes Select-animation-fadeIn{from{opacity:0}to{opacity:1}}@keyframes Select-animation-fadeIn{from{opacity:0}to{opacity:1}}.Select-menu-outer{border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#fff;border:1px solid #ccc;border-top-color:#e6e6e6;box-shadow:0 1px 0 rgba(0,0,0,.06);box-sizing:border-box;margin-top:-1px;max-height:200px;position:absolute;top:100%;width:100%;z-index:1000;-webkit-overflow-scrolling:touch}.Select-menu{max-height:198px;overflow-y:auto}.Select-option{box-sizing:border-box;color:#666;cursor:pointer;display:block;padding:8px 10px}.Select-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.Select-option.is-focused{background-color:#f2f9fc;color:#333}.Select-option.is-disabled{color:#ccc;cursor:not-allowed}.Select-noresults,.Select-search-prompt,.Select-searching{box-sizing:border-box;color:#999;cursor:default;display:block;padding:8px 10px}.Select--multi .Select-input{vertical-align:middle;margin-left:10px;padding:0}.Select--multi.has-value .Select-input,.Select-item{margin-left:5px}.Select-item{background-color:#f2f9fc;border-radius:2px;border:1px solid #c9e6f2;color:#08c;display:inline-block;font-size:.9em;margin-top:5px;vertical-align:top}.Select-item-icon,.Select-item-label{display:inline-block;vertical-align:middle}.Select-item-label{border-bottom-right-radius:2px;border-top-right-radius:2px;cursor:default;padding:2px 5px}.Select-item-label .Select-item-label__a{color:#08c;cursor:pointer}.Select-item-icon{cursor:pointer;border-bottom-left-radius:2px;border-top-left-radius:2px;border-right:1px solid #c9e6f2;padding:1px 5px 3px}.Select-item-icon:focus,.Select-item-icon:hover{background-color:#ddeff7;color:#0077b3}.Select-item-icon:active{background-color:#c9e6f2}.Select--multi.is-disabled .Select-item{background-color:#f2f2f2;border:1px solid #d9d9d9;color:#888}.Select--multi.is-disabled .Select-item-icon{cursor:not-allowed;border-right:1px solid #d9d9d9}.Select--multi.is-disabled .Select-item-icon:active,.Select--multi.is-disabled .Select-item-icon:focus,.Select--multi.is-disabled .Select-item-icon:hover{background-color:#f2f2f2}@keyframes Select-animation-spin{to{transform:rotate(1turn)}}@-webkit-keyframes Select-animation-spin{to{-webkit-transform:rotate(1turn)}}", ""]);

	// exports


/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(194);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(164)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./metisMenu.css", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./metisMenu.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(163)();
	// imports


	// module
	exports.push([module.id, "/*\r\n * metismenu - v2.2.0\r\n * A jQuery menu plugin\r\n * https://github.com/onokumus/metisMenu#readme\r\n *\r\n * Made by Osman Nuri Okumuş <onokumus@gmail.com> (https://github.com/onokumus)\r\n * Under MIT License\r\n */\r\n\r\n.metismenu .arrow {\r\n  float: right;\r\n  line-height: 1.42857;\r\n}\r\n*[dir=\"rtl\"] .metismenu .arrow {\r\n  float: left;\r\n}\r\n\r\n/*\r\n * Require Bootstrap\r\n * https://github.com/twbs/bootstrap\r\n*/\r\n\r\n.metismenu .glyphicon.arrow:before {\r\n  content: \"\\E079\";\r\n}\r\n.metismenu .active > a > .glyphicon.arrow:before {\r\n  content: \"\\E114\";\r\n}\r\n\r\n/*\r\n * Require Font-Awesome\r\n * http://fortawesome.github.io/Font-Awesome/\r\n*/\r\n\r\n.metismenu .fa.arrow:before {\r\n  content: \"\\F104\";\r\n}\r\n.metismenu .active > a > .fa.arrow:before {\r\n  content: \"\\F107\";\r\n}\r\n\r\n/*\r\n * Require Ionicons\r\n * http://ionicons.com/\r\n*/\r\n\r\n.metismenu .ion.arrow:before {\r\n  content: \"\\F3D2\"\r\n}\r\n.metismenu .active > a > .ion.arrow:before {\r\n  content: \"\\F3D0\";\r\n}\r\n.metismenu .plus-times {\r\n  float: right;\r\n}\r\n*[dir=\"rtl\"] .metismenu .plus-times {\r\n  float: left;\r\n}\r\n.metismenu .fa.plus-times:before {\r\n  content: \"\\F067\";\r\n}\r\n.metismenu .active > a > .fa.plus-times {\r\n  -webkit-transform: rotate(45deg);\r\n      -ms-transform: rotate(45deg);\r\n       -o-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n}\r\n.metismenu .plus-minus {\r\n  float: right;\r\n}\r\n*[dir=\"rtl\"] .metismenu .plus-minus {\r\n  float: left;\r\n}\r\n.metismenu .fa.plus-minus:before {\r\n  content: \"\\F067\";\r\n}\r\n.metismenu .active > a > .fa.plus-minus:before {\r\n  content: \"\\F068\";\r\n}\r\n.metismenu .collapse {\r\n  display: none;\r\n}\r\n.metismenu .collapse.in {\r\n  display: block;\r\n}\r\n.metismenu .collapsing {\r\n  position: relative;\r\n  height: 0;\r\n  overflow: hidden;\r\n  -webkit-transition-timing-function: ease;\r\n       -o-transition-timing-function: ease;\r\n          transition-timing-function: ease;\r\n  -webkit-transition-duration: .35s;\r\n       -o-transition-duration: .35s;\r\n          transition-duration: .35s;\r\n  -webkit-transition-property: height, visibility;\r\n       -o-transition-property: height, visibility;\r\n          transition-property: height, visibility;\r\n}\r\n", ""]);

	// exports


/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(196);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(164)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./toolbar.css", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./toolbar.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(163)();
	// imports


	// module
	exports.push([module.id, ".sidebar {\r\n    display: block;\r\n    float: left;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #333;\r\n}\r\n.content {\r\n    display: block;\r\n    overflow: hidden;\r\n    width: auto;\r\n}\r\n.sidebar-nav {\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\r\n    background-image: -webkit-linear-gradient(left, color-stop(#333333 10px), color-stop(#222222 10px));\r\n    background-image: linear-gradient(to right, #333333 10px, #222222 10px);\r\n    background-repeat: repeat-x;\r\n    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#ff333333', endColorstr='#ff222222', GradientType=1);\r\n}\r\n.sidebar-nav ul {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n}\r\n.sidebar-nav a, .sidebar-nav a:hover, .sidebar-nav a:focus, .sidebar-nav a:active {\r\n    outline: none;\r\n}\r\n.sidebar-nav ul li, .sidebar-nav ul a {\r\n    display: block;\r\n}\r\n.sidebar-nav ul a {\r\n    padding: 10px 20px;\r\n    color: #aaa;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.3);\r\n    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.05) inset;\r\n    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.5);\r\n}\r\n.sidebar-nav ul a:hover, .sidebar-nav ul a:focus, .sidebar-nav ul a:active {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n.sidebar-nav ul ul a {\r\n    padding: 10px 30px;\r\n    background-color: rgba(255, 255, 255, 0.1);\r\n}\r\n.sidebar-nav ul ul a:hover, .sidebar-nav ul ul a:focus, .sidebar-nav ul ul a:active {\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n.sidebar-nav-item {\r\n    padding-left: 5px;\r\n}\r\n.sidebar-nav-item-icon {\r\n    padding-right: 5px;\r\n}\r\n#rtlh3 small {\r\n    transform: rotateY(180deg);\r\n    display: inline-block;\r\n}\r\n\r\n/*custom*/\r\n.tooltips {\r\n    height: 30%;\r\n    width: 100%;\r\n    position: absolute;\r\n    bottom: 0;\r\n    background-color: #333333;\r\n}\r\n\r\n.tooltips p {\r\n    color: #aaa;\r\n}\r\n\r\n/*tooltip*/\r\n.hint {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.hint:before, .hint:after {\r\n    position: absolute;\r\n    opacity: 0;\r\n    z-index: 1000000;\r\n    -webkit-transition: 0.3s ease;\r\n    -moz-transition: 0.3s ease;\r\n    pointer-events: none;\r\n}\r\n\r\n.hint:hover:before, .hint:hover:after {\r\n    opacity: 1;\r\n}\r\n\r\n.hint:before {\r\n    content: '';\r\n    position: absolute;\r\n    background: transparent;\r\n    border: 6px solid transparent;\r\n    position: absolute;\r\n}\r\n\r\n.hint:after {\r\n    content: attr(data-hint);\r\n    background: rgba(0, 0, 0, 0.8);\r\n    color: white;\r\n    padding: 8px 10px;\r\n    font-size: 12px;\r\n    white-space: nowrap;\r\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n/* top */\r\n\r\n.hint-top:before {\r\n    bottom: 100%;\r\n    left: 50%;\r\n    margin: 0 0 -18px 0;\r\n    border-top-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.hint-top:after {\r\n    bottom: 100%;\r\n    left: 50%;\r\n    margin: 0 0 -6px -10px;\r\n}\r\n\r\n.hint-top:hover:before {\r\n    margin-bottom: -10px;\r\n}\r\n\r\n.hint-top:hover:after {\r\n    margin-bottom: 2px;\r\n}\r\n\r\n/* default: bottom */\r\n\r\n.hint-bottom:before {\r\n    top: 100%;\r\n    left: 50%;\r\n    margin: -14px 0 0 0;\r\n    border-bottom-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.hint-bottom:after {\r\n    top: 100%;\r\n    left: 50%;\r\n    margin: -2px 0 0 -10px;\r\n}\r\n\r\n.hint-bottom:hover:before {\r\n    margin-top: -6px;\r\n}\r\n\r\n.hint-bottom:hover:after {\r\n    margin-top: 6px;\r\n}\r\n\r\n/* right */\r\n\r\n.hint-right:before {\r\n    left: 100%;\r\n    bottom: 50%;\r\n    margin: 0 0 -4px -8px;\r\n    border-right-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.hint-right:after {\r\n    left: 100%;\r\n    bottom: 50%;\r\n    margin: 0 0 -13px 4px;\r\n}\r\n\r\n.hint-right:hover:before {\r\n    margin: 0 0 -4px -0;\r\n}\r\n\r\n.hint-right:hover:after {\r\n    margin: 0 0 -13px 12px;\r\n}", ""]);

	// exports


/***/ }

});