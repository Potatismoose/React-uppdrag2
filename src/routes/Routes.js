import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RoutingPath from './RoutingPaths'
import { HomeView } from '../views/homeview/HomeView'
import { FourOFourView } from '../views/fourofourview/FourOFourView'
import { ContactView } from '../views/contactview/ContactView'

export const Routes = ({children}) => {
  return (
    <BrowserRouter>
    {children}
      <Switch>
        <Route exact path={RoutingPath.contact} component={ContactView} />
        <Route exact path={RoutingPath.home} component={HomeView} />
        <Route component={FourOFourView} />
      </Switch>
    </BrowserRouter>
  )
}
