const error = async (error, ctx) => {
    ctx.status = 503
    ctx.body = {
        message: '服务不可用'
    }
}

module.exports = error
