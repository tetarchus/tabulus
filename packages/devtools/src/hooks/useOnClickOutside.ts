import { useEffect } from 'react';

import type { MouseEvent as ReactMouseEvent, RefObject } from 'react';

const useOnClickOutside = <T extends Element>(
  ref: RefObject<T>,
  bind: boolean,
  onClickOutside: () => void,
): void => {
  useEffect(() => {
    const handleClickOutside = (e: ReactMouseEvent<T>['nativeEvent']): void => {
      if (ref.current && e.target instanceof Node && !ref.current.contains(e.target)) {
        onClickOutside();
      }
    };

    if (bind) document.addEventListener('mousedown', handleClickOutside);
    else document.removeEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [bind, onClickOutside, ref]);
};

export { useOnClickOutside };
