import fs from "fs";
import path from "path";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostByFilename(filename: string, fields: string[] = []) {
  const fileContent = fs.readFileSync(
    path.resolve(postsDirectory, filename),
    "utf8"
  );
  const { data, content } = matter(fileContent);

  type Items = {
    [key: string]: string;
  };
  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = filename.replace(".md", "");
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const filenames = getAllFilenames(postsDirectory);
  //const slugs = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((filename) => path.extname(filename) === ".md")
    .map((filename) => getPostByFilename(filename, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

function getAllFilenames(dir: string) {
  const output: string[] = [];
  getFilenamesRecur(dir, "", output);
  return output;
}

function getFilenamesRecur(
  rootDir: string,
  relativeDir: string,
  output: string[]
) {
  const fullDir = path.resolve(rootDir, relativeDir);
  const fsItems = fs.readdirSync(fullDir);

  for (const fsItem of fsItems) {
    const relativePath = path.join(relativeDir, fsItem);

    const fullPath = path.resolve(rootDir, relativePath);

    const fsStat = fs.statSync(fullPath);
    if (fsStat.isDirectory()) {
      getFilenamesRecur(rootDir, relativePath, output);
    } else {
      output.push(relativePath);
    }
  }
}
