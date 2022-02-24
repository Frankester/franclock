import { useEffect } from "react";
import { IconCheck, IconX } from "@tabler/icons";
import { HeadStyled } from "../styles/styles-Alarms";
import { useCalculatorTime } from "../hooks/useCalculatorTime";
import { useAlarmData } from "../context/AlarmSettingsContext";

export default function HeadAddAlarm({closeCurrentModal=()=>{}, addAlarm=()=>{}, updateAlarm=()=>{}, 
  state,periode, minutes,hours}){
    const {days = []} = useAlarmData()

    const { hoursIntervalDisplay, minutesInterval, intervalId } = 
      useCalculatorTime(periode, minutes,hours,days)

    useEffect(() =>{
        return () => {
           return clearInterval(intervalId)}
    },[intervalId])

    return(
        <HeadStyled>

          <IconX onClick={closeCurrentModal} />
          <div>
            <p>Add alarm</p>
            <small>
                Alarm in {hoursIntervalDisplay 
                    ? `${hoursIntervalDisplay} hours` 
                    : ''}  {minutesInterval} minutes
            </small>
          </div>
          <IconCheck onClick={state === 'update'? updateAlarm : addAlarm} />
        </HeadStyled>
    )
}