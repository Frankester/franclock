import Timer from '../components/Timer'
import { useState } from 'react'
import { Wraper } from '../components/Wraper'
import { ButtonStyled } from '../styles/styles-Hour'

export default function Home () {
  const [hour24, setHour24] = useState(true)

  const handleClick = () => {
    setHour24(prevHour24 => !prevHour24)
  }

  return (
    <div className='App'>
      <Wraper>
        <Timer hour24={hour24} />
      </Wraper>

      <ButtonStyled onClick={handleClick}> {
                hour24
                  ? 'Disable 24 hours'
                  : 'Set 24 hours'
                }
      </ButtonStyled>
    </div>
  )
}
