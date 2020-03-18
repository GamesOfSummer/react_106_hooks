import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { Dragon } from './types';

export default function useDragonAge(): boolean {
  const [age, setAge] = useState(0);

  useEffect(() => {
    // console.log('useDragonAge -> setAge');
    setAge(age + 1);
  });

  return true;
}
