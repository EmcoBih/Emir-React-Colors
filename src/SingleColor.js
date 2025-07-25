import React, { useEffect, useState } from 'react';

const SingleColor = ({ weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 1200);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index >= 10 && 'color-light'} `}
      style={{ backgroundColor: `#${hexColor}` }}
      onClick={() => {
        console.log(hexValue);
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && (
        <p className={`alert ${index >= 10 && 'color-value'}`}>
          copied to clipboard
        </p>
      )}
    </article>
  );
};

export default SingleColor;
