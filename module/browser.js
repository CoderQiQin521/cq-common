/**
 * @description  获取querystring参数
 * @author coderqiqin@aliyun.com
 * @date 2020-06-24
 * @export
 * @param {string} name
 * @returns {string}
 */
export const getQueryString = (name) => {
  if (window.location == null) {
    return null
  }
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2].replace(/\%20/g, '+'))
  } else {
    return null
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
