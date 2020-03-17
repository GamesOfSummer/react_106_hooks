import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { Dragon } from './types';

export default function useIsDragonRed(name: string): boolean {
  const [isRed] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    function handleStatusChange(dragon2: Dragon) : void {
      console.log('handleStatusChange -> dragon', dragon2);
      // setIsRed(dragon.color);
    }

    // ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      console.log('RETURN handleStatusChange1 -> dragon', name);
    };
  });

  console.log('RETURN handleStatusChange2 -> dragon', isRed);

  return true;
}
