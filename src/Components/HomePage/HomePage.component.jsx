import React from 'react';
import Country from './Country.component'

import '../../App.css'

const HomePage = (props) => {
    return ( 
        <div className="row row-cols-1 row-cols-md-3 envelope">
           {props.countries.map(country =>  <Country key={country.name} countryData={country} />)}
        </div>
     );
}
 
export default HomePage;