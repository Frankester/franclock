import { useEffect, useRef, useState } from 'react'
import {IconToggleLeft, IconToggleRight} from '@tabler/icons'
import { useDataDays } from '../hooks/useCalculatorTime'
import { AlarmStyled, ToggleStyled } from '../styles/styles-Alarms'
import { useAlarmData } from '../context/AlarmSettingsContext'
import AlarmInfo from './AlarmInfo'
import  AddAlarm  from './AddAlarm'

export function Alarm({ time='',periode='',setAlarms=()=>{},id='',actualDisabled=true
        ,setTempAlarm=()=>{}, tempAlarm={} }) {

    const [disabled, setDisabled] = useState(actualDisabled)
    const [modalInfo, setModalInfo] = useState(false)

    const numberToDay = useDataDays()
    const alarmData = useAlarmData()
    const refInfo = useRef()

    
    const handleClick = () => {
        setDisabled(prevDisabled => !prevDisabled)
        setAlarms(alarms => {
            const allOtherAlarms = alarms.filter(alarm => alarm.id !== id) ? alarms.filter(alarm => alarm.id !== id) : [] 
            const alarmChanged = alarms.find(alarm => alarm.id === id)
            return [...allOtherAlarms, {...alarmChanged, actualDisabled: !disabled}
            ]
        })
    }
    
    const classInfo = () => (
        disabled 
        ? 'enabled'
        : 'disabled'
    )

    const showModal = () => setModalInfo(true)
    const closeModalInfo = () => setModalInfo(false)

    useEffect(() => { 
        const intervalIdAlarm = setInterval(() => {
            if(refInfo.current.minutesInterval === 0 && refInfo.current.hoursIntervalDisplay ===0 && disabled !== false){
                const today = new Date().getDay()
                
                if ( alarmData.days.indexOf(numberToDay[today]) !== -1){
                    alarmData.vibrate === true
                    ? window.navigator.vibrate([1000])
                    : window.navigator.vibrate([0])
    
                    if(alarmData.ringtone !== 'DISABLE'){
                        alarmData.audio.currentTime = 0
                        alarmData.audio.play()
                    }

                    if(alarmData.deleteAfter === true){
                        setAlarms(alarms => {
                            return alarms.filter(alarm => alarm.id !== id)
                        }) 
                    } 
                    setDisabled(false)
                }
            }
        }, 1000)
        return () => clearInterval(intervalIdAlarm) 
    },[alarmData,id,disabled,numberToDay, setAlarms ])

    return (
        <AlarmStyled draggable  >
            <AlarmInfo
                showModal={showModal} 
                classInfo={classInfo}
                modalInfo={modalInfo}
                periode={periode}
                ref={refInfo}
                time={time}
                setTempAlarm={setTempAlarm}
            />
            {
                modalInfo 
                ? 
                <AddAlarm 
                    ActualDisabled={disabled}
                    ActualPeriode={periode}
                    ActualTime={refInfo.current.timeArray}
                    idAlarm={id}
                    setAlarms={setAlarms} 
                    closeCurrentModal={closeModalInfo} 
                    state={'update'}
                    tempAlarm={tempAlarm}
                />
                : null
            }
            <ToggleStyled>
                {
                    disabled
                    ? <IconToggleRight width="32" 
                        height="32" 
                        onClick={handleClick}
                        style={{color: 'Blue'}}  
                      />
                    : <IconToggleLeft width="32" height="32"  onClick={handleClick} />
                }
            </ToggleStyled>
        </AlarmStyled>
    )
} 
