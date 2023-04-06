import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/pages/Introduction.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons';

const Introduction = () => {
  return (
    <div className='Page__introduction'>
      <div className='Page__introduction--profile'>reserve space for 3.js</div>
      <section className='Page__introduction--text'>
        <h1>Hi! I am Diyi :)</h1>
        <p>
          I am a Front-End developer who is always traveling on the path of adopting new and
          exciting alien web technologies.
        </p>
        <Link to={''} className='Page__introduction--toProjects'>
          Check Out My Projects
          <span className='FontAwesome__link--arrowPointer'>
            <FontAwesomeIcon icon={faArrowPointer}></FontAwesomeIcon>
          </span>
        </Link>
      </section>
    </div>
  );
};

export default Introduction;
