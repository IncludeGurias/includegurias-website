function generateTimestampByDate(date: string): number {
  return new Date(date).getTime() + 1000 * 60 * 60 * 24
}

export default generateTimestampByDate
