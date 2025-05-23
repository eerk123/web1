// app/root.tsx
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  ScrollRestoration,
  Scripts,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";

// Header болон Footer компонентуудыг импортлоно
import Header from "~/components/home/Header";
import Footer from "~/components/home/footer";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: MetaFunction = () => [
  { charset: "utf-8" },
  { title: "My News Site" },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
];

export default function App() {
  return (
    <html lang="en" className="h-full bg-white text-gray-900">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Outlet />
        </main>

        <Footer />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
