import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

const App = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#00ccff').all(5));

  const handleSubmit = e => {
    e.preventDefault();
    try {
      setError(false);
      let colors = new Values(color).all(5);
      console.log(color);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={e => setColor(e.target.value)}
            placeholder='#00ccff'
            className={`${error ? 'error' : 'green'}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          // console.log(color);
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
};

export default App;
