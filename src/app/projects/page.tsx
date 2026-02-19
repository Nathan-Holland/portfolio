import Navbar from "@/components/Navbar";
import ProjectRow from "@/components/ProjectRow";
import FadeIn from "@/components/FadeIn";

const projects = [
  { title: "Crunch", tags: ["Branding", "UI Design"], year: "2025", image: "/projects/crunch/main_img.jpg" },
  { title: "Wedge", tags: ["App Design"], year: "2026" },
  { title: "Preply", tags: ["Product Design"], year: "2025" },
  { title: "SplitMetrics", tags: ["Branding"], year: "2026" },
  { title: "Viatu", tags: ["Branding"], year: "2026" },
  { title: "OpenFortune", tags: ["Branding"], year: "2026" },
  { title: "The Despatch Company", tags: ["Branding"], year: "2026" },
  { title: "Sophic", tags: ["Branding"], year: "2026" },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar activePage="projects" />

      {/* Hero */}
      <section className="px-5 pb-16 pt-24">
        <div className="flex">
          {/* Left label */}
          <div className="w-1/2">
            <FadeIn delay={0} direction="up">
              <div className="flex items-center gap-2 text-muted">
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
                <span className="text-[11px] font-medium uppercase tracking-[0.14em]">
                  Partnering with brands
                  <br />
                  all around the world
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Right heading */}
          <div className="w-1/2">
            <FadeIn delay={0.1} direction="up">
              <h1 className="text-[64px] font-normal leading-[1.1] tracking-tight">
                Projects
              </h1>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <p className="mt-8 text-base text-muted">
                Senior Designer working with Brand
              </p>
            </FadeIn>

            <FadeIn delay={0.3} direction="up">
              <a
                href="#contact"
                className="mt-6 inline-block text-sm tracking-wide text-black transition-opacity hover:opacity-60"
              >
                [ Find out more ]
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Project List */}
      <section className="pb-20">
        {projects.map((project, i) => (
          <ProjectRow
            key={project.title}
            title={project.title}
            tags={project.tags}
            year={project.year}
            image={project.image}
            index={i}
          />
        ))}
      </section>
    </main>
  );
}
