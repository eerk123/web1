import { useLoaderData } from '@remix-run/react';
import { loader } from './news';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
type NewsItem = {
  id: string;
  title: string;
  content: string;
  date: string;
};
export default function NewsPage() {
  const items = useLoaderData<typeof loader>() || [];

  return (
    <div className="p-4 space-y-4">
      {items.map((item: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; date: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
        <div key={item.id} className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-bold">{item.title}</h2>
          <p>{item.content}</p>
          <span className="text-sm text-gray-500">{item.date}</span>
        </div>
      ))}
    </div>
  );
}
