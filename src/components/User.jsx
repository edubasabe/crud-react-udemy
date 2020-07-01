import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [civilization, setCivilization] = useState({});
  useEffect(() => {
    getCivilization();
  }, []);

  const getCivilization = async () => {
    try {
      const data = await fetch(
        `https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`
      );
      const result = await data.json();
      setCivilization(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>{civilization.name}</h1>
      <h2>{civilization.expansion}</h2>
    </div>
  );
};

export default User;
