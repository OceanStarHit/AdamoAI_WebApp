import React, { useState, useEffect } from 'react';

type Props = {
  text: string;
};

const Typewriter: React.FC<Props> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval); // Stop when the text is fully displayed
      }
    }, 100); // Adjust the interval speed as needed

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex, text]);

  return (
    <p className='text-sm md:text-lg xl:text-xl font-medium text-gray-500'>
      {displayedText}
    </p>
  );
};

export default Typewriter;
