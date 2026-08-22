"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start with the idea, goals, audience, and the problem the experience needs to solve.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "I shape the structure, visual direction, content hierarchy, and overall experience.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "The approved direction becomes a responsive, polished interface with real interactions.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "Final details are tuned across screens, browsers, and the small moments that make it feel finished.",
  },
];

export default function Process() {
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
            <p className="eyebrow">Process</p>

            <h2 className="section-title mt-6 max-w-3xl">
              Simple process.
              <span className="block text-[var(--muted)]">
                Thoughtful outcome.
              </span>
            </h2>
          </div>

          <p className="body-copy max-w-md">
            A clear process keeps the work focused while leaving enough space
            for ideas, exploration, and refinement.
          </p>
        </motion.div>

        <div className="mt-16 grid border-l border-[var(--border)] md:grid-cols-4 md:border-l-0 md:border-t">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
              }}
              className="group relative border-b border-[var(--border)] py-7 pl-6 transition-shadow duration-300 md:border-b-0 md:border-r md:px-6 md:py-8 hover:shadow-[0_16px_35px_rgba(20,20,20,0.07)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.15em] text-[var(--muted)]">
                  {step.number}
                </span>

                {index < steps.length - 1 && (
                  <ArrowRight
                    size={17}
                    strokeWidth={1.7}
                    className="hidden text-[var(--muted)] transition-transform duration-300 group-hover:translate-x-1 md:block"
                  />
                )}
              </div>

              <h3 className="mt-16 text-3xl font-semibold tracking-[-0.05em]">
                {step.title}
              </h3>

              <p className="body-copy mt-4 text-sm">
                {step.description}
              </p>

              <div className="mt-8 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}