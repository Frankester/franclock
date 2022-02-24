import { useState } from 'react'
import { ModalStyled, ContentModalStyled, TrashParent, TrashButton } from '../styles/styles-Alarms'
import { Custom } from './Custom'
import SetClockTime from './Alarms-components/SetClockTime'
import OptionsAddAlarm from './OptionsAddAlarm'
import HeadAddAlarm from './HeadAddAlarm'
import { useAlarmData } from '../context/AlarmSettingsContext'
import { IconTrash } from '@tabler/icons'

 function AddAlarm ({ closeCurrentModal = ()=>{}, setAlarms = ()=>{}, ActualTime=['',''], 
     ActualPeriode='',state='', idAlarm='', ActualDisabled=false}) {

      const alarmData = useAlarmData()
      
    const [periode, setPeriode] = useState(()=>{
      const now = new Date().getHours() 
      return ActualPeriode || (now >12 ? 'PM': 'AM')
    })

  const [ActualHours, ActualMinutes] = ActualTime
  const [minutes, setMinutes] = useState(() => ActualMinutes || new Date().getMinutes())

  const [hours, setHours] = useState(() => {
    const now = new Date().getHours()
    return ActualHours  || String(now > 12 ? now -12 : now === 0 ? 12 : now)
  })
    
  const [show, setShow] = useState(false)

  const handleDelete = () => {
    closeCurrentModal()

    setAlarms(alarms=>{
      const notDeleted = alarms.filter(alarm => alarm.id !== idAlarm)
      return [...notDeleted]
    })
  }

  const addAlarm = () => {
    closeCurrentModal()
   
    setAlarms(alarms => {
     
      return [...alarms, {
        id: new Date().getMilliseconds(),
        time: `${hours}:${minutes}`,
        periode: periode, 
        actualDisabled: ActualDisabled,
        ...alarmData
      }]
    })
  }

  const updateAlarm= () => {
    closeCurrentModal()

      setAlarms(alarms =>{
          const actualAlarm = alarms.find(alarm => alarm.id === idAlarm)
          const alarmsNotChange = alarms.filter(alarm => alarm.id !== idAlarm) 
          
            return (
            [...alarmsNotChange, {...actualAlarm, 
                time: `${hours}:${minutes}`,
                periode: periode,
                actualDisabled: ActualDisabled,
                ...alarmData?.alarmData
            }
            ])
      } )
  }

  const disableCustom = () => setShow(false)
  const customRepeat = ()=>setShow(true)


  return (
    <ModalStyled>
      <ContentModalStyled>
        <HeadAddAlarm 
          closeCurrentModal={closeCurrentModal}
          addAlarm={addAlarm}
          updateAlarm={updateAlarm}
          state={state}
          periode={periode} 
          minutes={minutes} 
          hours={hours}
        />
        
        <SetClockTime
          periode={periode}
          hours={hours}
          minutes={minutes}
          setPeriode={setPeriode}
          setMinutes={setMinutes}
          setHours={setHours}
        />

        <OptionsAddAlarm 
            disableCustom={disableCustom}
            customRepeat={customRepeat}
        />
        {
          state ==='update' ? 
          <TrashParent>
            <TrashButton onClick={handleDelete}>
              <IconTrash />
            </TrashButton>
          </TrashParent>
        :null
        }
        
      </ContentModalStyled>
      {
          show
          ? <Custom disableCustom={disableCustom} />
          :null
      }
       

    </ModalStyled>
  )
}

export default AddAlarm