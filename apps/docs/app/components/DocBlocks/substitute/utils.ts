/** Utility function to log when extra props that we're not aware of have been passed to a
 *  substitute component so that we can make sure we use them. */
const logExtraProps = (restProps: unknown, componentName: string) => {
  if (
    typeof restProps === 'object' &&
    restProps != null &&
    !Array.isArray(restProps) &&
    Object.keys(restProps).length > 0
  ) {
    console.info(`MDX Additional Props for ${componentName}:`, restProps);
  }
};

export { logExtraProps };
