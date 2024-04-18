export function firstLetterToLowerCase(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export function removeAccents(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function toCamelCase(str: string) {
  // REMOVE ACENTOS \/
  const normalizedStr = removeAccents(str);

  return normalizedStr
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter: string, index: number) {
      return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    })
    .replace(/\s+/g, "")
    .replace(/-/g, "");
}
