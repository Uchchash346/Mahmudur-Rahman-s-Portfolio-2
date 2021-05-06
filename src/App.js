import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Banner from './components/Banner/Banner';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <Router>
      <Route>
        <Navbar></Navbar>
      </Route>
      <Route>
        <Banner></Banner>
      </Route>
      <Route>
        <Skills></Skills>
      </Route>
      <Route>
        <Projects></Projects>
      </Route>
      <Route>
       <Blogs></Blogs>
      </Route>
      <Route>
       <Contact></Contact>
      </Route>
      <Route>
       <Footer></Footer>
      </Route>
      
    </Router>
  );
}

export default App;
