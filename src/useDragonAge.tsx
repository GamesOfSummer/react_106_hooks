import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { Dragon } from './types';


interface DragonAgeProps {
  ageVar: number;
}

const useDragonAge = (ageVar : DragonAgeProps) => {
  const [age, setAge] = useState({ ageVar });

  useEffect(() => {
    // console.log('useDragonAge -> setAge');
    // setAge(age + 1);
  });

  return true;
};

export default useDragonAge;
