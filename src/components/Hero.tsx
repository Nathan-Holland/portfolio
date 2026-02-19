import TimeWidget from "./TimeWidget";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="px-5 pb-20 pt-28">
      <div className="flex">
        {/* Left side - time widget */}
        <div className="w-1/2">
          <FadeIn delay={0.1} direction="up">
            <TimeWidget />
          </FadeIn>
        </div>

        {/* Right side - heading content */}
        <div className="w-1/2">
          <FadeIn delay={0.15} direction="up">
            <h1 className="text-[64px] font-normal leading-[1.1] tracking-tight">
              Senior Designer helping
              <br />
              brands around the{" "}
              <span className="inline-block align-middle">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="inline -mt-2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M4.93 4.93l14.14 14.14" />
                  <path d="M19.07 4.93L4.93 19.07" />
                </svg>
              </span>{" "}
              globe.
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <p className="mt-10 text-base text-muted">
              Senior Designer working with Brand
            </p>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <a
              href="#about"
              className="mt-8 inline-block text-sm tracking-wide text-black transition-opacity hover:opacity-60"
            >
              [ Find out more ]
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
