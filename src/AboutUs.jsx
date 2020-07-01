import React, { useEffect, useState } from "react";

const AboutUs = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    setTeam(users);
  };

  return (
    <div>
      <h1 className="text-3xl">This is the about us page</h1>
      <ul>
        {team.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AboutUs;
