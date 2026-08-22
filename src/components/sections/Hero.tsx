"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 md:pt-44">
      <div className="container">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-[980px]"
          >
            <p className="eyebrow">Creative Developer · India</p>

            <h1 className="display mt-8">
              I build digital
              <span className="block">experiences with</span>
              <span className="block text-[var(--accent)]">character.</span>
            </h1>
          </motion.div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: "easeOut",
              }}
            >
              <p className="body-copy max-w-xl text-lg">
                I&apos;m Nakul, a creative developer focused on thoughtful
                websites, interfaces, and digital experiences where design and
                code work together.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-[14px] bg-[#151515] px-5 py-3 text-sm font-semibold !text-white shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(0,0,0,0.16)]"
                >
                  <span>Explore work</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-[14px] border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)]"
                >
                  Start a project
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="relative mx-auto w-full max-w-[360px] lg:mx-0 lg:ml-auto"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="project-frame aspect-[4/5]"
              >
                <Image
                  src="/images/nakul-profile.webp.png"
                  alt="Nakul"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 360px"
                  className="object-cover object-center"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.9,
                  ease: "easeOut",
                }}
                className="absolute -left-4 bottom-6 hidden rounded-[14px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-[0_10px_30px_rgba(20,20,20,0.08)] sm:block"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                  Currently
                </p>

                <p className="mt-1 text-sm font-semibold">
                  Building thoughtful things
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1,
                  ease: "easeOut",
                }}
                whileHover={{ rotate: -8, scale: 1.06 }}
                className="absolute -right-4 -bottom-5 flex size-16 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-[0_12px_28px_rgba(49,91,234,0.25)]"
              >
                <ArrowDown size={20} />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: "easeOut",
            }}
            className="mt-20 border-y border-[var(--border)] py-5"
          >
            <div className="grid gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)] sm:grid-cols-2 lg:grid-cols-4">
              <span>Web Design</span>
              <span>Frontend Development</span>
              <span>Creative Direction</span>
              <span>Responsive Experiences</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}