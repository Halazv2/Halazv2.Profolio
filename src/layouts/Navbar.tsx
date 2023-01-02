import React, {useState} from "react";

import "../assets/styles/Nav/StyleNavBar.css";

export default function Navbar() {
  const items = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contact",
      url: "/contact",
    },
    {
      name: "Projects",
      url: "/projects",
    },
  ];
  return (
    <nav>
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
          <ul className='sub-menu '>
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </span>
        <span className='cls'></span>
      </div>
    </nav>
  );
}
