export type Post = {
  path: string;
  title: string;
  excerpt: string | null;
  dateIsoString: string | null;
  coverImagePath: string | null;
  content: string;
};
