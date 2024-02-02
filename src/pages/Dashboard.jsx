import { useState } from "react"
import FetchWeather from "../components/FetchWeather"
import InputBox from "../components/InputBox"

function Dashboard(){

    return <div className="bg-slate-300 flex justify-center">
        <div class="card">
            <InputBox />
            <FetchWeather />
        </div>
    </div>
}
export default Dashboard