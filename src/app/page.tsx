import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "Crunch",
    tags: ["Branding", "UI Design"],
    image: "/projects/crunch/main_img.jpg",
  },
  {
    title: "Crunch",
    tags: ["Branding", "UI Design"],
    image: "/projects/crunch/main_img.jpg",
  },
  {
    title: "Crunch",
    tags: ["Branding", "UI Design"],
    image: "/projects/crunch/main_img.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Projects */}
      <div id="projects">
        {projects.map((project, i) => (
          <ProjectCard key={i} title={project.title} tags={project.tags} image={project.image} index={i} />
        ))}
      </div>

      <AboutSection />

      {/* Third project card (after about) */}
      <ProjectCard title="Crunch" tags={["Branding", "UI Design"]} image="/projects/crunch/main_img.jpg" index={0} />

      <Footer />
    </main>
  );
}
