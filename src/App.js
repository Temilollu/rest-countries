import React from 'react';
import  HeaderTwo   from './Components/Header/Header-two.jsx'
import './App.css';
import {Switch,Route} from 'react-router-dom';


import FullDetails from './Components/HomePage/FullDetails.component'


class App extends React.Component {
  constructor(){
    super()
       this.state = {
        allCountries : []
       }
     }

     componentDidMount(){
      fetch(`https://restcountries.eu/rest/v2/all`)
      .then(res => res.json())
      .then(data => this.setState({allCountries : data}))
    }
 
  render(){
    return (  
       <div className="App">
        <Switch>
         <Route exact path='/rest-countries' component={HeaderTwo}/>
         <Route  exact path='/rest-countries/:id' 
                 render={ (props) => (
                    <FullDetails
                      {...props}
                      country={this.state.allCountries}
                    />
                  )} />
      </Switch>
       </div>
    )
  }

}

export default App;
