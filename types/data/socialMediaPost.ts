export default interface SocialMediaPost {
  text: string;
  name: string;
  subname: string;
  imageUrl: string;
  href?: string;
  date?: string;
  showInTimeline?: boolean;
  socialMedia: string;
}
