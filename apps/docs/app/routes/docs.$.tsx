import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { mergeMeta, mergeTitles } from '@tetarchus/utils/remix';

import { MdxLoader } from '@docs/components';

import { bundleMdx } from '../utils/server';

import type { LoaderFunctionArgs, TypedResponse } from '@remix-run/node';
import type { FC } from 'react';

const meta = mergeMeta(mergeTitles);

const loader = async ({
  params,
}: LoaderFunctionArgs): Promise<
  TypedResponse<{
    code: string;
    frontmatter: Record<string, unknown>;
    title: string;
  }>
> => {
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
export { loader, meta };
