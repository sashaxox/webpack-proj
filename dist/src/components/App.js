import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import AvatarPNG from "@/assets/avatar.png";
import AvatarJPG from "@/assets/avatar.jpg";
import Calendar from "@/assets/calendar.svg";
export var App = function () {
    var _a = useState(0), count = _a[0], setCount = _a[1];
    var increment = function () { return setCount(function (prev) { return prev + 1; }); };
    if (__PLATFORM__ === "desktop") {
        return _jsx("div", { children: "ISDESKTOPPLATFORM" });
    }
    if (__PLATFORM__ === "mobile") {
        return _jsx("div", { children: "ISMOBILEPLATFORM" });
    }
    // if (__ENV__ === "development") {
    //   // addDevtools()
    // }
    return (_jsxs("div", { children: [_jsxs("h1", { children: ["PLATFORM = ", __PLATFORM__] }), _jsxs("div", { children: [_jsx("img", { src: AvatarPNG, height: 100, alt: "" }), _jsx("img", { src: AvatarJPG, height: 100, alt: "" })] }), _jsx("div", { children: _jsx(Calendar, { width: 100, height: 100, fill: "red" }) }), _jsx(Link, { to: "/about", children: "about" }), _jsx("br", {}), _jsx(Link, { to: "/shop", children: "shop" }), _jsx("h1", { className: classes.value, children: count }), _jsx("button", { className: classes.button, onClick: increment, children: "increment" }), _jsx(Outlet, {})] }));
};
