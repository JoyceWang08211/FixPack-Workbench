webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//js
	__webpack_require__(165);

	//css
	__webpack_require__(179);
	__webpack_require__(181);
	__webpack_require__(183);
	__webpack_require__(185);

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var createFragment = __webpack_require__(166);
	var $ = __webpack_require__(160);
	var pd = __webpack_require__(168).pd;
	var Clipboard = __webpack_require__(169);

	var editor_type = window.location.href.split('/').pop();

	var profile = __webpack_require__(178);
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

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(167).create;

/***/ },

/***/ 167:
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

/***/ 168:
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

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _clipboardAction = __webpack_require__(170);

	var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

	var _tinyEmitter = __webpack_require__(172);

	var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

	var _goodListener = __webpack_require__(173);

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

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _select = __webpack_require__(171);

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

/***/ 171:
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

/***/ 172:
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

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	var is = __webpack_require__(174);
	var delegate = __webpack_require__(175);

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

/***/ 174:
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

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	var closest = __webpack_require__(176);

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

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	var matches = __webpack_require__(177)

	module.exports = function (element, selector, checkYoSelf) {
	  var parent = checkYoSelf ? element : element.parentNode

	  while (parent && parent !== document) {
	    if (matches(parent, selector)) return parent;
	    parent = parent.parentNode
	  }
	}


/***/ },

/***/ 177:
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

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var $ = __webpack_require__(160);
	var Clipboard = __webpack_require__(169);

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

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(180);
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

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(163)();
	// imports


	// module
	exports.push([module.id, "html, body {\r\n    margin: 0;\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    font: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif;\r\n}\r\n\r\na {\r\n    color: #00B7FF;\r\n}\r\n\r\n.editor-container {\r\n    height: 100%;\r\n}\r\n\r\ndiv.editor-toolbar {\r\n    background-color: #565151;\r\n    height: 100%;\r\n}\r\n\r\ndiv.editor-toolbar .row {\r\n    height: 100%;\r\n}\r\n\r\ndiv.editor-panel {\r\n    height: 100%;\r\n}\r\n\r\n#search {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.break-line > a {\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n#diaplay_file {\r\n    margin-top: 5px;\r\n}\r\n\r\n#editor_list > span {\r\n    display: block;\r\n    width: 100%;\r\n}", ""]);

	// exports


