import { ClockStyled } from "../../styles/styles-Alarms"

export default function SetClockTime({ periode, hours='', minutes, setPeriode, setMinutes, setHours }){

    const handleTimePM = () => {
        setPeriode(actualPeriode => actualPeriode === 'AM' ? 'PM' : 'AM' )
    }
    const handleTimeHours = () => {
        setHours(actualHours => {
            let nextValue =String(Number(actualHours) +1);
            
            if(Number(nextValue) > 12 ) nextValue = String(Number(nextValue) -12)
            if(nextValue.length === 1) nextValue = `0${nextValue}` 
            return nextValue
        })
    }
    const handleTimeMinutes = () => {
        setMinutes(actualMinutes => {
            let nextValue =String(Number(actualMinutes) +1);
       
            if(nextValue.length === 1) nextValue = `0${nextValue}` 
            if(Number(nextValue) > 59 ) nextValue = '00'
            return nextValue
        })
    }

    return(
        <ClockStyled>
            <div onClick={handleTimePM}>{periode}</div>
            <div onClick={handleTimeHours}>
                {hours.length === 1 ? `0${hours}` : hours}
            </div>
            <div onClick={handleTimeMinutes}>
                {String(minutes).length === 1 ? `0${minutes}` : minutes}
            </div>
            
        </ClockStyled>
    )
}