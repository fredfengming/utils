import fs from "fs";
import matter from "gray-matter";
import path, { join } from "path";
import { Post } from "../interfaces/post";

const postsDirectory = join(process.cwd(), "_posts");
const postsImageCoverDirectory = join(process.cwd(), "public/assets/posts");

function getAllFiles(dir: string) {
  const output: string[] = [];
  getFilesRecur(dir, "", output);
  return output;
}

function getFilesRecur(rootDir: string, relativeDir: string, output: string[]) {
  const fullDir = path.resolve(rootDir, relativeDir);
  const fsItems = fs.readdirSync(fullDir);

  for (const fsItem of fsItems) {
    const relativePath = path.join(relativeDir, fsItem);

    const fullPath = path.resolve(rootDir, relativePath);

    const fsStat = fs.statSync(fullPath);
    if (fsStat.isDirectory()) {
      getFilesRecur(rootDir, relativePath, output);
    } else {
      output.push(relativePath);
    }
  }
}

export function getPost(file: string): Post {
  const fileContent = fs.readFileSync(
    path.resolve(postsDirectory, file),
    "utf8"
  );
  const { data, content } = matter(fileContent);

  const postPath = file.replace(".md", "");
  const coverImageLocalPath = path.resolve(
    postsImageCoverDirectory,
    postPath + ".cover.jpg"
  );

  const doesImageCoverExist =
    fs.existsSync(coverImageLocalPath) &&
    fs.statSync(coverImageLocalPath).isFile();

  return {
    path: postPath,
    title: data["title"] ?? "",
    date: data["date"] ?? "",
    coverImagePath: doesImageCoverExist
      ? path.join("/assets/posts", postPath + ".cover.jpg")
      : null,
    content,
  };
}

export function getPosts() {
  const files = getAllFiles(postsDirectory);

  const posts = files
    .filter((file) => path.extname(file).toLowerCase() === ".md")
    .map((file) => getPost(file))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
