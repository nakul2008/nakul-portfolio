"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="section overflow-hidden border-t border-[var(--border)]"
    >
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="eyebrow">About Me</p>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: 0.12,
                ease: "easeOut",
              }}
              whileHover={{ y: -7 }}
              className="project-frame relative mt-8 hidden h-[420px] overflow-hidden bg-[var(--surface-soft)] lg:block"
            >
              <Image
                src="/images/nakul-profile.webp.png"
                alt="Nakul"
                fill
                priority
                sizes="420px"
                className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.035]"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: "easeOut",
            }}
          >
            <h2 className="text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              Good work
              <span className="block text-[var(--muted)]">
                should feel
              </span>
              <span className="block text-[var(--accent)]">
                intentional.
              </span>
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="text-xl leading-[1.5] tracking-[-0.02em]">
                  I like building digital experiences that have a clear point
                  of view, but still feel easy to use.
                </p>

                <p className="body-copy mt-6">
                  My work sits between visual design and frontend development.
                  I care about typography, spacing, hierarchy, responsive
                  behavior, and the small interactions that make a product
                  feel finished.
                </p>
              </div>

              <div className="border-t border-[var(--border)] pt-5 md:border-l md:border-t-0 md:pl-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                  Approach
                </p>

                <div className="mt-5 space-y-5">
                  {[
                    [
                      "01 · Understand",
                      "Start with the idea, audience, and purpose.",
                    ],
                    [
                      "02 · Shape",
                      "Turn the direction into a clear visual system.",
                    ],
                    [
                      "03 · Build",
                      "Develop the experience with responsive detail.",
                    ],
                  ].map(([title, text], index) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      whileHover={{ x: 5 }}
                    >
                      <p className="text-sm font-semibold">{title}</p>
                      <p className="body-copy mt-1 text-sm">{text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center justify-between border-y border-[var(--border)] py-5">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                Based in India
              </span>

              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                Available for selected projects
                <ArrowDownRight size={16} strokeWidth={1.8} />
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-16 overflow-hidden border-y border-[var(--border)] py-5"
        >
          <div className="flex min-w-max items-center gap-10 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)] md:justify-between">
            <span>Creative Development</span>
            <span>UI Systems</span>
            <span>Frontend</span>
            <span>Interaction</span>
            <span>Responsive Design</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}