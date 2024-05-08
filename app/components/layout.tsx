import { Link, useLocation } from "@remix-run/react";
import { ReactNode } from "react";

const nav = {
  items: [
    { label: "Index", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  return (
    <div className="max-w-xl">
      <header className="mb-4">
        <h1 className="text-lg font-semibold">
          Welcome to Remix (with Vite and Cloudflare)
        </h1>
      </header>
      <nav className="border-black border-dotted border-t border-b">
        {nav.items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`inline-block p-1.5 ${pathname === item.href && 'bg-black text-white'}`}>
            {item.label}
          </Link>
        ))}
      </nav>
      <section role="main" className="my-4 pb-4 border-b border-black border-dotted">{children}</section>
    </div>
  );
}
