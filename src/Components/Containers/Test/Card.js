import React from "react";

const Card = ({ filteredPersons }) => {
  return (
    <div>
      {filteredPersons.map((person, index) => (
        <>
          <div key={index.length}>
            <h2>{person.name}</h2>
            <p>{person.email}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Card;
