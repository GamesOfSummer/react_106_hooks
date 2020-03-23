import { useState, useEffect } from 'react';

interface DragonAgeProps {
  ageVar: number;
}

const useDragonAge = (ageVar : DragonAgeProps) => {
  const [age, setAge] = useState({ ageVar });

  useEffect(() => {
    console.log('useDragonAge -> setAge', age);
    console.log('useDragonAge -> setAge', setAge);
    // setAge(age + 1);
  });

  return true;
};

export default useDragonAge;
