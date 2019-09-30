const fs = require('fs')
const path = require('path')

/**
 * 同步获取文件名
 * @param paths 相对路径
 * @returns {string[]} 返回一个 string类型的数组
 */
const getFileName = (paths) => {
  return fs.readdirSync(path.join(__dirname, paths))
}

/**
 * 生成dll 引用 script标签
 * @type {string}
 */
const dllScript = `<script type="text/javascript" src="/js/${getFileName('../static/js')[0]}"></script> `

/**
 * 导出
 * @type {{dllScript: string}}
 */
module.exports = {
  dllScript,
}
