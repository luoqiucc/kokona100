const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')

let APP_PORT
let MYSQL_HOST
let MYSQL_PORT
let MYSQL_DATABASE
let MYSQL_USER
let MYSQL_PASSWORD

dotenv.config({path: path.join(__dirname, '..', '..', '.env')})

module.exports = {
    APP_PORT,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD
} = process.env
