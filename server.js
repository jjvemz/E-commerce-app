require('dotenv').config()
const express = require('express')
const app = express()
const sequelize = require('./config/configuration')

const PORT = process.env.PORT || 3050


app.use(express.json())
app.use(express.urlencoded({extended:true}))

sequelize.sync({ force: true }).then(() => {
	app.listen(PORT, () => console.log(`Now listening on ${PORT}`))
})