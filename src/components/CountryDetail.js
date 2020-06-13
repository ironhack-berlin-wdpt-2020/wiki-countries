import React from 'react';

import { Link } from 'react-router-dom'

import axios from 'axios'

class CountryDetail extends React.Component {

  state = {
    country: null
  }

  componentDidMount() {
    axios.get('https://countries.tech-savvy.tech/countries/' + this.props.countryName).then((response) => {
      console.log(response.data)
      this.setState({
        country: response.data[0]
      })
    })
  }

  formSubmitHandler = (event) => {
    event.preventDefault()

    axios.post('https://countries.tech-savvy.tech/countries', this.state).then((response) => {

    })

  }

  render() {

    // let countryIdx = countries.findIndex(c => c.cca3 === props.match.params.cca_thingy)

    // let country = countries[countryIdx]
    // let nextCountry = countries[countryIdx + 1]

    return (
      <div>
        {
          this.state.country
            ? <div>country's name : {this.state.country.name.common} </div>
            : "LOADING ..."
        }
        {/* <div>this should show the country with the cca3-code : {country.name.common} </div>
        <div> the next country is : <Link to={"/countries/" + nextCountry.cca3}> {nextCountry.name.common} </Link> </div> */}
      </div>
    );
  }
}

export default CountryDetail;
