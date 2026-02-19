import Logo from "./Logo";

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Curation", href: "/#curation" },
];

interface NavbarProps {
  activePage?: string;
}

export default function Navbar({ activePage }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between px-5 py-5">
      <Logo />

      <div className="flex items-center gap-[3px]">
        {navItems.map((item) => {
          const isActive =
            activePage === item.label.toLowerCase();
          return (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-1.5 rounded-sm px-4 py-1.5 text-[13px] tracking-wide transition-colors ${
                isActive
                  ? "bg-black/[0.06] text-black"
                  : "bg-tag-bg text-black hover:bg-black/10"
              }`}
            >
              {item.label}
              <span className="text-[10px] text-muted">
                {isActive ? "×" : "+"}
              </span>
            </a>
          );
        })}
      </div>

      <a
        href="#contact"
        className="flex items-center gap-2 rounded-sm bg-black px-5 py-1.5 text-[13px] tracking-wide text-white transition-opacity hover:opacity-80"
      >
        Get in touch
        <span className="text-xs">→</span>
      </a>
    </nav>
  );
}
