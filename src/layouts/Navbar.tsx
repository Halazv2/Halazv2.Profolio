import React, {useState} from "react";

import "../assets/styles/Nav/StyleNavBar.css";
import {HashLink as Link} from "react-router-hash-link";

export default function Navbar() {
  const items = [
    {
      name: "Home",
      url: "#home",
    },
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ];
  return (
    <nav className='z-50 fixed'>
      <div
        className='open'
        onClick={() => {
          const element = document.querySelector(".open");
          if (element) {
            element.classList.toggle("oppenned");
          }
        }}
      >
        <span className='cls'></span>
        <span>
          <ul className='sub-menu justify-center items-end flex flex-col'>
            {items.map((item, index) => (
              <li key={index}>
                <Link to={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </span>
        <span className='cls'></span>
      </div>
    </nav>
  );
}
