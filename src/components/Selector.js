import { useEffect } from "react"
import { useToday } from "../hooks/useCalculatorTime"
import { SelectorStyled } from "../styles/styles-Alarms"
import { useAlarmSets } from "../context/AlarmSettingsContext"

import song1 from '../assets/birds.mp3'
import song2 from '../assets/gallo.mp3'
import song3 from '../assets/iphone.mp3'
import song4 from '../assets/nature.mp3'

export function Selector({ Brand = "Default", options=["Not","Defined"],wordAction="Not", 
                              Action=()=>{} , disableAction=() => {}, setValue=() => {}, value=''}){
    
    const today = useToday()
    const {setAudio, setDays} = useAlarmSets()

    const onChangeValue = ({ target }) => {
        if(target.value === wordAction.toUpperCase()){
            Action()
        } else {
            disableAction()
        }

        setValue(target.value)
    }

    useEffect(() => {

        if(Brand ==='Repeat'){
          switch(value){
              case "ONCE": 
                setDays([`${today}`])
              break;
              case 'DAILY':
                setDays(['Mon','Tue','Wed','Thu','Fri','Sat','Sun'])
              break;
              case 'MON TO FRI':
                setDays(['Mon','Tue','Wed','Thu','Fri'])
              break;
              default: break;
            }
      } else if(Brand === 'Rington'){
        switch(value){
          case "CHICKEN": 
            setAudio(new Audio(song2))
          break;
          case 'BIRDS':
            setAudio(new Audio(song1))
          break;
          case 'NATURE':
            setAudio(new Audio(song4))
          break;
          case 'IPHONE': 
            setAudio(new Audio(song3))
          break;
          default: break;
        }
      }
    }, [value,Brand,setAudio,setDays,today ])

    return(
        <SelectorStyled>
            <select value={value} onChange={onChangeValue}>
                <option disabled>--- Select {Brand} ---</option>
                
                {
                    options.map((op, index) => (
                        <option key={index} value={op.toUpperCase()}> { op } </option>
                    ))
                }
            </select>
        </SelectorStyled>
        
    )
}