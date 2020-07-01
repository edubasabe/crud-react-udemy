import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await fetch(
      "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
    );
    const users = await data.json();
    setTeam(users.civilizations);
  };

  return (
    <div>
      <h1 className="text-3xl">This is the about us page</h1>
      <ul>
        {team.map((person) => (
          <li key={person.id}>
            <Link
              to={`/nosotros/${person.id}`}
              className="underline text-blue-500"
            >
              {person.name} - {person.expansion}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutUs;
