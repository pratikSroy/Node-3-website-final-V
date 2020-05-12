const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=26dd2aa3fc3a178dabdb56c872025fba&query='+latitude+','+longitude+'&units=m'
    request({ url, json: true }, (error, response) => {
        //console.log(response.body)
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            //console.log(response.body.current.temperature)
            callback(undefined, response.body.current.weather_descriptions[0] + ' It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.humidity + '% chance of rain.')
        }
    })
}

module.exports = forecast