import { useState } from "react"

function FetchWeather({town}) {

    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [temperature, setTemperature] = useState("")
    const [sky, setSky] = useState("")

    let date = String(new window.Date());
    date = date.slice(3, 15);

    async function weather() {
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric"
        const apiKey = "3fdd8a7e5ab795e836dfa48141d0e89b"
        //const place = {town}
        
        const response = await fetch(apiURL + `&appid=${apiKey}` + `&q=${town}`)
        const data = await response.json()
        setTemperature(data.main.temp)
        setSky(data.weather[0].main)
        setCity(data.name)
        setCountry(data.sys.country)
        console.log(data)
    }
    weather()

    return <div className="flex flex-col text-center mt-5 mb-5">
        <div>
            {date}
        </div>
        <div>
            {temperature + " °c"}
        </div>
        <div>
            {city + ", " + country}
        </div>
        <div>
            {sky}
        </div>
    </div>
}
export default FetchWeather