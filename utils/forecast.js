const request = require('request')

const forecast = (latitude, longitude,callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=6137c02abd144830715ec99341a02256'

    request({ url, json: true}, (error, {body}) => {
        if(error)
        {
             callback('Unable to connect to weather services!', undefined)
        }
        else if(body.error)
        {
            callback('Unable to find the co-ordinates. Try another search!', undefined)
        }
        else{
            
            callback(undefined, {
                main: body.main,
                wind: body.wind
            })
        }
    })
}

module.exports = forecast