import React from "react";

export default function About() {
  return (
    <section className='text-white border-2 border-white border-dashed pt-6 w-full h-fit p-4' id='about'>
      <div className='flex flex-col mb-4 justify-center items-center '>
        <h1 className='text-5xl font-bold text-red-700'>Little bit about me</h1>
      </div>
      <div className='flex flex-col justify-evenly mb-3 lg:mb-0'>
        <div className='flex flex-col mb-4 justify-center items-center'>
          <code>
            I used to be a <span className='font-bold'>biologist</span>, but I decided to change my career path and become a <span className='font-bold'>developer</span>.
            <br />
            So, I attended
            <a href='https://youcode.ma/' target='_blank' className='text-red-700 font-bold'>
              {" "}
              " YouCode "
            </a>
            , <span className='font-bold'>(a coding school in Safi, Morocco)</span>, for two years.
            <br />
            In my first year, I learned the basics of programming and how to build websites using HTML, CSS, and JavaScript, as well as PHP and MySQL and some frameworks.
            <br />
            After completing my first year, I had the opportunity to intern at
            <a href='https://www.ayouris.com/' target='_blank' className='text-red-700 font-bold'>
              {" "}
              " Ayouris "
            </a>{" "}
            <span className='font-bold'>(a software company in Rabat, Morocco)</span>, where I worked on a project using NextJs. <br />
            In my second year, I specialized in the MERN stack (MongoDB, Express, React, Node.js) and learned how to build full-stack applications. <br />
            Currently, I am working at
            <a href='https://myrestai.com/' target='_blank' className='text-red-700 font-bold'>
              {" "}
              " MyRestai Europe "
            </a>{" "}
            <span className='font-bold'>(a startup in Marrakech, Morocco) </span>
            as a full-stack developer.
          </code>
        </div>
      </div>
    </section>
  );
}
