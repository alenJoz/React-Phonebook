import React from 'react';
import Header from "./Header";
import SideBar from "./SideBar";
import Content from "./Content";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <SideBar />
      <Content />

    </React.Fragment>
  )
}

export default Home;