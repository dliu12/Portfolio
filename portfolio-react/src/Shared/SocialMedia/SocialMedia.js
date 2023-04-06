import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/Shared/SocialMedia.css';

const SocialMedia = () => {
  const socialMediaList = [
    {
      name: 'Download Resume',
      icon: faFloppyDisk,
      url: '',
      type: 'download'
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/diyi-liu997',
      type: 'external_link'
    },
    {
      name: 'GitHub',
      icon: faSquareGithub,
      url: 'https://github.com/dliu12',
      type: 'external_link'
    }
  ];
  return (
    <div className='SocialMedia__container'>
      <ul>
        {socialMediaList.map((ele, ind) => {
          return (
            <li key={`socialMedia--${ind}`}>
              {ele.type === 'download' ? (
                <a
                  className='SocialMedia__links'
                  href={ele.url}
                  download='DiyiLiu_Resume'
                  title={ele.name}>
                  <FontAwesomeIcon icon={ele.icon} />
                </a>
              ) : (
                <a
                  className='SocialMedia__links'
                  href={ele.url}
                  target='_blank'
                  rel='noreferrer'
                  title={`check out my ${ele.name}`}>
                  <FontAwesomeIcon icon={ele.icon} />
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SocialMedia;
