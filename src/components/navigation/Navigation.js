import React from 'react'
import { useWindowDimensions } from '../../shared/hooks/useWindowDimensions'
import NavigationDesktop from './navigationdesktop/NavigationDesktop'
import NavigationMobile from './navigationmobile/NavigationMobile'

export const Navigation = () => {

  const {width} = useWindowDimensions();

  const displayNav = () => {
    return width <= 50 ? <NavigationMobile /> : <NavigationDesktop />
  }

  return (
    <React.Fragment>
      {displayNav()}
    </React.Fragment>
  )
}
