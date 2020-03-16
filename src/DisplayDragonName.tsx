import React from 'react';
// import PropTypes from 'prop-types';
// import { Dragon, defaultDragon } from './types';
import useDragonStats from './useDragonStats';
// eslint-disable-next-line no-unused-vars
import { Dragon } from './types';

interface CardProps {
    dragon: Dragon;
}

const DisplayDragonName = (d: any) => {
  const isRed = useDragonStats(d);

  return (
    <div>
      <div>
        <p>
          displayDragonColor :: Is Red -
          {isRed}
        </p>
      </div>
    </div>
  );
};

// DisplayDragonColor.propTypes = { d: PropTypes.instanceOf(Dragon) };
// DisplayDragonColor.defaultProps = { d: defaultDragon() };

export default DisplayDragonName;
