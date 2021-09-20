import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useState, useContext} from 'react'
import RoutingPath from './RoutingPaths'
import { HomeView } from '../views/homeview/HomeView'
import { FourOFourView } from '../views/fourofourview/FourOFourView'
import { Pokedex } from '../views/pokedexview/Pokedex'
import CreateMyContext from '../shared/global/Context/CreateContext'


export const Routes = ({children}) => {
  const navigation = 0
  const footer = 1
  const [value, setValue] = useState()

  return (
    <BrowserRouter>
    <CreateMyContext.Provider value={{value, setValue}}>
    {children[navigation]}
    
      <Switch>
        <Route exact path={RoutingPath.pokedex} component={Pokedex} />
        <Route exact path={RoutingPath.home} component={HomeView} />
        <Route component={FourOFourView} />
      </Switch>
    {children[footer]}
    </ CreateMyContext.Provider>
    </BrowserRouter>
  )
}
