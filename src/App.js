import React, { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Country from "./components/Country/Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleCountry = (country) => {
    const newCaert = [...cart, country];
    setCart(newCaert);
  };
  return (
    <div className="text">
      <h1>Country loaded: {countries.length}</h1>
      <h2>Country added {cart.length}</h2>
      <Cart cart={cart}></Cart>
      <ul className="">
        {countries.map((country) => (
          <Country
            handleCountry={handleCountry}
            country={country}
            key={country.alpha3Code}
          ></Country>
        ))}
      </ul>
    </div>
  );
}

export default App;
