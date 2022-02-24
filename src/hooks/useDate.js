import {useState, useEffect, useCallback} from 'react'
import { useTime } from './useTime'

export const useDate = ({ hour24 = null, startCh=null, restart=false }) => {
    const [today, setDate] = useState(new Date())
    const [ch, setCh] = useState(null)
    const [current, setCurrent] = useState(null)

    const { time } = useTime({ hour24, today, startCh })

    const timer =  useCallback((emp) => {
        if(emp === undefined && startCh!== null) {emp = startCh }
        let today2
        let  milli, seconds, minutes, hours
        today2=new Date()
  
        let currentTime = new Date()
        setCurrent(today2 - emp) 
        currentTime.setTime(current)
  
  
        milli = currentTime.getMilliseconds()
        milli = Math.round(milli/10)
        
        seconds = currentTime.getSeconds()
        minutes = currentTime.getMinutes()
        hours = currentTime.getHours() -21
  
        if(milli<10) milli = `0${milli}`
        if(seconds<10) seconds = `0${seconds}`
        if(minutes<10) minutes = `0${minutes}`
  
        setCh(`${hours}:${minutes}:${seconds}:${milli}`)
      }, [startCh, current])
    

    useEffect(() => {
      const interval =  setInterval(() => { 
        setDate(new Date())
      }, 1000)
      if (hour24 === null) clearInterval(interval)
      return () => clearInterval(interval)
    }, [hour24])

    useEffect(() => {
      if (hour24 === null && startCh!== null && restart !== true) {
        const intervalCh = setInterval(() => {
          timer()
        }, 10)
        return () => clearInterval(intervalCh)
      } 
    }, [ hour24,restart,startCh, timer, ch])

    useEffect(() => {
      if(hour24 === null && startCh!== null && restart=== true){
        let emp3 = new Date().getTime() - current
        let currentContinue = new Date().setTime(emp3)

        const intervalCh2 = setInterval(() => {
          timer(currentContinue)
        })

        return () => clearInterval(intervalCh2)
      }
    },[hour24,restart,startCh, timer, current])

    return {
      time,
      ch
    }
  }

  
