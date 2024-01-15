import type Author from "./author";

export type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};

export type Post = {
  path: string;
  title: string;
  date: string;
  coverImagePath: string | null;
  content: string;
};
