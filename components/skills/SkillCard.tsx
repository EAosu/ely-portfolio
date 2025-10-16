"use client";

import { motion } from "framer-motion";

type Props = {
    name: string;
    icon?: string;
    color?: string; // Tailwind bg-* class
    rtl?: boolean;
};

export default function SkillCard({ name, icon, color, rtl }: Props) {
    const initials = name.split(/\s|-/).map(w => w[0]).slice(0,2).join("").toUpperCase();

    return (
        <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            whileHover={{ y: -2 }}
            className="
        group relative rounded-xl border border-black/40
        bg-white/5 hover:bg-white/10 transition-all duration-200
        shadow-sm hover:shadow-md
      "
        >
            <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center ring-0 ${color || "bg-white/10"}`}>
                    {icon ? (
                        <img src={icon} alt={`${name} icon`} className="w-5 h-5" />
                    ) : (
                        <span className="text-sm font-semibold text-black/80">{initials}</span>
                    )}
                </div>
                <div className={rtl ? "rtl:text-right text-sm font-medium" : "text-sm font-medium"}>
                    {name}
                </div>
            </div>
        </motion.div>
    );
}
