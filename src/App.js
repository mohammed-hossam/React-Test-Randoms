import React, { useEffect, useRef, useState } from 'react';
import useCustom from './useCustom';
// const foo = { name: 'Khaled', id: 0 };

const arr = [
  { name: 'Khaled', id: 0 },
  { name: 'Mohamed', id: 1 },
  { name: 'Ahmed', id: 2 },
  { name: 'Mohsen', id: 3 },
];

function App() {
  console.log('num $1');
  const [x] = useCustom();

  const [same, setSame] = useState({});
  // const test = useRef({});

  useEffect(() => {
    console.log('num $4');
    // setSame({});
    // if(test===true)
  }, [same]);
  // const [x] = useCustom();

  console.log('num $3');

  // useEffect(() => {
  //   console.log('num $3');

  // const test = arr.find((el) => el.id === 0);
  // console.log(Object.is(same, test));
  // setSame(test);
  // }, [same]);

  return <div>welcome</div>;
}

export default App;
