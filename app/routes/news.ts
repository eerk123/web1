// server-side code
import { LoaderFunction, json } from "@remix-run/node";
import fs from "fs/promises";
import path from "path";

// Loader: Server дээр зөвхөн ажиллана
export const loader: LoaderFunction = async () => {
  const filePath = path.resolve("app/data/news.json");
  const data = await fs.readFile(filePath, "utf-8");
  const news = JSON.parse(data);
  return json(news);
};
