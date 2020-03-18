import React from 'react';
import PropTypes from 'prop-types';
// import { Dragon, defaultDragon } from './types';
import useDragonAge from './useDragonAge';


interface DisplayDragonColorProps {
  name: string;
}

// eslint-disable-next-line no-unused-vars
const DisplayDragonColor : React.FC<DisplayDragonColorProps> = ({ name }) => {
  const age = useDragonAge();

  return (
    <div>
      <div>
        <p>
          displayDragonColor :: Is Red -
          {age}
        </p>
      </div>
    </div>
  );
};

DisplayDragonColor.propTypes = { name: PropTypes.string.isRequired };
// DisplayDragonColor.defaultProps = { name: '' };

export default DisplayDragonColor;
