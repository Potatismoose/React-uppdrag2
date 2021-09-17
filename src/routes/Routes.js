import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RoutingPath from './RoutingPaths'
import { HomeView } from '../views/homeview/HomeView'
import { FourOFourView } from '../views/fourofourview/FourOFourView'
import { Pokedex } from '../views/pokedexview/Pokedex'
import CreateContext from '../shared/global/Context/CreateContext'

export const Routes = ({children}) => {
  return (
    <BrowserRouter>
    <CreateContext.Provider>
    {children}
      <Switch>
        <Route exact path={RoutingPath.pokedex} component={Pokedex} />
        <Route exact path={RoutingPath.home} component={HomeView} />
        <Route component={FourOFourView} />
      </Switch>
    </CreateContext.Provider>
    </BrowserRouter>
  )
}
