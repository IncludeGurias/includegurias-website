function generateTimestampByDate(date: string): string {
  return (new Date(date).getTime() + 1000 * 60 * 60 * 24).toString();
}

export default generateTimestampByDate;
