/*
 * @Author: coderqiqin@aliyun.com
 * @Date: 2020-06-24 16:33:32
 * @Last Modified by: CoderQiQin
 * @Last Modified time: 2020-06-24 17:19:20
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
6. 使用babel打包 `"compile": "babel -d lib/ src/",`
*/
