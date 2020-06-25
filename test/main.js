import * as cqCommon from '../index'
// import * as cqCommon from 'cq-common'

console.log('cqCommon: ', cqCommon)
console.log(cqCommon.util.random(1, 9))
console.log(cqCommon.util.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(cqCommon.browser.getQueryString('name'))
console.log(cqCommon.browser.getQueryString('age'))
console.log(cqCommon.browser.getQueryString('job'))
console.log(cqCommon.util.formatDate(new Date(), 'yyyy年MM月dd日hh小时'))
