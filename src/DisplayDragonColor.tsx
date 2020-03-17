import React from 'react';
import PropTypes from 'prop-types';
// import { Dragon, defaultDragon } from './types';
import useIsDragonRed from './useIsDragonRed';


interface DisplayDragonColorProps {
  name: string;
}

const DisplayDragonColor : React.FC<DisplayDragonColorProps> = ({ name }) => {
  const isRed = useIsDragonRed(name);

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

DisplayDragonColor.propTypes = { name: PropTypes.string.isRequired };
// DisplayDragonColor.defaultProps = { name: '' };

export default DisplayDragonColor;
