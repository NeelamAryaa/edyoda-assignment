import React from "react";
import "./Navbar.css";

import { Button } from "@mantine/core";
import { default as Vicon } from "../../assets/v.svg";
import { default as SearchIcon } from "../../assets/search.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="l-nav">
        <div className="name" style={{ fontSize: "2.5rem" }}>
          EDYODA
        </div>
        <div>
          Courses
          <img src={Vicon} alt="v-icon" style={{ marginLeft: "1rem" }}></img>
        </div>
        <div>
          Program
          <img src={Vicon} alt="v-icon" style={{ marginLeft: "1rem" }}></img>
        </div>
      </div>
      <div className="r-nav">
        <div>
          <img src={SearchIcon} alt="search-icon"></img>
        </div>
        <div>Log in</div>
        {/* <div>JOIN NOW</div> */}
        <Button
          fz={"lg"}
          radius="xl"
          px={"3.3rem"}
          // h="3rem"
          variant="gradient"
          gradient={{ from: "#0048ff", to: "#0096ff", deg: 105 }}
        >
          JOIN NOW
        </Button>
      </div>
    </div>
  );
}
