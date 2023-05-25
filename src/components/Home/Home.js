import React from "react";
import { PrimaryButton } from "../HOC/button";
import { useNavigate } from "react-router";
const Home = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/login");
  };
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome Home page!</p>
      <PrimaryButton text="Login Page" onClick={onClick} />
    </div>
  );
};

export default Home;
