import { useRef, useState } from 'react'
import { IconPlayerPlay, IconSquare, IconPlayerPause, IconPennant } from '@tabler/icons'
import Timer from '../components/Timer'
import { Wraper } from '../components/Wraper'
import { FloatButtonStyled } from '../styles/styles-Alarms'
import { StyledContent } from '../styles/styles-Chronometer'

const center = {
  top: 'calc(50% + 200px)',
  left: 'calc(50% - 30px)'
}

const left = {
  top: 'calc(50% + 200px)',
  left: 'calc(50% - 70px)'
}

const right = {
  top: 'calc(50% + 200px)',
  left: 'calc(50% + 10px)'
}

export default function Chronometer () {
  const [className, setClass] = useState('visible')
  const [pause, setPause] = useState(false)
  const [flags, setFlags] = useState([])
  const [startCh, setStartCh] = useState(null)
  const [force, setForce] = useState(false)
  const [restart, setRestart] = useState(false)
  const timerRef = useRef(null)

  const clickStart = () => {
    setClass('not-visible')

    // iniciaria el contador
    setStartCh(new Date())
    setForce(false)
  }
  const clickPause = () => {
    setPause(prevState => !prevState)
    // pausar el contador
    setStartCh(null)
    setRestart(false)
  }
  const clickStop = () => {
    setPause(false)
    setClass('visible')
    setFlags([])
    // setea el contador a 00:00:00
    setStartCh(null)
    setForce(true)
    setRestart(false)
  }
  const clickRestart = () => {
    setPause(false)
    setClass('not-visible')
    // reinicia el contador
    setStartCh(new Date())
    setRestart(true)
  }
  const clickFlag = () => {
    setFlags([...flags, timerRef.current])
  }

  return (
    <div className='adjust'>
      <StyledContent>
        <Wraper flags={flags}>
          <Timer startCh={startCh} force={force} restart={restart} ref={timerRef} />
        </Wraper>

        <ul className='flags'>
          {
                        flags.map((flag, index) => {
                          return <li key={index}>{flag}</li>
                        })
                    }
        </ul>
      </StyledContent>

      <FloatButtonStyled className={className} style={center}>
        <IconPlayerPlay onClick={clickStart} />
      </FloatButtonStyled>

      <FloatButtonStyled className={className === 'visible' ? 'not-visible' : 'visible'} style={left}>
        {
                    pause
                      ? <IconSquare onClick={clickStop} />
                      : <IconPennant onClick={clickFlag} />
                }
      </FloatButtonStyled>
      <FloatButtonStyled className={className === 'visible' ? 'not-visible' : 'visible'} style={right}>
        {pause
          ? (
            <IconPlayerPlay onClick={clickRestart} />
            )
          : <IconPlayerPause onClick={clickPause} />}
      </FloatButtonStyled>

    </div>
  )
}
