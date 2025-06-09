import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {NAV_ITEMS.map(({ href, label }) => (
        <Link
          key={label}
          href={href}
          className="nav-link font-medium transition-colors pb-1"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
