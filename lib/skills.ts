export type Skill = {
    name: string;
    icon?: string;
    color?: string;
    group?: "Frontend" | "Backend" | "Data" | "Tools";
};

export const skills: Skill[] = [
    { name: "React",      icon: "/icons/react.svg",     color: "bg-cyan-500/15",    group: "Frontend" },
    { name: "Next.js",    icon: "/icons/nextjs.svg",    color: "bg-white/10",       group: "Frontend" },
    { name: "TypeScript", icon: "/icons/typescript.svg",color: "bg-blue-500/15",    group: "Frontend" },
    { name: "Tailwind",   icon: "/icons/tailwind.svg",  color: "bg-sky-500/15",     group: "Frontend" },

    { name: "Node.js",    icon: "/icons/node.svg",      color: "bg-green-500/15",   group: "Backend" },
    { name: "Prisma",     icon: "/icons/prisma.svg",    color: "bg-emerald-500/15", group: "Backend" },
    { name: "PostgreSQL", icon: "/icons/postgres.svg",  color: "bg-indigo-500/15",  group: "Data" },

    { name: "Git & GitHub", icon: "/icons/github.svg",  color: "bg-white/10",       group: "Tools" },
    { name: "Vercel",       icon: "/icons/vercel.svg",  color: "bg-white/10",       group: "Tools" },
];
