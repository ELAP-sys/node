const express = require('express')
const qs = require('querystring')
const myapp = express()
const mymod = require("./myModules")
const { request } = require('http')

myapp.use(express.text())

myapp.get('/test1', mymod.myf)



myapp.post('/test1', mymod.myarr)




myapp.listen(4040, () => {
    console.log('server is up on 4040')
})