import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RoutingPath from './RoutingPaths'
import { HomeView } from '../views/homeview/HomeView'
import { FourOFourView } from '../views/fourofourview/FourOFourView'
import { Pokedex } from '../views/pokedexview/Pokedex'
import { DetailsView } from '../views/detailsview/DetailsView'

export const Routes = ({children}) => {
  const navigation = 0
  const footer = 1
  
  return (
    <BrowserRouter>
      {children[navigation]}
      <Switch>
        <Route exact path={RoutingPath.pokedex} component={Pokedex} />
        <Route exact path={RoutingPath.home} component={HomeView} />
        <Route exact path={RoutingPath.details} component={DetailsView} />
        <Route component={FourOFourView} />
      </Switch>
      {children[footer]}
    </BrowserRouter>
  )
}
