"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/src/data/projects";

export default function SelectedWork() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="selected-work-grid">
          {/* LEFT — STICKY */}
          <aside className="selected-work-sidebar">
            <div className="selected-work-sticky">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                <p className="eyebrow">Selected Work</p>

                <h2 className="selected-work-heading">
                  Projects
                  <span>I&apos;ve shaped</span>
                  <span>from idea</span>
                  <strong>to interface.</strong>
                </h2>

                <p className="body-copy selected-work-intro">
                  A selection of websites and digital experiences focused on
                  strong visual systems, useful interactions, and responsive
                  execution.
                </p>

                <div className="selected-work-meta">
                  <span>03 Projects</span>
                  <span>Scroll to explore</span>
                </div>
              </motion.div>
            </div>
          </aside>

          {/* RIGHT — NORMAL SCROLL */}
          <div className="selected-work-projects">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="selected-work-project"
              >
                <motion.div
                  initial={{ opacity: 0, y: 55 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.85,
                    ease: "easeOut",
                  }}
                >
                  <div className="selected-work-top">
                    <div className="selected-work-label">
                      <span>0{index + 1}</span>
                      <span className="selected-work-line" />
                      <span>{project.category}</span>
                    </div>

                    <span className="selected-work-year">
                      {project.year}
                    </span>
                  </div>

                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{
                        duration: 0.75,
                        ease: "easeOut",
                      }}
                      className="project-frame rounded-[18px]"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden rounded-[18px]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          priority={index === 0}
                          sizes="(max-width: 1023px) 100vw, 800px"
                          className="object-cover object-top transition-transform duration-[1100ms] ease-out group-hover:scale-[1.018]"
                        />
                      </div>
                    </motion.div>

                    <div className="selected-work-info">
                      <div>
                        <h3 className="selected-work-title">
                          {project.title}
                        </h3>

                        <p className="body-copy mt-5 max-w-2xl">
                          {project.description}
                        </p>
                      </div>

                      <div className="selected-work-action">
                        <span>Open live project</span>

                        <span className="selected-work-arrow">
                          <ArrowUpRight size={18} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .selected-work-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
          gap: 80px;
          align-items: start;
        }

        .selected-work-sidebar {
          min-width: 0;
        }

        .selected-work-sticky {
          position: sticky;
          top: 100px;
        }

        .selected-work-heading {
          margin-top: 28px;
          font-size: clamp(4rem, 6.5vw, 7rem);
          font-weight: 700;
          line-height: 0.84;
          letter-spacing: -0.075em;
        }

        .selected-work-heading span,
        .selected-work-heading strong {
          display: block;
        }

        .selected-work-heading span:nth-child(2) {
          color: var(--muted);
        }

        .selected-work-heading strong {
          color: var(--accent);
        }

        .selected-work-intro {
          max-width: 430px;
          margin-top: 32px;
        }

        .selected-work-meta {
          display: flex;
          justify-content: space-between;
          max-width: 430px;
          margin-top: 38px;
          padding-top: 18px;
          border-top: 1px solid var(--border);
          color: var(--muted);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .selected-work-projects {
          min-width: 0;
        }

        .selected-work-project {
          padding: 55px 0;
        }

        .selected-work-project:first-child {
          padding-top: 0;
        }

        .selected-work-project:last-child {
          padding-bottom: 100px;
        }

        .selected-work-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .selected-work-label {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
          color: var(--muted);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .selected-work-label span:last-child {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .selected-work-line {
          width: 32px;
          height: 1px;
          flex: 0 0 auto;
          background: var(--border);
        }

        .selected-work-year {
          flex: 0 0 auto;
          color: var(--muted);
          font-size: 11px;
          font-weight: 700;
        }

        .selected-work-info {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 24px;
          align-items: end;
          margin-top: 24px;
        }

        .selected-work-title {
          font-size: clamp(2.8rem, 4.8vw, 5.2rem);
          font-weight: 700;
          line-height: 0.88;
          letter-spacing: -0.07em;
          transition: transform 800ms ease;
        }

        .group:hover .selected-work-title {
          transform: translateX(5px);
        }

        .selected-work-action {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
        }

        .selected-work-arrow {
          display: flex;
          width: 46px;
          height: 46px;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--surface);
          transition: all 700ms ease;
        }

        .group:hover .selected-work-arrow {
          transform: translateY(-4px);
          border-color: var(--foreground);
          background: var(--foreground);
          color: var(--background);
        }

        @media (max-width: 1023px) {
          .selected-work-grid {
            display: block;
          }

          .selected-work-sticky {
            position: static;
          }

          .selected-work-project {
            padding: 50px 0;
          }

          .selected-work-project:first-child {
            padding-top: 0;
          }
        }

        @media (max-width: 639px) {
          .selected-work-heading {
            font-size: 3.5rem;
          }

          .selected-work-info {
            grid-template-columns: 1fr;
          }

          .selected-work-action {
            justify-content: space-between;
          }
        }
      `}</style>
    </section>
  );
}