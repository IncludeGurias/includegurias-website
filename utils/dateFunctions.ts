function normalizeDate(date: string) {
  return date.replace(/-/g, "/");
}

export function formatYYYYMMDD(date: string) {
  console.log("date", date);
  if (date === "") {
    return "";
  }
  const [day, month, year] = date.replace(/-/g, "/").split("/");

  if (day && day.trim().length > 2) {
    return `${day}-${month}-${year}`;
  }
  return `${year}-${month}-${day}`;
}
