import { useState } from "react"
import { useTime } from "../hooks/useTime"

export function Controls ({ hour24 }) {
    const [flags, setFlags] = useState([])
    const { time } = useTime({ hour24 })
    
    const handleClick = () => {
        setFlags([...flags, time])
    }
  
    const handleClean = () => {
      setFlags([])
    }

    return (
        <>
            <ul className='flags'>
                {
                    flags.map( (flag, index) => {
                    return <li key={index}>{flag}</li>
                    })
                }
            </ul>
            <button onClick={handleClick}>Add Flag</button>
            <button onClick={handleClean}>Clean Flags</button>
        </>
    )
}