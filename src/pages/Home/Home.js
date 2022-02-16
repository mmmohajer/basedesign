import React from "react";
import cx from "classnames";

import styles from "./Home.module.scss";

const cssConfig = {
  hamburgerMenuBgColor: "blue",
};

import HamburgerIcon from "Components/HamburgerIcon";
import Icon from "Components/Icon";
import Card from "Components/Card/Card";

const arrayOfIcons = [
  "search",
  "up",
  "down",
  "left",
  "right",
  "dash",
  "image",
  "fimage",
  "mic",
  "fmic",
  "notification",
  "fnotification",
  "setting",
  "fsetting",
  "x",
  "video",
  "fvideo",
  "share",
  "fshare",
  "plus",
];

function Home() {
  return (
    <div className="">
      <HamburgerIcon
        cssConfig={cssConfig}
        onOpenedIconClick={() => console.log("Opened")}
        onClosedIconClick={() => console.log("Closed")}
      />
      <div className="flex flex--jc--center p2 flex--ai--center w-per-100 flex--wrap bgYellow">
        {arrayOfIcons.map((icon, idx) => (
          <div className="ml2 mr2" key={idx}>
            <Icon
              type={icon}
              scale={1.2}
              fill="dodgerblue"
              stroke="dodgerblue"
            />
          </div>
        ))}
      </div>
      <Card />
    </div>
  );
}

export default Home;
