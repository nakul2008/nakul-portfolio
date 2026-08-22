"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/src/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="section border-t border-[var(--border)] bg-[var(--surface-soft)]"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20"
        >
          <div>
            <p className="eyebrow">Services</p>

            <h2 className="section-title mt-6 max-w-xl">
              From first idea
              <span className="block text-[var(--muted)]">
                to final detail.
              </span>
            </h2>

            <p className="body-copy mt-7 max-w-sm">
              Flexible support for brands, businesses, and people who need a
              digital experience that feels considered from the first screen
              to the last.
            </p>
          </div>

          <div className="border-t border-[var(--border)]">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
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
                className="group grid gap-5 border-b border-[var(--border)] py-8 md:grid-cols-[70px_1fr_1fr_auto] md:items-start md:py-10"
              >
                <span className="text-xs font-semibold tracking-[0.15em] text-[var(--muted)]">
                  0{index + 1}
                </span>

                <h3 className="text-3xl font-semibold tracking-[-0.05em] transition-transform duration-300 group-hover:translate-x-1 md:text-4xl">
                  {service.title}
                </h3>

                <p className="body-copy max-w-sm text-sm md:text-base">
                  {service.description}
                </p>

                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: -5,
                  }}
                  className="hidden size-11 items-center justify-center rounded-full border border-[var(--border)] transition-colors duration-300 group-hover:border-[var(--foreground)] group-hover:bg-[var(--foreground)] group-hover:text-white md:flex"
                >
                  <ArrowUpRight size={17} strokeWidth={1.8} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mt-16 flex flex-col gap-4 border-t border-[var(--border)] pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Open to selected freelance projects
          </span>

          <span className="text-sm font-semibold">
            Websites · Interfaces · Digital Experiences
          </span>
        </motion.div>
      </div>
    </section>
  );
}