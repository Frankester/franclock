import { useImperativeHandle, forwardRef } from "react"
import { useDate } from "../hooks/useDate"
import { StyledTimeParent } from "../styles/styles-Chronometer"

 function Timer({ hour24 = null, startCh=null, force=false, restart=false }, ref){
    const { time, ch } = useDate({ hour24, startCh, restart })
    
    useImperativeHandle(ref, () => ch)

    if(force === true) {
        return(
            <StyledTimeParent>
                {'00:00:00'} 
            </StyledTimeParent>
        )
    }
    return (
        <StyledTimeParent>
            {( time === '00:00:00' && ch !== null && ch !== undefined) ? ch : time }
        </StyledTimeParent>
    )
}

export default forwardRef(Timer)