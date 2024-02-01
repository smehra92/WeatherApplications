import { useState } from "react"

function InputBox() {
    const [cityname, setCityname] = useState("")

    return <div>
        <input onChange={(e) => {setCityname(e.target.value)}} placeholder="Enter City Name" className="w-half px-2 py-2 my-2 border rounded border-slate-200 flex justify-center"/>
    </div>
}

export default InputBox