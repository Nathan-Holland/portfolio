import FadeIn from "./FadeIn";

export default function AboutSection() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="flex">
        {/* Left label */}
        <div className="w-1/3">
          <FadeIn delay={0} direction="up">
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
              <span className="text-xs font-medium uppercase tracking-[0.12em]">
                About
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Right content */}
        <div className="w-2/3">
          <FadeIn delay={0.1} direction="up">
            <p className="text-[40px] font-normal leading-[1.25] tracking-tight">
              I&apos;m Nate, a British Designer based in Barcelona with over
              seven years of experience. Since 2017, I&apos;ve contributed to
              award-winning projects like Mailboard, Viatu, and OpenFortune,
              crafting distinctive brand identities and intuitive, visually
              stunning websites.
            </p>
          </FadeIn>

          <FadeIn delay={0.25} direction="up">
            <a
              href="#contact"
              className="mt-10 inline-block text-sm tracking-wide text-black transition-opacity hover:opacity-60"
            >
              [ Find out more ]
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
