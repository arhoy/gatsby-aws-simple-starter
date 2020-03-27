import React from 'react';
import { navigate } from '@reach/router';

export const SignUp = () => {
  const redirectHandler = () => {
    console.log('I was clicke');
    navigate('/app');
  };
  return (
    <div>
      FUCK
      <button onClick={redirectHandler}>Go to App Page</button>
    </div>
  );
};
