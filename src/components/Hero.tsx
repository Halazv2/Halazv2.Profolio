import React from "react";
import me from "../assets/images/me.jpg";
export default function Hero() {
  return (
    <section className='hero '>
      <div className='lg:flex  justify-between text-white border-2 border-white border-dashed rounded-2xl p-4'>
        <div className='flex flex-col justify-evenly mb-3 lg:mb-0'>
          <div className='flex flex-col mb-4'>
            <h1 className='text-5xl font-bold text-red-700'>Hello there !</h1>
          </div>
          <div>
            <code className='text-xl'>
              My name is <span className='font-bold'>Hala Ziani</span> and I'm a <span className='font-bold'>Full Stack developer</span>
              <br />
              I'm a <span className='font-bold'>self-taught</span> developer who loves to learn new things and build cool stuff. <br />
              <br />
              In addition to my love of technology and design, I am also interested in <span className='font-bold'>music</span> and <span className='font-bold'>art</span>. <br />
            </code>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img src={me} alt='me' className='lg:w-96' />
        </div>
      </div>
      <small className='flex flex-col justify-center items-center mt-4 mb-4'>
        <code className='text-center '>Below are details of some of projects I have worked on. Feel free to check them out.</code>
      </small>
    </section>
  );
}
