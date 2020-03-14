import React, { Component } from 'react';
import { dragon } from './types';
import { useDragonStats } from './useDragonStats';

interface CardProps {
    dragon: dragon;
}

export default class DisplayDragonName extends Component<CardProps> {
    render() {
        const isRed = useDragonStats(this.props.dragon);

        return (
            <div>
                <p>displayDragonName :: Is Red -{isRed}</p>
            </div>
        );
    }
}
