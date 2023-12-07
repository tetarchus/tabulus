import { useEffect, useState } from 'react';

// TODO: Sort this out properly
const useDevTool = () => {
  const [isDevToolEnabled, setIsDevToolEnabled] = useState(false);

  useEffect(() => setIsDevToolEnabled(true), []);

  return { isDevToolEnabled };
};

export { useDevTool };
