/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ getLocalInfo }) {
  const [inputText, setInputText] = useState('');

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputText}
        placeholder="Going somewhere else?"
      />
      <Link to={`/local/${inputText}`}>
        <button type="button" onClick={() => getLocalInfo(inputText)}>
          Let's Go!
        </button>
      </Link>
    </div>
  );
}

export default Navbar;
