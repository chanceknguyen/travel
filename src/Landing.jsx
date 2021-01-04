/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  const [inputText, setInputText] = useState('');

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div>
      <h1>Find out what's happening in...</h1>
      <input type="text" value={inputText} onChange={handleInputText} />
      <Link to={`/local/${inputText}`}>
        <button type="button">
          Let's Go!
        </button>
      </Link>
    </div>
  );
}

export default Landing;
