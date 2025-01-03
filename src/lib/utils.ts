export const patterns = {
  safeInput: /^[a-zA-Z0-9\-_]*$/g,
};

export function hashString(value: string) {
  let hash = 0;
  if (value.length == 0) return hash.toString();
  for (let i = 0; i < value.length; i++) {
    const char = value.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash.toString();
}

export function generateString(length: number) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export function changeFileName(file: File, name: string, withExtension: boolean = true) {
  const blob = file.slice(0, file.size, file.type);
  if (withExtension) name = `${name}.${file.name.split(".").pop()}`;
  return new File([blob], name, { type: file.type });
}

export function replaceFormValue(form: HTMLFormElement, name: string, value: string) {
  const input = form.querySelector<HTMLInputElement>(`input[name=${name}]`);
  if (input) input.value = value;
}

export function humanizeDate(date: Date) {
  return humanizeDateString(date.toISOString());
}

export function humanizeDateString(date: string) {
  const currentDate = new Date();
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