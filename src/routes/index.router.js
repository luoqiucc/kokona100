const Router = require('@koa/router')
const upload = require('../middlewares/upload')
const {
    home,
    compositeImage
} = require('../controllers/index.controller')

const index = new Router()
index.get('/', home)
index.post('/download', upload.single('background'), compositeImage)

module.exports = index