const fs = require('fs');
module.exports.getFileJsonData = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (error, data) => {
            if (error) {
                //读取文件失败
                reject(error)
            }
            //成功
            resolve(data)
        })
    })
}