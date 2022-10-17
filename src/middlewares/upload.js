const path = require('path')
const multer = require('@koa/multer')
const {
    getRandom
} = require('../utils/common.utils')

const storage = multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'upload'),

    filename(req, file, cb) {
        const filenameArr = file.originalname.split('.')
        cb(null, getRandom() + Date.now().toString() + '.' + filenameArr[filenameArr.length - 1])
    }
})

const limits = {
    files: 1
}

const upload = multer({storage, limits})

module.exports = upload
