import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import fs from "fs/promises";
import path from "path";

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
}


export const loader = async () => {
  const filePath = path.resolve("app/data/news.json");
  const fileContent = await fs.readFile(filePath, "utf-8");
  const news = JSON.parse(fileContent);
  return json(news);
};

export default function Index() {
  const news = useLoaderData();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Мэдээний жагсаалт</h1>
      {news.map((item: any) => (
        <div key={item.id} className="border-b p-4">
          <h2 className="text-xl font-bold">{item.title}</h2>
          <p>{item.summary}</p>
          <p className="text-sm text-gray-500">{item.date}</p>
        </div>
      ))}
    </div>
  );
}