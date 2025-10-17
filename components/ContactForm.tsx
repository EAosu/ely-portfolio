"use client";
import { useState } from "react";

export default function ContactForm({ t, isHe }: { t: any; isHe: boolean }) {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch("https://formspree.io/f/xanpvdpw", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) setStatus("sent");
            else throw new Error("Failed");
        } catch {
            setStatus("error");
        }
    }

    return (
        <section dir={isHe ? "rtl" : "ltr"} className="mt-4 py-16 max-w-2xl mx-auto px-4 card sub-gradient">
            <h1 className="text-4xl font-bold mb-3 text-center">{t.title}</h1>
            <p className="opacity-80 text-center mb-8">{t.subtitle}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder={t.name}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl p-3 bg-white/20 border border-black/40 text-black placeholder-black/60"
                    required
                />
                <input
                    type="email"
                    placeholder={t.email}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl p-3 bg-white/20 border border-black/40 text-black placeholder-black/60"
                    required
                />
                <textarea
                    placeholder={t.message}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl p-3 bg-white/20 border border-black/40 text-black placeholder-black/60 min-h-[120px]"
                    required
                />
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn btn-primary w-full"
                >
                    {status === "sending"
                        ? t.sending
                        : status === "sent"
                            ? t.sent
                            : status === "error"
                                ? t.error
                                : t.send}
                </button>
            </form>
        </section>
    );
}
