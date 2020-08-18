import React from 'react';
import  { Header  } from './Header.component'

class HeaderTwo extends React.Component {
    constructor(){
      super()
       this.state = {
         allCountries : [],
         value : '',
         thread : true
       }
    }
    
    componentDidMount(){
      fetch(`https://restcountries.eu/rest/v2/all`)
      .then(res => res.json())
      .then(data => this.setState({allCountries : data}))
    }
  
    handleChange = (e) =>{
      console.log(e.target.value)
     this.setState({value : e.target.value, thread : true})
    }
    handleThread  = (e) => {
      this.setState({value : e.target.value, thread : false})
    }
    render(){
       const {allCountries, value} = this.state
       let filtered = allCountries.filter( count => {
        return this.state.thread ?
         count.name.toLowerCase().includes(value.toLowerCase()) : 
         count.region.toLowerCase().includes(value.toLowerCase())
      })
    
        return (
      <div className="App">
        <Header handleChange={this.handleChange} countries={filtered} thread={this.handleThread}/>
      </div>
    );
    }
  
  }
  
  export default HeaderTwo;