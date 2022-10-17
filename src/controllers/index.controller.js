class IndexController {
    async home(ctx, next) {
        ctx.cookies.set('user', Math.random())
        await ctx.render('home')
    }

    async compositeImage(ctx, next) {
        ctx.body = {
            message: 'successful',
            file: ctx.request.file
        }
    }
}

module.exports = new IndexController()