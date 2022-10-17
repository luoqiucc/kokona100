const path = require('path')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const koaStatic = require('koa-static')
const views = require('koa-views')
const scanner = require('../routes/scanner')
const error = require('./error')

const server = new Koa()

server.use(koaStatic(path.join(__dirname, '..', '..', 'public')))
server.use(koaStatic(path.join(__dirname, '..', '..', 'upload')))
server.use(koaStatic(path.join(__dirname, '..', '..', 'output')))
server.use(views(path.join(__dirname, '..', 'views'), {
    extension: 'pug'
}))
server.use(bodyParser())
scanner(server)

server.on('error', error)

module.exports = server
