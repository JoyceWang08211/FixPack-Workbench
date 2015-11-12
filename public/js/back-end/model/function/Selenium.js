const SeleniumCommandList = [
    "antCommand",

    "assertAlert",

    "assertAlertNotPresent",

    "assertChecked",

    "assertConfirmation",

    "assertConsoleTextNotPresent",

    "assertConsoleTextPresent",

    "assertEditable",

    "assertElementNotPresent",

    "assertElementPresent",

    "assertEmailBody",

    "assertEmailSubject",

    "assertHTMLSourceTextNotPresent",

    "assertHTMLSourceTextPresent",

    "assertJavaScriptErrors",

    "assertLiferayErrors",

    "assertLocation",

    "assertNoJavaScriptExceptions",

    "assertNoLiferayExceptions  ",

    "assertNotAlert",

    "assertNotChecked",

    "assertNotEditable",

    "assertNotLocation",

    "assertNotPartialText",

    "assertNotSelectedLabel",

    "assertNotText",

    "assertNotValue",

    "assertNotVisible",

    "assertPartialConfirmation",

    "assertPartialText",

    "assertSelectedLabel",

    "assertText",

    "assertTextNotPresent",

    "assertTextPresent",

    "assertValue",

    "assertVisible",

    "clickAndWait",

    "clickAtAndWait",

    "connectToEmailAccount",

    "copyText",

    "copyValue",

    "deleteAllEmails",

    "echo",

    "fail",

    "getCurrentDay",

    "getCurrentMonth",

    "getCurrentYear",

    "getDependenciesDirName",

    "getEmailBody",

    "getEmailSubject",

    " getFirstNumber",

    "getFirstNumberIncrement",

    "getNumberDecrement",

    "getNumberIncrement",

    "getOutputDirName",

    "getPrimaryTestSuiteName",

    "getProjectDirName",

    "getSikuliImagesDirName",

    "goBackAndWait",

    "isConfirmation",

    "isElementNotPresent",

    "isElementPresentAfterWait",

    "isHTMLSourceTextPresent",

    "isMobileDeviceEnabled",

    "isNotChecked",

    "isNotEditable",

    "isNotPartialText",

    "isNotSelectedLabel",

    "isNotText",

    "isNotValue",

    "isNotVisible",

    "isPartialText",

    "isSelectedLabel",

    "isSikuliImagePresent",

    "isTCatEnabled",

    "isText",

    "isTextNotPresent",

    "isValue",

    "javaScriptMouseDown",

    "javaScriptMouseUp",

    "keyDownAndWait",

    "keyPressAndWait",

    "keyUpAndWait",

    "makeVisible",

    "mouseRelease",

    "paste",

    "pause",

    "pauseLoggerCheck",

    "refreshAndWait",

    "replyToEmail",

    "saveScreenshot",

    "saveScreenshotAndSource",

    "saveScreenshotBeforeAction",

    "scrollWebElementIntoView",

    "selectAndWait",

    "sendActionDescriptionLogger",

    "sendActionLogger",

    "sendEmail",

    "sendKeys",

    "sendKeysAceEditor",

    "sendLogger",

    "sendMacroDescriptionLogger",

    "sendTestCaseCommandLogger",

    "sendTestCaseHeaderLogger",

    "setDefaultTimeout",

    "setDefaultTimeoutImplicit",

    "setPrimaryTestSuiteName",

    "setTimeoutImplicit",

    "setWindowSize",

    "sikuliAssertElementNotPresent",

    "sikuliAssertElementPresent",

    "sikuliClick",

    "sikuliClickByIndex",

    "sikuliDragAndDrop",

    "sikuliLeftMouseDown",

    "sikuliLeftMouseUp",

    "sikuliMouseMove",

    "sikuliRightMouseDown",

    "sikuliRightMouseUp",

    "sikuliType",

    "sikuliUploadCommonFile",

    "sikuliUploadTCatFile",

    "sikuliUploadTempFile",

    "startLogger",

    "stopLogger",

    "typeAceEditor",

    "typeAlloyEditor",

    "typeCKEditor",

    "typeScreen",

    "uploadCommonFile",

    "uploadFile",

    "uploadTempFile",

    "waitForConfirmation",

    "waitForElementNotPresent",

    "waitForElementPresent",

    "waitForNotPartialText",

    "waitForNotSelectedLabel",

    "waitForNotText",

    "waitForNotValue",

    "waitForNotVisible",

    "waitForPartialText",

    "waitForSelectedLabel",

    "waitForText",

    "waitForTextNotPresent",

    "waitForTextPresent",

    "waitForValue",

    "waitForVisible",

    "windowMaximizeAndWait"
];

const WebDriverCommandList = [
    "addSelection",
    "check",
    "click",
    "clickAt",
    "close",
    "doubleClick",
    "doubleClickAt",
    "dragAndDrop",
    "dragAndDropToObject",
    "getAlert",
    "getAttribute",
    "getBodyText",
    "getConfirmation",
    "getEval",
    "getHtmlNode",
    "getHtmlNodeHref",
    "getHtmlNodeText",
    "getHtmlSource",
    "getLocation",
    "getSelectedLabel",
    "getSelectedLabels",
    "getText",
    "getTitle",
    "getValue",
    "goBack",
    "isAlertPresent",
    "isChecked",
    "isEditable",
    "isElementPresent",
    "isTextPresent",
    "isVisible",
    "keyDown",
    "keyPress",
    "keyUp",
    "mouseDown",
    "mouseDownAt",
    "mouseMove",
    "mouseMoveAt",
    "mouseOut",
    "mouseOver",
    "mouseUp",
    "mouseUpAt",
    "open",
    "openWindow",
    "refresh",
    "runScript",
    "select",
    "selectFrame",
    "selectPopUp",
    "selectWindow",
    "setDefaultTimeoutImplicit",
    "setTimeout",
    "setTimeoutImplicit",
    "stop",
    "type",
    "typeKeys",
    "uncheck",
    "waitForPageToLoad",
    "waitForPopUp",
    "acceptConfirmation",
    "getSpecialCharIndexes",
    "getWebElement",
    "getWebElements",
    "initKeysSpecialChars",
    "isValidKeycode",
    "scrollWebElementIntoView",
    "selectByRegexpText",
    "selectByRegexpValue"
];

let SeleniumWithoutArg = {
    "type": "object",
    "title": "Selenium",
    "headerTemplate": "{{self.selenium}}",

    "properties": {
        "selenium": {
            "type": "string",
            "enum": [].concat(SeleniumCommandList, WebDriverCommandList)
        }
    }
}

let SeleniumWithArg = {
    "type": "object",
    "title": "Selenium",
    "headerTemplate": "{{self.selenium}}",

    "properties": {
        argument1: {
            type: 'string'
        },

        "selenium": {
            "type": "string",
            "enum": SeleniumCommandList
        }
    }
}

exports.SeleniumWithoutArg = SeleniumWithoutArg;
exports.SeleniumWithArg = SeleniumWithArg;