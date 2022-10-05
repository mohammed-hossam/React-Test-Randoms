import { useEffect, useState } from 'react';

function useCustom() {
  console.log('num $2');
  const [x, setX] = useState(1);
  const [z, setZ] = useState(1);
  // const x = 'welcome';

  useEffect(() => {
    console.log('num $5');
    setZ(2);
  }, []);

  return [x];
}

export default useCustom;
