


//react
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';

//pages
import Dashboard from './pages/Dashboard.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx'
import Responsibilities from './pages/Responsibilities.jsx';
import Highlights from './pages/Highlights.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import TimestampGenerator from './pages/TimestampGenerator.jsx';
import Beta from './pages/Beta.jsx';
import Legal from './pages/Legal.jsx';
import Deployments from './pages/QmcApprovedEvents.jsx';

//test pages
import TimestampGeneratorTest from './Test/TimestampGenerator.jsx';

//assets


//utils
import serverObject from "./config.js"

function App() {
  return (
    <Router >
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route path="/Dashboard" exact>
              <Dashboard />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/Services" exact>
              <Services />
            </Route>
            <Route path="/Responsibilities" exact>
              <Responsibilities />
            </Route>
            <Route path="/Highlights" exact>
              <Highlights />
            </Route>
            <Route path="/Timestamp" exact>
              <TimestampGenerator />
            </Route>
            <Route path="/TimestampGenerator" exact>
              <TimestampGenerator />
            </Route>
            <Route path="/Beta" exact>  
              <Beta />
            </Route>
            <Route path="/Beta/TimestampGenerator" exact>  
              <TimestampGeneratorTest />
            </Route>
            <Route path="/Legal" exact>  
              <Legal />
              
            </Route>
            <Route path="/Deployments" exact>  
              <Deployments />
            </Route>

            <Route path="*" exact>
              <PageNotFound />
            </Route>
          </Switch>
  
        </div>
        <br />
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
