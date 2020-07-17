import React from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import { FiHome } from "react-icons/fi";
const Home = () => {
  return (
    <div>
      <PageHeading>
        <FiHome size="1.5em" className="mr-2" />
        <h2 className="text-2xl font-semibold">Inicio</h2>
      </PageHeading>
    </div>
  );
};

export default Home;
