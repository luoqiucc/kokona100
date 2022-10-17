const server = require('./app/server')
const {APP_PORT} = require('./app/config')

server.listen(APP_PORT, () => {
    console.log('server started')
})