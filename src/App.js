

import {Routes} from "./routes/Routes"
import {Navigation} from "./components/navigation/Navigation"
import './App.css'
import {Footer} from './components/footer/Footer'


function App() {
  
  return (
    <div className="wrapper">
      
        <Routes>
          <Navigation />
          <Footer />
        </Routes>
      
    </div>
  );
}

export default App;
