import fs from "fs";
import matter from "gray-matter";
import { extname, join, resolve } from "path";
import { Post } from "../entities/post";
import { getAllFiles } from "./utils/file";

const POST_DIR = join(process.cwd(), "_posts");
const COVER_IMAGE_DIR = join(process.cwd(), "public/assets/posts");

export function getPost(file: string): Post {
  // init
  const path = file.replace(".md", "");
  const localPath = resolve(POST_DIR, file);
  const coverImagePath = join("/assets/posts", path + ".cover.jpg");
  const coverImageLocalPath = resolve(COVER_IMAGE_DIR, path + ".cover.jpg");

  // load
  const fileContent = fs.readFileSync(localPath, "utf8");
  const doesImageCoverExist =
    fs.existsSync(coverImageLocalPath) &&
    fs.statSync(coverImageLocalPath).isFile();

  // parse
  const { data, content } = matter(fileContent);

  // return
  return {
    path,
    title: data["title"] ?? "",
    date: data["date"] ?? "",
    coverImagePath: doesImageCoverExist ? coverImagePath : null,
    content,
  };
}

export function getPosts() {
  return getAllFiles(POST_DIR)
    .filter((file) => extname(file).toLowerCase() === ".md")
    .map((file) => getPost(file))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1)); // sort by date descendingly
}
