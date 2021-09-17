import RoutingPaths from '../../../routes/RoutingPaths'
import {NavButton} from '../../navbutton/NavButton'
import {SiteHeading} from '../../siteheading/SiteHeading'
import './NavigationDesktop.css'

export const NavigationDesktop = () => {

  
  return (
    <header>
      <SiteHeading />
      <nav className="navigation">
      <ul>
        <NavButton buttonTxt="Home" path={RoutingPaths.home} />
        <NavButton buttonTxt="Pokedex" path={RoutingPaths.pokedex} />
      </ul>
      </nav>
    </header>
  )
}

export default NavigationDesktop
