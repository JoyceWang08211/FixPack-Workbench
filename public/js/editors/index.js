var React = require('react');
var $ = require('jquery');
var JSONEditor = require('jsoneditor');

var ToolbarBox = require('./toolbar');

$(()=> {

    React.render(<ToolbarBox/>, document.getElementById('editor_toolbar'))
//    JSONEditor.defaults.options.theme = 'bootstrap3';
//
//    let sample = {
//        type: "object",
//        title: "Car",
//        properties: {
//            make: {
//                type: "string",
//                enum: [
//                    "Toyota",
//                    "BMW",
//                    "Honda",
//                    "Ford",
//                    "Chevy",
//                    "VW"
//                ]
//            },
//            model: {
//                type: "string"
//            },
//            year: {
//                type: "integer",
//                enum: [
//                    1995, 1996, 1997, 1998, 1999,
//                    2000, 2001, 2002, 2003, 2004,
//                    2005, 2006, 2007, 2008, 2009,
//                    2010, 2011, 2012, 2013, 2014
//                ],
//                default: 2008
//            }
//        }
//    }
//
//    var editor = new JSONEditor(document.getElementById('editor_panel'), {
//        schema:sample,
//        disable_properties:true
//    });
})


