import React from 'react';
import PropTypes from 'prop-types';
import useDragonAge from './useDragonAge';


interface DisplayDragonColorProps {
  ageVar: number;
}

const DisplayDragonColor = (ageVar : DisplayDragonColorProps) => {
  const age2 = useDragonAge(ageVar);

  return (
    <div>
      <div>
        <p>
          displayDragonColor :: Is Red -
          {age2}
        </p>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/no-unused-prop-types
DisplayDragonColor.propTypes = { ageVar: PropTypes.number.isRequired };

export default DisplayDragonColor;
