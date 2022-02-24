import { createContext, useContext, useState } from "react";
import { useToday } from "../hooks/useCalculatorTime";

const AlarmDataContext = createContext({})

function AlarmSettingsContext({ children, alarm={} }){
    const today = useToday()
    //console.log(alarm)
    const [vibrate, setVibrate] = useState( alarm?.vibrate || true)
    const [deleteAfter, setDeleteAfter] = useState(alarm?.deleteAfter ||false)
    const [label, setLabel] = useState(alarm?.label ||'')
    const [ringtone, setRingtone] = useState(alarm?.ringtone ||'BIRDS')
    const [repeat, setRepeat] = useState(alarm?.repeat ||'ONCE')
    const [days, setDays] = useState(alarm?.days ||[`${today}`])
    const [audio, setAudio] = useState(alarm?.audio ||new Audio())

    const alarmSettings= {
        data:{
            repeat: repeat,
            brand: label,
            ringtone: ringtone,
            vibrate: vibrate,
            deleteAfter: deleteAfter,
            days: days,
            audio:audio
        },
        sets: {
            setDays: setDays,
            setVibrate: setVibrate,
            setDeleteAfter: setDeleteAfter,
            setLabel: setLabel,
            setRingtone:setRingtone,
            setRepeat: setRepeat,
            setAudio: setAudio
        }
    }
    return (
    <AlarmDataContext.Provider value={alarmSettings}>
        {children}
    </AlarmDataContext.Provider>
    )
}

function useAlarmData(){
    const {data} = useContext(AlarmDataContext)
    return data
}

function useAlarmSets(){
    const {sets} = useContext(AlarmDataContext)
    return sets
}

export {
    AlarmSettingsContext,
    useAlarmData,
    useAlarmSets
}