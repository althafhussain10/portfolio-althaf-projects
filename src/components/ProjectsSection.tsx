import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and a responsive storefront.",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with drag-and-drop boards, real-time updates, and team analytics.",
    tags: ["TypeScript", "React", "Supabase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Chat Interface",
    description: "Modern conversational AI interface with streaming responses, markdown rendering, and conversation history.",
    tags: ["Next.js", "OpenAI", "Tailwind", "Vercel"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather visualization dashboard with 7-day forecasts, interactive maps, and location-based alerts.",
    tags: ["React", "D3.js", "API", "CSS"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio CMS",
    description: "Headless CMS-powered portfolio with dynamic content management, MDX blog support, and SEO optimization.",
    tags: ["Next.js", "Sanity", "TypeScript", "Vercel"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Fitness Tracker",
    description: "Mobile-first fitness tracking app with workout logging, progress charts, and personalized recommendations.",
    tags: ["React Native", "Firebase", "Charts", "Auth"],
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Each project reflects a commitment to clean code, thoughtful design, and meaningful user experiences.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
