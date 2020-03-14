import React, { Component } from 'react';
import { dragon } from './types';
import { useDragonStats } from './useDragonStats';

interface CardProps {
  dragon: dragon;
}

export let DisplayDragonColor = function(dragon : dragon) {
  render() {
    const isRed = useDragonStats(dragon);

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
  }
}
