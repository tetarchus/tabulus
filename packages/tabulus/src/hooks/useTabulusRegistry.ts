import { useContext } from 'react';

import { TabulusRegistryContext } from '@tabulus/contexts';

const useTabulusRegistry = () => useContext(TabulusRegistryContext);

export { useTabulusRegistry };
