import { useState } from "react"

function InputBox({ setTown }) {
    const [cityname, setCityname] = useState("")
    const submitHandler = () => { setTown(cityname) }

    return <div className="flex">
        <input className="w-half px-2 py-2 my-2 border text-black rounded border-slate-200 flex justify-center"
            placeholder="City Name .."
            onChange={(e) => { setCityname(e.target.value) }}
        />
        <button className=" bg-orange-400 my-2 py-2 px-2 mx-1 border rounded"
            type="submit"
            onClick={submitHandler}
        >Go</button>
    </div>
}

export default InputBox