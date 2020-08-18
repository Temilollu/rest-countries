import React from 'react';
const NationDetails = (props) => {
    
    const {nativeName,name, flag,population, region, subregion, capital, currencies, languages, topLevelDomain, } = props.nation
    console.log(languages.map(language => language.name))
    return ( 
        <div className="containers">
           <div className="flag">
              <img src={flag} alt=""/></div>
              <div className="details">
                  <div className="first">
                    <h1>{name}</h1>
                    <p>Population : {population}</p>
                    <p>Native name : {nativeName} </p>
                    <p>Region : {region}</p>
                    <p>Sub Region : {subregion} </p>
                    <p>Capital : {capital}</p>            
              </div>
              <div className="second">
                  <p>Top Level Domainm :{topLevelDomain}</p>
                  <p>Currencies : {currencies.map( currency => currency.name)}</p>
                  <p>Languages : {languages.map(language => language.name + ' ')}</p>
              </div>
           </div> 
        </div>
     );
}
 
export default NationDetails;