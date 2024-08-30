export const patterns = {
  safeInput: /^[a-zA-Z0-9\-_]*$/g,
};

export function generateString(length: number) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export function renameFile(file: File, name: string) {
  const blob = file.slice(0, file.size, file.type);
  return new File([blob], name, { type: file.type });
}

export function humanizeDate(date: Date) {
  return humanizeDateString(date.toISOString());
}

export function humanizeDateString(date: string) {
  let currentDate = new Date();
  let targetDate = currentDate;

  if (!date.includes("T")) {
    targetDate = new Date(`${date}T00:00:00`);
  }

  return targetDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}