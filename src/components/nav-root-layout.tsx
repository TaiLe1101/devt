"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
];

export function NavRootLayout() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-4">
        {NAV_ITEMS.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`p-2 rounded transition-all ${
                pathname === href
                  ? "bg-slate-50 bg-opacity-10"
                  : "hover:bg-slate-50 hover:bg-opacity-10"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
