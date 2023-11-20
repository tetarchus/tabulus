import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { MdxLoader } from '@docs/components';

import { bundleMdx } from '../utils/mdx.server';

import type { LoaderFunctionArgs } from '@remix-run/node';
import type { FC } from 'react';

const loader = async ({ params }: LoaderFunctionArgs) => {
  const docsRoute = params['*'];
  const file = `./app/docs/${docsRoute}.mdx`;

  const { code, frontmatter } = await bundleMdx(file);
  const title = frontmatter['title'];

  return json({ code, frontmatter, title });
};

const DocsRoute: FC = () => {
  const { code, frontmatter } = useLoaderData<typeof loader>();
  return <MdxLoader code={code} frontmatter={frontmatter} />;
};

export default DocsRoute;
export { loader };
