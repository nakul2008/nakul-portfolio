"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "Frontend Development",
    text: "Responsive, production-ready interfaces built with clean React and Next.js architecture.",
  },
  {
    number: "02",
    title: "UI / UX Implementation",
    text: "Thoughtful interfaces where typography, spacing, hierarchy, and interaction work together.",
  },
  {
    number: "03",
    title: "Creative Development",
    text: "Distinctive digital experiences with visual direction that avoids generic template patterns.",
  },
  {
    number: "04",
    title: "Responsive Experiences",
    text: "Layouts designed to feel intentional across desktop, tablet, and mobile.",
  },
];

export default function Capabilities() {
  return (
    <section className="section border-t border-[var(--border)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="eyebrow">Capabilities</p>

            <h2 className="section-title mt-6 max-w-3xl">
              Built with
              <span className="block text-[var(--muted)]">
                design and code.
              </span>
            </h2>
          </div>

          <p className="body-copy max-w-md">
            The technical and creative disciplines I bring together when
            shaping a digital experience.
          </p>
        </motion.div>

        <div className="mt-16 border-t border-[var(--border)]">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="group grid gap-6 border-b border-[var(--border)] py-7 md:grid-cols-[80px_1fr_1fr] md:items-start md:py-9"
            >
              <span className="text-xs font-semibold tracking-[0.15em] text-[var(--muted)]">
                {item.number}
              </span>

              <h3 className="text-3xl font-semibold tracking-[-0.05em] transition-transform duration-300 group-hover:translate-x-1 md:text-4xl">
                {item.title}
              </h3>

              <p className="body-copy max-w-md text-sm md:text-base">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}