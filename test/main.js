import * as cqCommon from '../index'
console.log('cqCommon: ', cqCommon)

console.log(cqCommon.util.random(1, 9))
console.log(cqCommon.browser.getQueryString('name'))
console.log(cqCommon.browser.getQueryString('age'))
console.log(cqCommon.browser.getQueryString('job'))
