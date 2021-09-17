import {Routes} from "./routes/Routes"
import {Navigation} from "./components/navigation/Navigation"
import './App.css'


function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Navigation />
      </Routes>
    </div>
  );
}

export default App;
