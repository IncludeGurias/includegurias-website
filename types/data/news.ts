export default interface News {
  title: string;
  text: string;
  imageUrl?: string;
  href?: string;
  date: string;
  showInTimeline: boolean;
}
