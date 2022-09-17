import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import HomePageCompound from './compounds/HomePageCompound'
// import TechnologyPageCompound from './compounds/TechnologyPageCompound'
// import AboutPageCompound from './compounds/AboutPageCompound'
// import CareersPageCompound from './compounds/CareersPageCompound'
import SubscribePageCompound from './compounds/SubscribePageCompound'

function App() {
  return (
    <div className="App">
      {/* <HomePageCompound /> */}
      {/* <TechnologyPageCompound /> */}
      {/* <AboutPageCompound /> */}
      {/* <CareersPageCompound /> */}
      <SubscribePageCompound />
    </div>
  );
}

export default App;
