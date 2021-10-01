import React,{useState, useEffect} from 'react'
import './PokemonChart.css'

export const PokemonChart = ({pokemon, keyvalue}) => {
  
  const [currentPm, setCurrentPm] = useState(pokemon)
  const [hp, setHp] = useState()
  const [attack, setAttack] = useState()
  const [speed, setSpeed] = useState()
  const [specialAttack, setSpecialAttack] = useState()
  const [defence, setDefence] = useState()
  const [doneSetting, setDoneSetting] = useState(false)

useEffect(() => {
  if(currentPm != null 
    && hp === 0 
    && specialAttack === 0
    && attack === 0
    && defence === 0
    && speed === 0
    && doneSetting === false)
  {
    setSpecialAttack(currentPm?.stats[3]?.base_stat)
    setHp(currentPm?.stats[0]?.base_stat)
    setAttack(currentPm?.stats[1]?.base_stat)
    setDefence(currentPm?.stats[2]?.base_stat)
    setSpeed(currentPm?.stats[5]?.base_stat)
    
  }
  else{
    setCurrentPm(pokemon)
  }
}, [currentPm, hp])

useEffect(() => {
  if( hp !== 0 
    && specialAttack !== 0
    && attack !== 0
    && defence !== 0
    && speed !== 0)
  {
    setTimeout(() => {
      setDoneSetting(true)
    }, 300);
    
  }
}, [speed, hp, specialAttack, attack, defence])



useEffect(() => {
    setSpecialAttack(0)
    setHp(0)
    setAttack(0)
    setDefence(0)
    setSpeed(0)
    setDoneSetting(false)
    setCurrentPm(pokemon)
    return () =>{
      setCurrentPm(null)
      setDoneSetting(false)
    }
}, [])

  return (
    <div className="chart" key={keyvalue}>
      {/* HP */}
      <div className="chart--and--text">
      
        <ul id="hp" className="main--ul">
          <li className="bar--container health">
        
            <ul className="second--ul">
              <li className="bar">
              </li>
              <li className="bar">
              </li>
              <li className="bar">
              </li>
              <li className="bar">
              </li>
              <li className="bar">
              </li>
              <li className="bar">
              </li>
              <li className="bar">
              </li>
              <li className="bar">
              </li>
              <li className="bar">
              </li>
              <li className="bar">
              </li>
            </ul>
            <div className="value hp--bar" 
              style={doneSetting ? {height: 'calc((150 / 255) *' + hp +'px)'} 
              : {height: 'calc((150 / 255) * 0px)'}}>
            <span 
            className="chart--text" 
          >{hp}
          </span></div>
            
          </li>
        </ul>
        {currentPm.stats[0].stat.name}
      </div>

    {/* Attack */}
    <div className="chart--and--text">
      
      <ul id="attack" className="main--ul">
        <li className="bar--container attack">
      
          <ul className="second--ul">
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
          </ul>
          <div className="value attack--bar" style={doneSetting ? {height: 'calc((150 / 255) *' + attack +'px)'} 
              : {height: 'calc((150 / 255) * 0px)'}}>
          <span 
            className="chart--text" 
          >{attack}
          </span></div>
          </li>
        </ul>
        {pokemon.stats[1].stat.name}
      </div>


    {/* Special Attack */}
    <div className="chart--and--text">
      
      <ul id="special--attack" className="main--ul">
        <li className="bar--container special--attack">
      
          <ul className="second--ul">
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
          </ul>
          <div 
          className="value special--attack--bar" 
          style={doneSetting ? {height: 'calc((150 / 255) *' + specialAttack +'px)'} 
              : {height: 'calc((150 / 255) * 0px)'}}>
            <span 
            className="chart--text" 
            >
              {specialAttack}
            </span>
          </div>
        </li>
      </ul>
      s. attack
    </div>

    {/* Decence */}
    <div className="chart--and--text">
      
      <ul id="defence" className="main--ul">
        <li className="bar--container defence">
      
          <ul className="second--ul">
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
            <li className="bar">
            </li>
          </ul>
          <div className="value defence--bar" style={doneSetting ? {height: 'calc((150 / 255) *' + defence +'px)'} 
              : {height: 'calc((150 / 255) * 0px)'}}>
          <span 
            className="chart--text" 
          >{defence}
          </span>
          </div>
          </li>
        </ul>
        {pokemon.stats[2].stat.name}
      </div>

      {/* Speed */}
      <div className="chart--and--text">
      
        <ul id="speed" className="main--ul">
          <li className="bar--container speed">
        
            <ul className="second--ul">
              <li className="bar">
              </li>
              <li className="bar">
              </li>
              <li className="bar">
              </li>
              <li className="bar">
              </li>
              <li className="bar">
              </li>
              <li className="bar">
              </li>
              <li className="bar">
              </li>
              <li className="bar">
              </li>
              <li className="bar">
              </li>
              <li className="bar">
              </li>
              <li className="bar">
              </li>
              <li className="bar">
              </li>
              <li className="bar">
              </li>
              <li className="bar">
              </li>
              <li className="bar">
              </li>
            </ul>
            <div 
            className="value speed--bar" 
            style={doneSetting ? {height: 'calc((150 / 255) *' + speed +'px)'} 
              : {height: 'calc((150 / 255) * 0px)'}}>
              <span 
              className="chart--text" 
              >
                {speed}
              </span>
            </div>
          </li>
        </ul>
        {pokemon.stats[5].stat.name}
      </div>

      
    </div>
  )
}
