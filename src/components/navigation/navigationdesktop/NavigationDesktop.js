import {useHistory} from 'react-router'
import RoutingPaths from '../../../routes/RoutingPaths'

export const NavigationDesktop = () => {
  const history = useHistory()
  return (
    <nav>
     <button onClick={()=>history.push(RoutingPaths.home)}>Hem</button>
     <button onClick={()=>history.push(RoutingPaths.contact)}>Contact</button>
    </nav>
  )
}

export default NavigationDesktop
