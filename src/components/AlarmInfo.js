import { forwardRef, useEffect, useImperativeHandle } from "react";
import { useAlarmData } from "../context/AlarmSettingsContext";
import { useCalculatorTime } from "../hooks/useCalculatorTime";
import { InfoStyled } from "../styles/styles-Alarms";

function AlarmInfo({showModal=()=>{},classInfo=()=>{},periode='',time=['','']
    , modalInfo=false}, ref){

    const alarmData = useAlarmData()
    const timeArray = time.split(':')
    const { hoursIntervalDisplay, minutesInterval, intervalId } = 
    useCalculatorTime(periode, timeArray[1],timeArray[0],alarmData?.days)
    
    const interval = `Alarm in ${hoursIntervalDisplay !== 0 
        ? `${hoursIntervalDisplay} hours` : ''}  ${minutesInterval} minutes`

        useImperativeHandle(ref,() =>{
            return{
                timeArray,
                hoursIntervalDisplay,
                minutesInterval
            }
        }, [timeArray,hoursIntervalDisplay,minutesInterval])

        //console.log(intervalId)

    useEffect(() =>{
        return () => {
            return clearInterval(intervalId)}
    },[intervalId])

    return(
        <InfoStyled className={classInfo()} onClick={showModal}>
                <p>
                    <b>{time} </b> 
                    <small >{periode.toUpperCase()}  </small>
                    <small >
                        { alarmData?.brand? `| ${alarmData?.brand} ` : ''}
                    </small>
                </p>
                <p>
                    <small>{alarmData?.repeat} | {interval} </small> 
                </p>
                {modalInfo ? clearInterval(intervalId): null}
            </InfoStyled>
    )
}

export default forwardRef(AlarmInfo)