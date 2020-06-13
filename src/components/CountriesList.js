import React from 'react';

import { Link } from 'react-router-dom'

import axios from 'axios'

// https://countries.tech-savvy.tech/countries

class CountriesList extends React.Component {

  state = {
    countriesArr: []
  }

  // happens after the first render (after has been added to DOM)
  // (2) step (because if componentDidMount is there, it always gets called after first render)
  componentDidMount() {
    // (3) start requesting data from Backend
    axios.get('https://countries.tech-savvy.tech/countries').then((resp) => {
      console.log(resp.data)
      // setState always re-renders the component
      // (4) set State after data from Backend received
      this.setState({
        countriesArr: resp.data
      })
    })
  }

  // (1) step (this component is included in App.js  (this.state.countriesArr is empty))
  // (5) step (re-render happens because setState was called (now this.state.countriesArr is filled with data))
  render() {

    let imgUrl = "https://lh3.googleusercontent.com/proxy/p4BDqPZZu-xpIhvFWR9_JpigU9nxOVeXpygDYtKbZ1pBj3t8GOCNMvVaXycwG-AjMuZO0D_4sBCzBZO7e7RgUP-6YMiNTKfX8J3XRCi2zciUgH4IlLSZIincBhpljWk"

    return (
      <div className="App" >
        <ul>
          {
            this.state.countriesArr.length > 0
              ? this.state.countriesArr.map(c => <li key={c.cca3}><Link to={"/countries/" + c.name.common}>{c.name.common}</Link></li>)
              : <img src={imgUrl}></img>
          }
        </ul>
      </div>
    );
  }

}

export default CountriesList;
