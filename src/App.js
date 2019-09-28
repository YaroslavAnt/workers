import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './Pages/Login';
import styled from 'styled-components';
import Header from './Layouts/Header';

const Wrapper = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
const StyledMain = styled.main`
  flex-grow: 1;
`

let routes = (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/" exact component={Login} />
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
