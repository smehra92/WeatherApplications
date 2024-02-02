import { useState } from "react"
import FetchWeather from "../components/FetchWeather"
import InputBox from "../components/InputBox"

function Dashboard(){
    const [town, setTown] = useState("Jabalpur")
    return <div className="bg-slate-300 flex justify-center">
        <div className="card">
            <InputBox setTown = {setTown}/>
            <FetchWeather town = {town} />
        </div>
    </div>
}
export default Dashboard