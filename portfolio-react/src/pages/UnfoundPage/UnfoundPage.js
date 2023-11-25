import React from 'react';
import { useRouteError } from 'react-router-dom';

// TODO: Error page is not styled yet

const UnfoundPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='Error__unfoundPage'>
      <h1>ERROR!</h1>
      <p>Maybe the below message will give you a little hint:</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default UnfoundPage;
