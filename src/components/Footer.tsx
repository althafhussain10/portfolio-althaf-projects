import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground flex items-center gap-1.5">
          Developed with <Heart className="w-4 h-4 text-primary fill-primary" /> by{" "}
          <span className="text-gradient font-semibold">Mohamed Althaf Hussain</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
