import {useHistory} from 'react-router'
import {useLocation} from 'react-router-dom'
import './NavButton.css'

export const NavButton = (props) => {
  const history = useHistory()
  const location = useLocation()
 
  return (
    <li 
    className="nav-btn" 
    onClick={()=>history.push(
      {pathname: props.path, 
        state: location.pathname 
      })}
    >
    
    <span className="menulink">
      {props.buttonTxt}
    </span>
    
    </li>
  )
}