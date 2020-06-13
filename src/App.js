import React from 'react';

import CountriesList from './components/CountriesList'
import CountryDetail from './components/CountryDetail'

import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div style={{ display: 'flex' }}>
      {/* <Route path="/" component={CountriesList}></Route> */}
      <CountriesList></CountriesList>
      <Switch>
        <Route path="/countries/:countryName" render={(props) => <CountryDetail key={props.match.params.countryName} countryName={props.match.params.countryName}></CountryDetail>}></Route>
      </Switch>
    </div>
  );
}

export default App;


















// <Route path="/:cca_thingy" component={CountryDetail} />