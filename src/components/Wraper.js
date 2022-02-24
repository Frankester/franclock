import { StyledTimerSmall, StyledTimer } from "../styles/styles-Chronometer"

export function Wraper({ flags = [], children }) {

    return (
        <>
            {
                flags.length !== 0
                    ? (
                        <StyledTimerSmall>
                            {children}
                            <small className='leyend'>Current timing</small>
                        </StyledTimerSmall>
                    )
                    : (
                        <StyledTimer>
                            {children}
                        </StyledTimer>
                    )
            }
        </>
    )
}