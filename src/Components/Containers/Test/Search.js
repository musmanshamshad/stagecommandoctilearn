import React, { useState } from 'react';
import Card from './Card';


const Search = ({ details }) => {

    const [searchField, setSearchField] = useState("");
    const filteredPersons = details.filter(
        person => {
          return (
            person.name.toLowerCase().includes(searchField.toLowerCase()) ||
            person.email.toLowerCase().includes(searchField.toLowerCase())
          );
        }
      );
      const handleChange = e => {
        setSearchField(e.target.value);
      };

  return (
    <section >
      <div >
        <h2 >Search your course</h2>
      </div>
      <div >
        <input 
          type = "search" 
          placeholder = "Search People" 
          onChange = {handleChange}
        />
      </div>
      <Card filteredPersons={filteredPersons} />
  
    </section>
  )
}

export default Search