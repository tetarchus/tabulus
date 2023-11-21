import { json } from '@remix-run/node';
import { mergeMeta, mergeTitles } from '@tetarchus/utils/remix';

import { Heading } from '@docs/components';

import type { FC } from 'react';

const meta = mergeMeta(mergeTitles);

const loader = async () => json({ title: 'Examples' });

const ExamplesRoute: FC = () => {
  const Title = Heading(1);
  return (
    <div className='mt-10 p-4'>
      <Title>Examples</Title>
    </div>
  );
};

export default ExamplesRoute;

export { loader, meta };
