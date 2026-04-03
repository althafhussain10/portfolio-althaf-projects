import { Code2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <Code2 className="w-5 h-5 text-primary" />
          <span className="text-gradient">MAH</span>
        </a>
        <div className="flex items-center gap-8">
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Skills
          </a>
          <a
            href="#contact"
            className="text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
