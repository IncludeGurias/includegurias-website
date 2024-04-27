export function firstLetterToLowerCase(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

export function removeAccents(str: string) {
  const normalizedStr = str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/-/g, " ")
  return normalizedStr
}

export function toCamelCase(str: string) {
  // REMOVE ACENTOS \/
  const normalizedStr = removeAccents(str)

  return (
    normalizedStr
      //remove special characters
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter: string, index: number) {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase()
      })
      //remove spaces
      .replace(/\s+/g, "")
      //remove + and replace with nothing
      .replace(/\+/g, "")
  )
}
