var Selenium = require('./Selenium')

let Execute = {
    "title": "Execute",
    "type": "object",
    "properties": {
        "name": {
            "type": "string"
        },
        "execute": {
            "type": "array",
            "title": "Selenium",

            "items": {
                "title": "Selenium",
                "headerTemplate": "{{self.selenium}}",

                oneOf: [Selenium.SeleniumWithArg, Selenium.SeleniumWithoutArg]
            }
        }
    }
};

exports.ExecuteSelenium = Execute;