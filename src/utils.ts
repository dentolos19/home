export function generateRandomString(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export function hashStrings(...args: string[]) {
  return args.reduce((acc, cur) => {
    return acc + cur.replace(/[^a-zA-Z0-9]/g, "");
  }, "");
}

export function setSearchParam(
  url: URL,
  key: string,
  value: string | undefined
) {
  value ? url.searchParams.set(key, value) : url.searchParams.delete(key);
  return url;
}