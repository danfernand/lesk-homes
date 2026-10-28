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

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/">
          <Image
            src={logo}
            alt="Lesk Custom Homes"
            sizes="165px"
            loading="eager"
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-brand-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+12146036879"
            className="hidden text-sm font-medium text-ink-soft hover:text-brand-dark sm:block"
          >
            (214) 603-6879
          </a>
          <Link
            href="/#contact"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
