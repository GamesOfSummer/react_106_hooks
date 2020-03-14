import { useState, useEffect } from 'react';
import { dragon } from './types';

export function useDragonStats(dragon: dragon): string {
    const [isRed, setIsRed] = useState(null);

    useEffect(() => {
        function handleStatusChange(dragon: dragon) {
            console.log('handleStatusChange -> dragon', dragon);
            //setIsRed(dragon.color);
        }

        // ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {
            console.log('RETURN handleStatusChange -> dragon', dragon);
        };
    });

    return dragon.color;
}
