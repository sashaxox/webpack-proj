import React, { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import AvatarPNG from "@/assets/avatar.png";
import AvatarJPG from "@/assets/avatar.jpg";
import Calendar from "@/assets/calendar.svg";

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);

  // if (__PLATFORM__ === "desktop") {
  //   return <div>ISDESKTOPPLATFORM</div>;
  // }

  // if (__PLATFORM__ === "mobile") {
  //   return <div>ISMOBILEPLATFORM</div>;
  // }

  // if (__ENV__ === "development") {
  //   // addDevtools()
  // }

  return (
    <div data-testid={'App.DataTestId'}>
      <h1 data-testid={'Platform'} >PLATFORM = {__PLATFORM__}</h1>
      <div>
        <img src={AvatarPNG} height={100} alt="" />
        <img src={AvatarJPG} height={100} alt="" />
      </div>
      <div>
        <Calendar width={100} height={100} fill="red" />
      </div>
      <Link to={"/about"}>about</Link>
      <br />
      <Link to={"/shop"}>shop</Link>
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button} onClick={increment}>
        increment
      </button>
      <Outlet />
    </div>
  );
};
