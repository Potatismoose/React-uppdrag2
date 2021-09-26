import './FourOFourView.css'
import teamRocket from '../../shared/images/team-rocket.png'

export const FourOFourView = () => {
  return (
    <div className="main">
      <div className="yellow--top">
      
      <h1>Oh no, team Rocket has stolen the page!!</h1>
      </div>
      <article className="four0four">
      <h1>404 - Page can not be displayed</h1>  
      <img src={teamRocket} alt="Team rocket" />
      <p>You have probably clicked a broken link or typed the wrong adress in the adress bar. Click the home button and you'll be home free!</p>
      
      </article>
      
    </div>
       
    
  )
}
