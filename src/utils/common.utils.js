const md5 = require('md5')

class CommonUtils{
    getToken(){
        return md5(new Date())
    }

    // 生成0-1000之间的随机数
    getRandom(){
        return Math.floor(Math.random() * 1000)
    }
}

module.exports = new CommonUtils()