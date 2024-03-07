export interface BlogPost {
  id:number,
  title: string;
  slug: string;
  image: FileList|null;
  updatedAt: Date;
  readTime: number;
  excerpt: string;
  content: string;
}