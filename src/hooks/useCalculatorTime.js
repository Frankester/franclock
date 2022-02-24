import { useState } from "react"


const HourToMinutes = hour => hour * 60

const daysToMinutes = (days = 0)=>{
    const hours = days*24
    return hours *60
  }

const useCalculatorTime= (periode, minutes, hours, days=[]) => {
    const [date, setDate] = useState(() => new Date())
   
    const intervalId = setInterval(() => setDate(new Date()), 1000)
    const currentHours = date.getHours()
    const numbersToDates = useDataDays()

    if(days.length !== 0 ){
        const currentDay = numbersToDates[date.getDay()]
        const coincidentDay = days.filter(day => currentDay === day)  
        if (coincidentDay.length !== 0) {
            const timeMin =  periode === 'AM'
            ? HourToMinutes(Number(hours)) + Number(minutes) - date.getMinutes() 
                - HourToMinutes(currentHours === 0 ? 12 : currentHours) 
        
            : HourToMinutes(Number(hours) +12) + Number(minutes) - date.getMinutes() - 
                HourToMinutes(currentHours === 0 ? 12 : currentHours) 
            
        
            const hoursIntervalDec =  (timeMin < 0 ? (timeMin+1440) : timeMin ) /60
            const hoursIntervalDisplay = parseInt(hoursIntervalDec) 
            const minutesInterval = String(hoursIntervalDec).startsWith('0') 
                ? parseInt(hoursIntervalDec*60) 
                :parseInt(( hoursIntervalDec - hoursIntervalDisplay) *60)

                return {hoursIntervalDisplay:hoursIntervalDisplay ,minutesInterval, intervalId}
        } else {
            const currentDateNumber = numbersToDates[currentDay]

            const proxDays = days.map(day => { 
                return numbersToDates[day]
              })
              const minusDay = proxDays.filter(day => day >= currentDateNumber)
            let proxDay = ''
              if( minusDay[0] === undefined || minusDay.length >2){
                proxDay =proxDays[proxDays.length-1]
              } else {
                proxDay = minusDay[0]
              }
              
            const timeMin =  periode === 'AM'
            ? HourToMinutes(Number(hours) ) + Number(minutes) + daysToMinutes(proxDay-currentDateNumber) - date.getMinutes() 
                - HourToMinutes(currentHours === 0 ? 12 : currentHours) 
        
            : HourToMinutes(Number(hours) +12) + Number(minutes) + daysToMinutes(proxDay-currentDateNumber)- date.getMinutes() - 
                HourToMinutes(currentHours === 0 ? 12 : currentHours) 
            
        
            const hoursIntervalDec =  (timeMin < 0 ? (timeMin+1440) : timeMin ) /60
            const hoursIntervalDisplay = parseInt(hoursIntervalDec) 
            const minutesInterval = String(hoursIntervalDec).startsWith('0') 
                ? parseInt(hoursIntervalDec*60) 
                :parseInt(( hoursIntervalDec - hoursIntervalDisplay) *60)
            
                return {hoursIntervalDisplay:hoursIntervalDisplay ,minutesInterval, intervalId}
        }
    } else {
        const timeMin =  periode === 'AM'
        ? HourToMinutes(Number(hours)) + Number(minutes) - date.getMinutes() 
            - HourToMinutes(currentHours === 0 ? 12 : currentHours) 
    
        : HourToMinutes(Number(hours) +12) + Number(minutes) - date.getMinutes() - 
            HourToMinutes(currentHours === 0 ? 12 : currentHours) 
        
    
        const hoursIntervalDec =  (timeMin < 0 ? (timeMin+1440) : timeMin ) /60
        const hoursIntervalDisplay = parseInt(hoursIntervalDec) 
        const minutesInterval = String(hoursIntervalDec).startsWith('0') 
            ? parseInt(hoursIntervalDec*60) 
            :parseInt(( hoursIntervalDec - hoursIntervalDisplay) *60)

            return {hoursIntervalDisplay:hoursIntervalDisplay ,minutesInterval, intervalId}
    }

    
    
}

const useDataDays = () => {
    return  {
        1: 'Mon',
        2: 'Tue',
        3: 'Wed',
        4: 'Thu',
        5: 'Fri',
        6: 'Sat',
        0: 'Sun',
        'Mon': 1,
        'Tue':2,
        'Wed':3,
        'Thu':4,
        'Fri':5,
        'Sat':6,
        'Sun':0
    }
}

const useToday = () =>{
    const numbersToDates = useDataDays()

    return numbersToDates[new Date().getDay()]
}



export {useCalculatorTime, useDataDays, useToday}