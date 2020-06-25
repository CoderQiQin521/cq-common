/*
 * @Author: coderqiqin@aliyun.com
 * @Date: 2020-06-24 16:33:32
 * @Last Modified by: CoderQiQin
 * @Last Modified time: 2020-06-25 22:26:56
 * https://github.com/liriliri/licia
 * Eris是一套在开发中实践积累起来的实用JavaScript工具库。该库目前拥有超过180个模块，包括Dom操作，cookie设置，类创建，模板函数，日期格式化等实用模块，同时配套有打包工具Eustia进行定制化，使JS脚本加载量缩减在10KB以下，极大优化移动端页面的加载速度。
 */
import * as browser from './module/browser'
import * as util from './module/util'
import request from './module/request'
import wx from './module/wx'

export { browser, util, request, wx }

/*
TODO:
1. 合理的分模块
2. 每个函数都有详细的注释
3. 后期可以用ts重构
4. 一类的方法可以抽象成class
5. 发布npm&github维护
6. ?使用babel打包 `"compile": "babel -d lib/ src/",`
*/
