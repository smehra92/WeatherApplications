import { useState } from "react"

function InputBox() {
    const [cityname, setCityname] = useState("")
    const submitHandler = () => { console.log(cityname) }

    return <div className="flex">
        <input onChange={(e) => { setCityname(e.target.value) }}
            placeholder="City Name .."
            className="w-half px-2 py-2 my-2 border rounded border-slate-200 flex justify-center" />
        <button type="submit"
            onClick={submitHandler}
            className=" bg-orange-400 my-2 py-2 px-2 mx-1 border rounded">Go</button>
    </div>
}

export default InputBox