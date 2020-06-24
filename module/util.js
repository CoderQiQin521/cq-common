/**
 * @description 简化省份名称(去除省,市,自治区,特别行政区后缀)
 * @author coderqiqin@aliyun.com
 * @date 2020-06-22
 * @param {string} province
 * @return {string}
 */
export function shortProvince(province) {
  let flag =
    province.indexOf('黑龙江') !== -1 || province.indexOf('内蒙古') !== -1
  return flag ? province.substr(0, 3) : province.substr(0, 2)
}

/**
 * @description 随机数生成
 * @author coderqiqin@aliyun.com
 * @date 2020-06-22
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export const random = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

/**
 * @method 节流函数
 * @param {Function} fun 必传 要执行的逻辑
 * @param {Number} t 必传 单位毫秒，每隔多长时间执行一次fun
 * @param {Number} mustRun 必传 单位毫秒，该时间内必执行一次fun
 * @param {Boolean} denyLast 可选 节流结束后是否执行一次fun，true表示执行，false表示不执行
 */
export const throttle = (fun, t, mustRun, denyLast) => {
  var timer = null
  var startTime = 0
  return function (event) {
    var that = this,
      args = arguments
    window.clearTimeout(timer)
    var later = function () {
      timer = null
      if (denyLast) fun.apply(that, args)
      // console.log('执行的是later.');
    }
    var currTime = new Date().getTime()
    if (currTime - startTime >= mustRun) {
      // console.log(currTime - startTime);
      fun.apply(that, args)
      startTime = currTime
    } else {
      timer = setTimeout(later, t)
    }
  }
}
/**
 * @method 防抖函数
 * @param {Function} fun 必传 要执行的逻辑
 * @param {Number} t 必传 单位毫秒，表示间隔多久调用fun
 * @param {Boolean} immediate 可选 当为true时，表示防抖开始时执行一次fun，防抖停止时不执行；为false时，表示防抖开始时不执行fun
 */
export const debounce = (fun, t, immediate) => {
  var timeout
  //返回真正的scroll事件的事件处理程序
  return function (event) {
    var that = this,
      arg = arguments
    var later = function () {
      timeout = null
      if (!immediate) fun.apply(that, arguments)
    }
    var callNow = immediate && !timeout //这一句位置很重要
    clearTimeout(timeout)
    timeout = setTimeout(later, t)
    if (callNow) {
      fun.apply(that, arguments)
    }
  }
}
