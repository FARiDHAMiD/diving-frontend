import React, { useEffect, useState } from "react";

const Scripts = ({
  level,
  setLevel,
  price,
  setPrice,
  location,
  setLocation,
}) => {
  const levels = ["Level", "Beginner", "Advanced", "Professional"];
  const prices = ["Price", "Low to High", "High to Low"];
  const locations = ["Location", "Dahab", "Sharm El Sheikh", "Hurghada"];

  return (
    <div>
      <div className="row">
        <div className="col-4">
          <select
            className="form-control my-1"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            id="level"
          >
            <option value="" disabled>
              Select level
            </option>
            {levels.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="col-4">
          <select
            className="form-control my-1"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="price"
          >
            <option value="" disabled>
              Select price
            </option>
            {prices.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="col-4">
          <select
            className="form-control my-1"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id="location"
          >
            <option value="" disabled>
              Select location
            </option>
            {locations.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Scripts;
