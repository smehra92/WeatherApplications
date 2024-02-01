import { useState } from "react"

function FetchWeather() {


    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [temperature, setTemperature] = useState("")
    const [sky, setSky] = useState("")

    async function weather(){
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric"
        const apiKey = "3fdd8a7e5ab795e836dfa48141d0e89b"
        const place = "jabalpur"

        const response = await fetch(apiURL + `&appid=${apiKey}` + `&q=${place}`)
        const data = await response.json()
        setTemperature(data.main.temp)
        setSky(data.weather[0].main)
        setCity(data.name)
        setCountry(data.sys.country)
        console.log(data)
    }
    weather()

    return <div className="flex justify-center text-center">
        {city}
        , {country}
        <br />
        {temperature} °c
        <br />
        {sky}
    </div>
}
export default FetchWeather