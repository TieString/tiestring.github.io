/**
 * 所有需要在首页面加载的js，在这里面进行添加，首页只添加load.js
 */
;(function () {
    var jsFiles = ['my.js']
    var scriptTags = new Array(jsFiles.length)
    var host = getScriptLocation('load.js')
    for (var i = 0, len = jsFiles.length; i < len; i++) {
        scriptTags[i] = "<script src='" + host + jsFiles[i] + "'></script>"
    }
    if (scriptTags.length > 0) {
        document.write(scriptTags.join(''))
    }
})()

/**
 * @description 拼接js文件，以load.js为基准
 * @author TieString
 * @date 2024/01/08
 * @param {*} scriptName load.js
 * @returns {*}
 */
function getScriptLocation(scriptName) {
    var r = new RegExp('(^|(.*?\\/))(' + scriptName + ')(\\?|$)'),
        s = document.getElementsByTagName('script'),
        src,
        m,
        l = ''
    for (var i = 0, len = s.length; i < len; i++) {
        src = s[i].getAttribute('src')
        if (src) {
            m = src.match(r)
            if (m) {
                l = m[1]
                break
            }
        }
    }
    return l
}
