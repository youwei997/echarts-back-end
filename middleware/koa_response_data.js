//处理业务逻辑的中间件,读取某个json的数据
const path = require('path')
const fileUtils = require('../utils/file_utils')
module.exports = async (ctx, next) => {
    const url = ctx.request.url; // /api/seller
    let filePath = url.replace('/api', '')
    filePath = '../data' + filePath + '.json'
    filePath = path.join(__dirname, filePath)
    
try {
    const res = await fileUtils.getFileJsonData(filePath)
    ctx.response.body = res
} catch (error) {
    const errMassage={
        message:'文件读取失败',
        status:404
    }
    ctx.response.body = JSON.stringify(errMassage)
}

    console.log(filePath);
    await next()
}