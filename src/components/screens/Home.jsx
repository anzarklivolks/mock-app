import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../redux/actions/countryAction";
import { Spinner } from "reactstrap";
import SocialMedia from "./SocialMedia";
import { Menu, X } from "react-feather";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.loading);
  const error = useSelector((state) => state.countries.error);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const filteredCountries =
    filter === "All"
      ? countries
      : countries.filter((country) => country.region === filter);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  const hamburgerMenu = (
    <Menu size={24} className="menu" onClick={() => setOpen(!open)} />
  );
  const closeMenu = (
    <X size={24} className="menu" onClick={() => setOpen(!open)} />
  );

  if (loading) {
    return (
      <div className="text-center">
        <Spinner color="primary" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="wrapper">
      <div className="filter-buttons normal-nav">
        <h1 className="heading">Countries</h1>
        <div className="filter-inner">
          <button
            onClick={() => handleFilterChange("All")}
            style={{ borderBottom: filter === "All" ? "2px solid" : "none" }}
          >
            All
          </button>
          <button
            onClick={() => handleFilterChange("Asia")}
            style={{ borderBottom: filter === "Asia" ? "2px solid" : "none" }}
          >
            Asia
          </button>
          <button
            onClick={() => handleFilterChange("Europe")}
            style={{ borderBottom: filter === "Europe" ? "2px solid" : "none" }}
          >
            Europe
          </button>
        </div>
      </div>
      <div className="mobile-nav">
        <h1 className="heading">Countries</h1>
        {open ? closeMenu : hamburgerMenu}
        {open && (
          <div className="filter-buttons">
            <div className="filter-inner">
              <button
                onClick={() => {
                  handleFilterChange("All");
                  closeMenu;
                }}
                style={{
                  borderBottom: filter === "All" ? "2px solid" : "none",
                }}
              >
                All
              </button>
              <button
                onClick={() => handleFilterChange("Asia")}
                style={{
                  borderBottom: filter === "Asia" ? "2px solid" : "none",
                }}
              >
                Asia
              </button>
              <button
                onClick={() => handleFilterChange("Europe")}
                style={{
                  borderBottom: filter === "Europe" ? "2px solid" : "none",
                }}
              >
                Europe
              </button>
            </div>
          </div>
        )}
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", listStyle: "none" }}
        className="coloumn"
      >
        {filteredCountries.map((country) => (
          <div key={country.name} className="country-div">
            <div className="inner-div">
              <span className="image-conainer">
                <img src={country.flag} alt={country.name} className="image" />
              </span>
              <span>
                <p> {country.name}</p>
                <p className="region">{country.region}</p>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="social-home">
        <SocialMedia />
      </div>
      <div className="footer-div">
        {" "}
        <p className="footer">Example@email.com </p>
        <p className="footer">Copyright © 2020 Name. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
