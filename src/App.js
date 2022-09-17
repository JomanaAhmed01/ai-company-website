import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePageCompound from './compounds/HomePageCompound'
import TechnologyPageCompound from './compounds/TechnologyPageCompound'
import AboutPageCompound from './compounds/AboutPageCompound'
import CareersPageCompound from './compounds/CareersPageCompound'
import SubscribePageCompound from './compounds/SubscribePageCompound'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePageCompound />
        </Route>

        <Route path="/TechnologyPageCompound">
          <TechnologyPageCompound />
        </Route>

        <Route path="/AboutPageCompound">
          <AboutPageCompound />
        </Route>

        <Route path="/CareersPageCompound">
          <CareersPageCompound />
        </Route>

        <Route path="/SubscribePageCompound">
          <SubscribePageCompound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