/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(182);
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

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(163)();
	// imports


	// module
	exports.push([module.id, ".Select,.Select-control{position:relative}.Select,.Select div,.Select input,.Select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.Select.is-disabled>.Select-control{background-color:#f6f6f6}.Select.is-disabled .Select-arrow-zone{cursor:default;pointer-events:none}.Select-control{background-color:#fff;border-radius:4px;border:1px solid #ccc;color:#333;cursor:default;display:table;height:36px;outline:0;overflow:hidden;width:100%}.is-searchable.is-focused:not(.is-open)>.Select-control,.is-searchable.is-open>.Select-control{cursor:text}.Select-placeholder,.Select-value{left:0;position:absolute;top:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select-control:hover{box-shadow:0 1px 0 rgba(0,0,0,.06)}.is-open>.Select-control{border-bottom-right-radius:0;border-bottom-left-radius:0;background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.is-open>.Select-control>.Select-arrow{border-color:transparent transparent #999;border-width:0 5px 5px}.is-focused:not(.is-open)>.Select-control{border-color:#08c #0099e6 #0099e6;box-shadow:inset 0 1px 2px rgba(0,0,0,.1),0 0 5px -1px rgba(0,136,204,.5)}.Select-placeholder{bottom:0;color:#aaa;line-height:34px;padding-left:10px;padding-right:10px;right:0}.has-value>.Select-control>.Select-placeholder{color:#333}.Select-value{color:#aaa;padding:8px 52px 8px 10px;right:-15px}.Select-arrow-zone,.Select-clear-zone,.Select-loading,.Select-loading-zone{position:relative;vertical-align:middle}.has-value>.Select-control>.Select-value{color:#333}.Select-input{height:34px;padding-left:10px;padding-right:10px;vertical-align:middle}.Select-input>input{background:none;border:0;box-shadow:none;cursor:default;display:inline-block;font-family:inherit;font-size:inherit;height:34px;margin:0;outline:0;padding:0;-webkit-appearance:none}.is-focused .Select-input>input{cursor:text}.Select-control:not(.is-searchable)>.Select-input{outline:0}.Select-loading-zone{cursor:pointer;display:table-cell;text-align:center;width:16px}.Select-loading{-webkit-animation:Select-animation-spin .4s infinite linear;-o-animation:Select-animation-spin .4s infinite linear;animation:Select-animation-spin .4s infinite linear;width:16px;height:16px;box-sizing:border-box;border-radius:50%;border:2px solid #ccc;border-right-color:#333;display:inline-block}.Select-clear-zone{-webkit-animation:Select-animation-fadeIn .2s;-o-animation:Select-animation-fadeIn .2s;animation:Select-animation-fadeIn .2s;color:#999;cursor:pointer;display:table-cell;text-align:center;width:17px}.Select-clear-zone:hover{color:#D0021B}.Select-clear{display:inline-block;font-size:18px;line-height:1}.Select--multi .Select-clear-zone{width:17px}.Select-arrow-zone{cursor:pointer;display:table-cell;text-align:center;width:25px;padding-right:5px}.Select-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px;display:inline-block;height:0;width:0}.Select-arrow-zone:hover>.Select-arrow,.is-open .Select-arrow{border-top-color:#666}@-webkit-keyframes Select-animation-fadeIn{from{opacity:0}to{opacity:1}}@keyframes Select-animation-fadeIn{from{opacity:0}to{opacity:1}}.Select-menu-outer{border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#fff;border:1px solid #ccc;border-top-color:#e6e6e6;box-shadow:0 1px 0 rgba(0,0,0,.06);box-sizing:border-box;margin-top:-1px;max-height:200px;position:absolute;top:100%;width:100%;z-index:1000;-webkit-overflow-scrolling:touch}.Select-menu{max-height:198px;overflow-y:auto}.Select-option{box-sizing:border-box;color:#666;cursor:pointer;display:block;padding:8px 10px}.Select-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.Select-option.is-focused{background-color:#f2f9fc;color:#333}.Select-option.is-disabled{color:#ccc;cursor:not-allowed}.Select-noresults,.Select-search-prompt,.Select-searching{box-sizing:border-box;color:#999;cursor:default;display:block;padding:8px 10px}.Select--multi .Select-input{vertical-align:middle;margin-left:10px;padding:0}.Select--multi.has-value .Select-input,.Select-item{margin-left:5px}.Select-item{background-color:#f2f9fc;border-radius:2px;border:1px solid #c9e6f2;color:#08c;display:inline-block;font-size:.9em;margin-top:5px;vertical-align:top}.Select-item-icon,.Select-item-label{display:inline-block;vertical-align:middle}.Select-item-label{border-bottom-right-radius:2px;border-top-right-radius:2px;cursor:default;padding:2px 5px}.Select-item-label .Select-item-label__a{color:#08c;cursor:pointer}.Select-item-icon{cursor:pointer;border-bottom-left-radius:2px;border-top-left-radius:2px;border-right:1px solid #c9e6f2;padding:1px 5px 3px}.Select-item-icon:focus,.Select-item-icon:hover{background-color:#ddeff7;color:#0077b3}.Select-item-icon:active{background-color:#c9e6f2}.Select--multi.is-disabled .Select-item{background-color:#f2f2f2;border:1px solid #d9d9d9;color:#888}.Select--multi.is-disabled .Select-item-icon{cursor:not-allowed;border-right:1px solid #d9d9d9}.Select--multi.is-disabled .Select-item-icon:active,.Select--multi.is-disabled .Select-item-icon:focus,.Select--multi.is-disabled .Select-item-icon:hover{background-color:#f2f2f2}@keyframes Select-animation-spin{to{transform:rotate(1turn)}}@-webkit-keyframes Select-animation-spin{to{-webkit-transform:rotate(1turn)}}", ""]);

	// exports


/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(184);
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

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(163)();
	// imports


	// module
	exports.push([module.id, "/*\n * metismenu - v2.2.0\n * A jQuery menu plugin\n * https://github.com/onokumus/metisMenu#readme\n *\n * Made by Osman Nuri Okumuş <onokumus@gmail.com> (https://github.com/onokumus)\n * Under MIT License\n */\n\n.metismenu .arrow {\n  float: right;\n  line-height: 1.42857;\n}\n*[dir=\"rtl\"] .metismenu .arrow {\n  float: left;\n}\n\n/*\n * Require Bootstrap\n * https://github.com/twbs/bootstrap\n*/\n\n.metismenu .glyphicon.arrow:before {\n  content: \"\\E079\";\n}\n.metismenu .active > a > .glyphicon.arrow:before {\n  content: \"\\E114\";\n}\n\n/*\n * Require Font-Awesome\n * http://fortawesome.github.io/Font-Awesome/\n*/\n\n.metismenu .fa.arrow:before {\n  content: \"\\F104\";\n}\n.metismenu .active > a > .fa.arrow:before {\n  content: \"\\F107\";\n}\n\n/*\n * Require Ionicons\n * http://ionicons.com/\n*/\n\n.metismenu .ion.arrow:before {\n  content: \"\\F3D2\"\n}\n.metismenu .active > a > .ion.arrow:before {\n  content: \"\\F3D0\";\n}\n.metismenu .plus-times {\n  float: right;\n}\n*[dir=\"rtl\"] .metismenu .plus-times {\n  float: left;\n}\n.metismenu .fa.plus-times:before {\n  content: \"\\F067\";\n}\n.metismenu .active > a > .fa.plus-times {\n  -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n       -o-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.metismenu .plus-minus {\n  float: right;\n}\n*[dir=\"rtl\"] .metismenu .plus-minus {\n  float: left;\n}\n.metismenu .fa.plus-minus:before {\n  content: \"\\F067\";\n}\n.metismenu .active > a > .fa.plus-minus:before {\n  content: \"\\F068\";\n}\n.metismenu .collapse {\n  display: none;\n}\n.metismenu .collapse.in {\n  display: block;\n}\n.metismenu .collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-timing-function: ease;\n       -o-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-duration: .35s;\n       -o-transition-duration: .35s;\n          transition-duration: .35s;\n  -webkit-transition-property: height, visibility;\n       -o-transition-property: height, visibility;\n          transition-property: height, visibility;\n}\n", ""]);

	// exports


