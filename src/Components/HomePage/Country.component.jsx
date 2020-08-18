import React from 'react';
import '../../App.css'
// import FullDetails from './FullDetails.component'

// import HeaderTwo from '../Header/Header-two'
import { withRouter } from 'react-router-dom';


 
class Country extends React.Component{
    constructor(props){
         super()
         this.state = {
          value : true
         }
    }
 
    render(){ 
        const { countryData, history, match  } = this.props 
        console.log(this.props)
        return( 
            <div className="col mb-4" onClick={() => history.push(`${match.url}/${countryData.name}`)} >
            <div className="card">
              <img src={countryData.flag} className="card-img-top" alt="..."/>
              <div className="card-body">
              <p> Name : {countryData.name}</p>
               <p>Population {countryData.population}</p>
               <p>Capital : {countryData.capital}</p>
               <p>Region : {countryData.region}</p> 
              </div>
            </div>
          </div>
        )
    }
}
export default withRouter(Country) ;