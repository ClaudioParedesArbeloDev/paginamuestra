import express from 'express'
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'
import mongoose from 'mongoose'
import __dirname from './utils.js'
import indexRouter from './routes/index.router.js'
import aboutMe from './routes/aboutme.router.js'

const app = express()

app.use('/', express.static('./src/public'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/', indexRouter)
app.use('/aboutme', aboutMe)


app.listen(8080, () => console.log('listening...'))