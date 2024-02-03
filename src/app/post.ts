import fs from "fs";
import matter from "gray-matter";
import { extname, join, resolve } from "path";
import { Post } from "../entities/post";
import { getAllFiles } from "./utils/file";

const POST_DIR = join(process.cwd(), "posts");
const COVER_IMAGE_DIR = join(process.cwd(), "public/assets/posts");

export function getPost(file: string): Post {
  // init
  const path = file.replace(".md", "");
  const localPath = resolve(POST_DIR, file);
  const coverJpgImagePath = join("/assets/posts", path + ".cover.jpg");
  const coverJpgImageLocalPath = resolve(COVER_IMAGE_DIR, path + ".cover.jpg");
  const coverPngImagePath = join("/assets/posts", path + ".cover.png");
  const coverPngImageLocalPath = resolve(COVER_IMAGE_DIR, path + ".cover.png");

  // check cover image
  let coverImagePath = null;
  if (
    fs.existsSync(coverJpgImageLocalPath) &&
    fs.statSync(coverJpgImageLocalPath).isFile()
  ) {
    coverImagePath = coverJpgImagePath;
  } else if (
    fs.existsSync(coverPngImageLocalPath) &&
    fs.statSync(coverPngImageLocalPath).isFile()
  ) {
    coverImagePath = coverPngImagePath;
  }

  // load content
  const fileContent = fs.readFileSync(localPath, "utf8");
  const { data, content } = matter(fileContent);
  let date;
  const dateString = data["date"];
  if (dateString) {
    try {
      date = new Date(data["date"]);
    } catch {
      console.warn(`Failed parsing date ${dateString} for ${path}`);
    }
  }

  // return
  return {
    path,
    title: data["title"] ?? "",
    excerpt: data["excerpt"] ?? "",
    dateIsoString: date?.toISOString() ?? null,
    coverImagePath,
    content,
  };
}

export function getPosts() {
  return getAllFiles(POST_DIR)
    .filter((file) => extname(file).toLowerCase() === ".md")
    .map((file) => getPost(file))
    .sort((post1, post2) => {
      // sort by date descendingly
      if (!post1.dateIsoString) {
        return 1;
      }
      if (!post2.dateIsoString) {
        return -1;
      }
      return post1.dateIsoString > post2.dateIsoString ? -1 : 1;
    });
}
