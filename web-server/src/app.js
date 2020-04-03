const express = require('express')

const app = express()
const geoCode = require('./../../utils/geocode')
const forecast = require('./../../utils/forecast')

app.get('',(req, res)=>{
    res.send('Hello express!')
})

app.get('/help', (req, res)=>{
    res.send('Help page')
})

app.get('/about', (req,res) =>{
    res.send('About page')
})

app.get('/weather', (req,res)=>{
    geoCode('Bengaluru',(error,{latitude, longitude, location}) =>{
        if(error)
        {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if(error)
            {
                return console.log(error)
            }
            const toSend = location
            res.send(toSend)
        })
    })
})

app.listen(3000,() => {
    console.log('Server is up on port 3000.')
})