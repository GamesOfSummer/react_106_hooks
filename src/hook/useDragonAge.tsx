import { useState, useEffect } from 'react';

interface DragonAgeProps {
  ageVar: number;
}

const useDragonAge = ({ ageVar } : DragonAgeProps) => {
  const [age, setAge] = useState<number>(ageVar);

  useEffect(() => {
    // console.log('useDragonAge -> setAge', age);
    // console.log('useDragonAge -> setAge', setAge);

    function handleAgeChange(ageVar2 : number) {
      setAge(ageVar2 + 1);
    }

    handleAgeChange(age);
  });

  return age;
};

export default useDragonAge;