/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(186);
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

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(163)();
	// imports


	// module
	exports.push([module.id, ".sidebar {\r\n    display: block;\r\n    float: left;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #333;\r\n}\r\n.content {\r\n    display: block;\r\n    overflow: hidden;\r\n    width: auto;\r\n}\r\n.sidebar-nav {\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\r\n    background-image: -webkit-linear-gradient(left, color-stop(#333333 10px), color-stop(#222222 10px));\r\n    background-image: linear-gradient(to right, #333333 10px, #222222 10px);\r\n    background-repeat: repeat-x;\r\n    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#ff333333', endColorstr='#ff222222', GradientType=1);\r\n}\r\n.sidebar-nav ul {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n}\r\n.sidebar-nav a, .sidebar-nav a:hover, .sidebar-nav a:focus, .sidebar-nav a:active {\r\n    outline: none;\r\n}\r\n.sidebar-nav ul li, .sidebar-nav ul a {\r\n    display: block;\r\n}\r\n.sidebar-nav ul a {\r\n    padding: 10px 20px;\r\n    color: #aaa;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.3);\r\n    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.05) inset;\r\n    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.5);\r\n}\r\n.sidebar-nav ul a:hover, .sidebar-nav ul a:focus, .sidebar-nav ul a:active {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n.sidebar-nav ul ul a {\r\n    padding: 10px 30px;\r\n    background-color: rgba(255, 255, 255, 0.1);\r\n}\r\n.sidebar-nav ul ul a:hover, .sidebar-nav ul ul a:focus, .sidebar-nav ul ul a:active {\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n.sidebar-nav-item {\r\n    padding-left: 5px;\r\n}\r\n.sidebar-nav-item-icon {\r\n    padding-right: 5px;\r\n}\r\n#rtlh3 small {\r\n    transform: rotateY(180deg);\r\n    display: inline-block;\r\n}\r\n\r\n/*custom*/\r\n.tooltips {\r\n    height: 30%;\r\n    width: 100%;\r\n    position: absolute;\r\n    bottom: 0;\r\n    background-color: #333333;\r\n}\r\n\r\n.tooltips p {\r\n    color: #aaa;\r\n}\r\n\r\n/*tooltip*/\r\n.hint {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.hint:before, .hint:after {\r\n    position: absolute;\r\n    opacity: 0;\r\n    z-index: 1000000;\r\n    -webkit-transition: 0.3s ease;\r\n    -moz-transition: 0.3s ease;\r\n    pointer-events: none;\r\n}\r\n\r\n.hint:hover:before, .hint:hover:after {\r\n    opacity: 1;\r\n}\r\n\r\n.hint:before {\r\n    content: '';\r\n    position: absolute;\r\n    background: transparent;\r\n    border: 6px solid transparent;\r\n    position: absolute;\r\n}\r\n\r\n.hint:after {\r\n    content: attr(data-hint);\r\n    background: rgba(0, 0, 0, 0.8);\r\n    color: white;\r\n    padding: 8px 10px;\r\n    font-size: 12px;\r\n    white-space: nowrap;\r\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n/* top */\r\n\r\n.hint-top:before {\r\n    bottom: 100%;\r\n    left: 50%;\r\n    margin: 0 0 -18px 0;\r\n    border-top-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.hint-top:after {\r\n    bottom: 100%;\r\n    left: 50%;\r\n    margin: 0 0 -6px -10px;\r\n}\r\n\r\n.hint-top:hover:before {\r\n    margin-bottom: -10px;\r\n}\r\n\r\n.hint-top:hover:after {\r\n    margin-bottom: 2px;\r\n}\r\n\r\n/* default: bottom */\r\n\r\n.hint-bottom:before {\r\n    top: 100%;\r\n    left: 50%;\r\n    margin: -14px 0 0 0;\r\n    border-bottom-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.hint-bottom:after {\r\n    top: 100%;\r\n    left: 50%;\r\n    margin: -2px 0 0 -10px;\r\n}\r\n\r\n.hint-bottom:hover:before {\r\n    margin-top: -6px;\r\n}\r\n\r\n.hint-bottom:hover:after {\r\n    margin-top: 6px;\r\n}\r\n\r\n/* right */\r\n\r\n.hint-right:before {\r\n    left: 100%;\r\n    bottom: 50%;\r\n    margin: 0 0 -4px -8px;\r\n    border-right-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.hint-right:after {\r\n    left: 100%;\r\n    bottom: 50%;\r\n    margin: 0 0 -13px 4px;\r\n}\r\n\r\n.hint-right:hover:before {\r\n    margin: 0 0 -4px -0;\r\n}\r\n\r\n.hint-right:hover:after {\r\n    margin: 0 0 -13px 12px;\r\n}", ""]);

	// exports


/***/ }

});