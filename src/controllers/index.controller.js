const ImageFactory = require('../services/imageFactory.service')
const {
    getToken
} = require('../utils/common.utils')

class IndexController {
    async home(ctx, next) {
        let token = ctx.cookies.get('userToken')
        if (!token) {
            token = getToken()
            ctx.cookies.set('userToken', token, {
                maxAge: 60 * 1000 * 60 * 24 * 5
            })
        }
        await ctx.render('home', {
            token
        })
    }

    async compositeImage(ctx, next) {
        let token = ctx.cookies.get('userToken')
        if (!token) {
            return ctx.redirect('/')
        }

        let file = ctx.request.file
        if (!file) {
            return ctx.redirect('/')
        }

        let {filename} = file

        await ImageFactory.compositeImages(filename, token)

        await ctx.render('download', {
            imgUrl: '/' + token + '.jpg',
            imgName: token + '.jpg'
        })
    }
}

module.exports = new IndexController()