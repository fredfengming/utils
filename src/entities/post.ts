export type Post = {
  path: string;
  title: string;
  excerpt: string | null;
  date: string;
  coverImagePath: string | null;
  content: string;
};
