// ? Temporary Functions that will be replaced.

// TODO: Write this back into @tetarchus/utils
const objectEntries = <
  O extends Record<string, unknown>,
  K = keyof O extends string ? keyof O : string,
  V = O extends Record<string, infer L> ? L : never,
>(
  object: O,
): Array<[K, V]> => Object.entries(object) as unknown as Array<[K, V]>;

export { objectEntries };
