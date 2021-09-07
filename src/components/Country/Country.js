import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, population, region, flag } = props.country;
  const handleCountry = props.handleCountry;
  return (
    <div className="country">
      <h4>This is a {name}</h4>
      <img className="img" src={flag} alt="" />
      <p>Population: {population}</p>
      <p>
        <small>Region: {region}</small>
      </p>
      <button onClick={() => handleCountry(props.country)} className="btn">
        Add country
      </button>
    </div>
  );
};

export default Country;
