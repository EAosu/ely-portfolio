import { Github, Linkedin, Mail } from "lucide-react";

export function SocialLinks() {
    return (
        <div className="flex gap-5 justify-center mt-8">
            <a href="https://github.com/EAosu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-brand-400 transition-colors">
                <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/ely-asaf/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-brand-400 transition-colors">
                <Linkedin size={28} />
            </a>
            <a href="mailto:elyasaf.dev@gmail.com" aria-label="Email" className="hover:text-brand-400 transition-colors">
                <Mail size={28} />
            </a>
        </div>
    );
}
