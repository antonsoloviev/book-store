export const buildUrl = (
  url: string,
  params: string | Record<string, string> | string[][] | URLSearchParams
): string => {
  const p = new URLSearchParams(params);

  p.forEach((key, value) => {
    if (!value) p.delete(key);
  });

  return url + p.toString();
};
