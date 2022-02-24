import { useEffect } from "react"
import { useAlarmSets } from "../context/AlarmSettingsContext"
import { AditionalOpStyled, ButtonStyled, ContentModalStyled,ButtonsParent,HeaderStyled } from "../styles/styles-Alarms"

export function Custom({ disableCustom=() => {} }){
    const {setDays} = useAlarmSets()
    useEffect(() => {
        setDays([])
    }, [setDays])

   const handleChange = (e) => {
    e.target.checked === true
       ? setDays(prevChecked =>  [...prevChecked, e.target.id])
       : setDays(prevChecked => prevChecked.filter(day => day !== e.target.id ))
   }
    
    return(
            <ContentModalStyled>
                <AditionalOpStyled>  
                    <HeaderStyled >Repeat Custom</HeaderStyled>
                    <label>
                        Monday 
                        <input type="checkbox" id='Mon' onChange={handleChange}/>
                    </label>
                    <label>
                        Tuesday
                        <input type="checkbox" id='Tue' onChange={handleChange}/>    
                    </label>
                    <label>
                        Wednesday
                        <input type="checkbox" id='Wed' onChange={handleChange}/>
                    </label>
                    <label>
                        Thursday
                        <input type="checkbox"  id='Thu' onChange={handleChange}/>
                    </label>
                    <label>
                        Friday
                        <input type="checkbox" id='Fri' onChange={handleChange} />
                    </label>
                    <label>
                        Saturday
                        <input type="checkbox" id='Sat' onChange={handleChange} />
                    </label>
                    <label>
                        Sunday
                        <input type="checkbox"  id='Sun' onChange={handleChange}/>    
                    </label>
                </AditionalOpStyled>
                <ButtonsParent>
                    <ButtonStyled onClick={disableCustom}>Ok</ButtonStyled>
                    <ButtonStyled onClick={disableCustom}>Cancel</ButtonStyled>
                </ButtonsParent>
            </ContentModalStyled>
    )
}