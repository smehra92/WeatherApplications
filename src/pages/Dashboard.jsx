import { useState } from "react"
import FetchWeather from "../components/FetchWeather"
import InputBox from "../components/InputBox"
import Snow from "../assets/Snow.mp4"
import Clear from "../assets/Clear.mp4"
import Rain from "../assets/Rain.mp4"
import Cloud from "../assets/Cloud.mp4"
import Mist from "../assets/Mist.mp4"


function Dashboard() {
    const [town, setTown] = useState("Jabalpur")
    const [top, setTop] = useState("")

    const getskydata = (data) => {
        // console.log("Condition is : " + data)
        console.log(top)
        if ("Clear" === data) {
           setTop(Clear); 
        }else if("Cloud" === data  || "Clouds" === data){
            setTop(Cloud);
        }else if("Rainy" === data){
            setTop(Rain);
        }else if("Snow" === data){
            setTop(Snow)
        }else if("Mist" === data || "Fog" === data || "Haze" === data){
            setTop(Mist);
        }else{
            return
        }
    }

    return <div className="main">
        <div className="overlay">
        <video src={top} autoPlay loop muted/>
        </div>
        <div className="card">
            <h6 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Weather</h6>
            <InputBox setTown={setTown} />
            <FetchWeather town={town} getskydata={getskydata} />
        </div>
    </div>
}
export default Dashboard