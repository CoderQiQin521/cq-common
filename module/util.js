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
 * @method 节流函数 指连续触发事件但是在 n 秒中只执行一次函数。即 2n 秒内执行 2 次... 。节流如字面意思，会稀释函数的执行频率。(时间戳版,定时器版)
 * @param {Function} fun 必传 要执行的逻辑
 * @param {Number} t 必传 单位毫秒，每隔多长时间执行一次fun
 * @param {Number} mustRun 必传 单位毫秒，该时间内必执行一次fun
 * @param {Boolean} denyLast 可选 节流结束后是否执行一次fun，true表示执行，false表示不执行
 * 参考: https://www.cnblogs.com/cc-freiheit/p/10827372.html
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

export const throttle2 = (fun, wait) => {
  let timer
  return function () {
    let args = arguments
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        fun.apply(this, args)
      }, wait)
    }
  }
}

/**
 * @method 防抖函数 短时间内多次触发同一事件，只执行最后一次，或者只执行最开始的一次，中间的不执行。
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

export const debounce2 = (fun, wait) => {
  let timer
  return function () {
    let context = this,
      args = arguments

    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      fun.apply(this, args)
    }, wait)
  }
}

/**
 * @description  格式化时间
 * @author coderqiqin@aliyun.com
 * @date 2020-06-25
 * @export
 * @param {string} date 时间戳
 * @param {string} format 返回格式
 * @returns {string}
 */
export const formatDate = (date, format = 'yyyy-MM-dd hh:mm:ss') => {
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  }
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }

  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return format
}

/**
 * @description  洗牌算法
 * @author coderqiqin@aliyun.com
 * @date 2020-06-25
 * @export
 * @param {array} arr
 * @returns {array}
 */
export const shuffle = (arr) => {
  let len = arr.length
  while (len) {
    const i = Math.floor(Math.random() * len--)
    ;[arr[len], arr[i]] = [arr[i], arr[len]]
  }
  return arr
}

/**
 * @description  计算函数执行时间
 * @author coderqiqin@aliyun.com
 * @date 2020-06-25
 * @export
 * @param {function} fun
 * @returns {string}
 */
export const timeTaken = (fun) => {
  console.time('timeTaken')
  const res = fun()
  console.timeEnd('timeTaken')
  return res
}

/**
 * @description  平滑滚动至顶部
 * @author coderqiqin@aliyun.com
 * @date 2020-06-25
 * @export
 */
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }
}

/**
 * @description  检查是否为浏览器环境
 * @author coderqiqin@aliyun.com
 * @date 2020-06-25
 * @export
 */
const isBrowser = () => ![typeof window, typeof document].includes('undefined')
