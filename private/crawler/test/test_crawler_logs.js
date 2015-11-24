"use strict"

var co = require('co');
var crawler_logs = require('../crawler_logs');

var testcase = {
    url: 'https://test.liferay.com/8/view/test-portal-fixpack-frontend-tomcat-mysql(ee-6.2.10_6.2.10.15)/job/test-portal-fixpack-frontend-tomcat-mysql%5Bportal-authentication-ee%5D(ee-6.2.10_6.2.10.15)/2/label_exp=!test-8,test=CPSAMLTestCase%23testViewSingleLogoutHTTPPostBindingInConsole/'
};

co(function* () {
    var test = yield [crawler_logs.run(testcase), crawler_logs.run(testcase)]
    console.log(test)
}).catch((err)=> {
    console.error(err.stack);
});