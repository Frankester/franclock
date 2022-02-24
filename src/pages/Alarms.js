import { useEffect, useState } from 'react'
import { FloatButtonStyled, AlarmsStyled } from '../styles/styles-Alarms'
import { IconPlus } from '@tabler/icons'
import AddAlarm from '../components/AddAlarm'
import { Alarm } from '../components/Alarm'

import { AlarmSettingsContext } from '../context/AlarmSettingsContext'

export default function Alarms () {
  const [showModal, setShowModal] = useState(false)
  const [alarms, setAlarms] = useState([])


  const click = () => setShowModal(true)
  const closeCurrentModal = ()=>setShowModal(false)


  useEffect(() => {
    setAlarms(JSON.parse(localStorage.getItem('alarms')) || [])
  }, [])

  useEffect(() => localStorage.setItem('alarms', JSON.stringify(alarms))
  , [alarms])

  return (
    <div className='parentAlarm'>
      

        <AlarmsStyled>
          {
              alarms?.map(alarm =>
                  
                <AlarmSettingsContext key={alarm.id} alarm={alarm} >
                  <Alarm   
                    setAlarms={setAlarms}  
                    {...alarm}
                  />
                </AlarmSettingsContext>
                
              )
          }
        </AlarmsStyled>

        {
          showModal
            ? 
            <AlarmSettingsContext>
              <AddAlarm 
                  closeCurrentModal={closeCurrentModal} 
                  setAlarms={setAlarms}   
                />
            </AlarmSettingsContext>
            : null
        }
    
      <FloatButtonStyled onClick={click}>
        <IconPlus strokeWidth='2' width='32' height='32' />
      </FloatButtonStyled>
    </div>
  )
}