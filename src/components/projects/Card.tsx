import React from "react";
import "../../assets/styles/card/card.css";
import bg from "../../assets/images/cool-background.png";
export default function Card(props: {project: any}) {
  return (
    <ul className='cards w-full h-full'>
      <li>
        <a href={props.project.git_url} className='card' target='_blank' rel='noreferrer'>
          <img src='https://wallpapercave.com/wp/wp6012329.png' className='card__image w-full h-full' alt='' />
          <div className='card__overlay'>
            <div className='card__header'>
              <svg className='card__arc' xmlns='http://www.w3.org/2000/svg'>
                <path />
              </svg>
              <img className='card__thumb' src={props.project.owner.avatar_url} alt='' />
              <div className='card__header-text'>
                <h3 className='card__title'>{props.project.name}</h3>
                <span className='card__status'>{props.project.language}</span>
              </div>
            </div>
            <p className='card__description'>{props.project.description}</p>
          </div>
        </a>
      </li>
    </ul>
  );
}
