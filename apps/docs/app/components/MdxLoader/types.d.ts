/** Props for the MdxLoader component. */
interface MdxLoaderProps {
  /** The MDX string. */
  code: string;
  /** Frontmatter from the MDX file. */
  frontmatter: Record<string, unknown>;
}

export type { MdxLoaderProps };
