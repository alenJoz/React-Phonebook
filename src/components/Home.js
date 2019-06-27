import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import AddButton from "./AddButton";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <SideBar />
      <AddButton />
    </React.Fragment>
  );
};

export default Home;
