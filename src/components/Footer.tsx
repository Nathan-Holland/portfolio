import ParticleLogo from "./ParticleLogo";

export default function Footer() {
  return (
    <footer className="mt-8 flex h-screen flex-col bg-white">
      {/* Particle Logo Section */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
        <ParticleLogo />
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between px-5 py-5">
        <div className="flex items-center gap-2 text-sm text-muted">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <span className="font-mono text-xs tracking-wider">23:23</span>
        </div>

        <span className="text-sm text-muted">© 2026</span>
      </div>
    </footer>
  );
}
