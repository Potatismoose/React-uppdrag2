import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useState} from 'react'
import RoutingPath from './RoutingPaths'
import { HomeView } from '../views/homeview/HomeView'
import { FourOFourView } from '../views/fourofourview/FourOFourView'
import { Pokedex } from '../views/pokedexview/Pokedex'
import { OffsetContext } from "../shared/provider/OffsetProvider"



export const Routes = ({children}) => {
  const navigation = 0
  const footer = 1
  const [contextOffsetValue, setContextOffsetValue] = useState(0)

  return (
    <BrowserRouter>
      <OffsetContext.Provider value={[contextOffsetValue, setContextOffsetValue]}>
        {children[navigation]}
        <Switch>
          <Route exact path={RoutingPath.pokedex} component={Pokedex} />
          <Route exact path={RoutingPath.home} component={HomeView} />
          <Route component={FourOFourView} />
        </Switch>
        {children[footer]}
      </OffsetContext.Provider>
    </BrowserRouter>
  )
}
