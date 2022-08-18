
/**
 * Returns a component string from a URL path. E.g getPathComponent('/foo/bar', 1) returns 'bar'
 * @param path string
 * @param index number
 * @returns string
 */
export const getPathComponent = (path: string, index: number) => (
  path.split('/').filter((s) => !!s)[index]
);

export const barPaths = ['messages', 'settings'];
