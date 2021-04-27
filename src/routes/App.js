import React from 'react';
import {BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Home from '../containers/Home';
import AboutMe from '../containers/AboutMe';
import Projects from '../containers/Projects';
import Header from '../components/Header';
import styled from 'styled-components'
import '../app.css'
import Contact from '../containers/Contact';
const AppStyled = styled.div`
 
  


`
const App =()=>{
  return(
    <Router>
        <AppStyled>
        <Header/>

          <Switch>
            

                  <Route exact path="/" component={Home}/>
                  <Route exact path="/aboutMe" component={AboutMe}/>
                  <Route exact path="/projects" component={Projects}/>
                  <Route exact path="/contact" component={Contact}/>
                  
          </Switch>
        </AppStyled>
    
    </Router>
  )
}


export default App;