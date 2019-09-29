import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/Login';
import styled from 'styled-components';
import Header from './layouts/Header';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

const Wrapper = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
const StyledMain = styled.main`
  flex-grow: 1;
  padding: 0 20px;
`

let routes = (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/" exact component={Dashboard} />
  </Switch>
);

function App() {
  return (
    <Wrapper>
      <Router>
        <Header />
        <StyledMain>
          {routes}
        </StyledMain>
      </Router>
    </Wrapper>

  );
}

export default App;
