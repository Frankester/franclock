import './App.css'
import { Switch, Route, Link, useLocation } from 'react-router-dom'
import { IconAlarm, IconClock, IconView360 } from '@tabler/icons'
import Home from './pages/Home'
import Alarms from './pages/Alarms'
import Chronometer from './pages/Chronometer'
import { NavStyled } from './styles/styles-Alarms'

function App () {
  const { pathname } = useLocation()
  const id = pathname.slice(1)

  return (
    <div className='App'>
      <header>
        <NavStyled>
          <Link to='/alarm'>
            <IconAlarm width='32' height='32' color={id === 'alarm' ? '#00f' : 'grey'} />
          </Link>
          <Link to='/'>
            <IconClock width='32' height='32' color={id === '' ? '#00f' : 'grey'} />
          </Link>
          <Link to='/world'>
            <IconView360 width='32' height='32' color={id === 'world' ? '#00f' : 'grey'} />
          </Link>
          
          
        </NavStyled>
      </header>

      <Switch>
        <Route path='/alarm'>
          <Alarms />
        </Route>
        <Route path='/world'>
          <Home />
        </Route>
        <Route path='/'>
          <Chronometer />
        </Route>
      </Switch>

    </div>
  )
}

export default App
