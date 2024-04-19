import React, { useState } from 'react';

const ShowMoreBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleText = isOpen ? 'Read Less' : 'Show More';

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button onClick={handleClick}>
      {toggleText}
    </button>
  );
};

export default ShowMoreBtn;
