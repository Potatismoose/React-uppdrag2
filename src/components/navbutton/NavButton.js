import {useHistory} from 'react-router'
import './NavButton.css'

export const NavButton = (props) => {
  const history = useHistory()
     
  return (
    <li className="nav-btn" onClick={()=>history.push(props.path)}><span className="menulink">{props.buttonTxt}</span></li>
  )
}