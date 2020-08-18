import React from 'react';
import HomePage from '../HomePage/HomePage.component'

export const Header = (props) => {
      const {handleChange, countries, thread }  = props
    return (
     <div className='apps'>
       <div className="main-header">
         <h1>Where in the world?</h1>
       </div>
       <div className="header">
         <div className="svg">
         <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
         <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
       </svg>
         </div>
          <input type="text" onChange={handleChange} placeholder="Search for a country..."/>
        <select onChange={thread}>
            <option value="">Filter By Region:</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="America">America</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
    </select>
       </div>
       
        {countries.length  !== 0 && <HomePage countries={countries}/> } 
      </div> 
    )
  
   
}
