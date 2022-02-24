import { LabelAlarmStyled, OptionsStyled } from "../styles/styles-Alarms";
import { Selector } from "./Selector";
import { useAlarmData, useAlarmSets } from "../context/AlarmSettingsContext";



function OptionsAddAlarm({disableCustom=()=>{}, customRepeat=()=>{}}){

    const alarmData = useAlarmData()
    const alarmSets = useAlarmSets()
    

    const changeLabel = e => alarmSets.setLabel(e.target.value)
    const changeVibrate = () => {alarmSets.setVibrate(prevState => !prevState)}
    const changeDeleteAfter = () => { alarmSets.setDeleteAfter(prevState => !prevState)}
    

    return (
        <OptionsStyled>
                <label>
                  <b>Ringtone </b>
                  <Selector
                    Brand='Rington'
                    options={['Birds', 'Nature', 'Chicken', 'iPhone', 'Disable']}
                    wordDefault='Disable'
                    setValue={alarmSets?.setRingtone}
                    value={alarmData?.ringtone}
                    setAudio={alarmSets.setAudio}
                  />
                </label>

                <label>
                  <b>Repeat </b>
                  <Selector
                    Brand='Repeat'
                    options={['Once', 'Daily', 'Mon to Fri', 'Custom']}
                    wordDefault='Once'
                    wordAction='Custom'
                    Action={customRepeat}
                    disableAction={disableCustom}
                    value={alarmData.repeat}
                    setValue={alarmSets.setRepeat}
                    setDays={alarmSets.setDays}
                  />
                </label>
                {
                    alarmData.repeat === 'CUSTOM' && alarmData.days?.length !== 0
                        ? (<p>Custom repeat: {alarmData.days?.join(', ')}</p>)
                        : null
                }
                <label>
                  <b>Vibrate when alarm sounds </b>
                  <input id='vibrate' 
                    type='checkbox' 
                    value={alarmData.vibrate} 
                    defaultChecked={alarmData.vibrate} 
                    onChange={changeVibrate} 
                  />
                </label>

                <label>
                  <b>Delete after goes off </b>
                  <input type='checkbox' 
                    value={alarmData.deleteAfter} 
                    defaultChecked={alarmData.deleteAfter} 
                    onChange={changeDeleteAfter} 
                  />
                </label>

                <label>
                  <b style={{padding: '10px 0'}}>Label </b>
                  <LabelAlarmStyled type='text'
                    placeholder='Enter label'
                    value={alarmData?.brand}
                    onChange={changeLabel}
                    autoFocus
                  />
                </label>
        </OptionsStyled>
    )
}

export default OptionsAddAlarm
