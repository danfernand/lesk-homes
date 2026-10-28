import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Our Work" },
  { href: "/#process", label: "Process" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="shrink-0">
          <Image
            src={logo}
            alt="Lesk Custom Homes"
            sizes="180px"
            className="h-12 w-auto"
          />
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-ink">
            Inspired Luxury. Built with Integrity.
          </p>
          <p className="mt-2 text-sm text-ink-soft">
            Luxury custom home builder — Dallas, Texas.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft hover:text-brand-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-ink-soft">
          © {new Date().getFullYear()} Lesk Custom Homes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
