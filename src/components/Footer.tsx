const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-lg font-semibold text-ink">Lesk Homes</p>
          <p className="mt-1 text-sm text-ink-soft">
            [Placeholder] Custom home builder — city, state.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-ink-soft">
          © {new Date().getFullYear()} Lesk Homes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
