import React from 'react';
import PropTypes from 'prop-types';
import useDragonAge from '../hook/useDragonAge';

interface DisplayDragonAgeProps {
  ageVar: number;
}

const DisplayDragonAge = (ageVar : DisplayDragonAgeProps) => {
  const age2 = useDragonAge(ageVar);

  return (
    <div>
      <p>
        displayDragonColor1 :: Age -
        {age2}
      </p>
    </div>
  );
};

// eslint-disable-next-line react/no-unused-prop-types
DisplayDragonAge.propTypes = { ageVar: PropTypes.number.isRequired };
export default DisplayDragonAge;
