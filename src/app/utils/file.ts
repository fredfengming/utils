import fs from "fs";
import path from "path";

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

/**
 * Search the given dir recursively and return all found files
 * @param dir directory to search
 * @returns all found relative file paths
 */
export function getAllFiles(dir: string) {
  const output: string[] = [];
  getFilesRecur(dir, "", output);
  return output;
}
