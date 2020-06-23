/*
TODO:
1. 合理的分模块
2. 每个函数都有详细的注释
3. 后期可以用ts重构
4. 一类的方法可以抽象成class
5. npm和github维护
*/

/**
 * @description 简化省份名称(去除省,市,自治区,特别行政区后缀)
 * @author coderqiqin@aliyun.com
 * @date 2020-06-22
 * @param {string} province
 * @return {string}
 */
export function shorthand(province) {
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
export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * @description
 * @author coderqiqin@aliyun.com
 * @date 2020-06-22
 * @export
 * @param {string} key
 * @param {*} val
 * @returns {object}
 */
export function localStorage(key, val) {
  if (typeof key !== 'string') throw new Error('must be a string')
  if (val === undefined) {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (error) {
      return localStorage.getItem(key)
    }
  } else {
    val = typeof val === 'string' ? val : JSON.stringify(val)
    localStorage.setItem(key, val)
  }
}

/**
 * @description
 * @author coderqiqin@aliyun.com
 * @date 2020-06-22
 * @export
 * @param {string} key
 * @param {*} val
 * @returns {object}
 */
export function sessionStorage(key, val) {
  if (typeof key !== 'string') throw new Error('must be a string')
  if (val === undefined) {
    try {
      return JSON.parse(sessionStorage.getItem(key))
    } catch (error) {
      return sessionStorage.getItem(key)
    }
  } else {
    val = typeof val === 'string' ? val : JSON.stringify(val)
    sessionStorage.setItem(key, val)
  }
}
