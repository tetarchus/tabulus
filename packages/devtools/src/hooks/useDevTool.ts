import { useEffect, useState } from 'react';

const useDevTool = () => {
  const [isDevToolEnabled, setIsDevToolEnabled] = useState(false);

  useEffect(() => {}, []);

  return { isDevToolEnabled };
};

export { useDevTool };
