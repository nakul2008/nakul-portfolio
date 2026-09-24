"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const EMAIL = "nakul.mode@gmail.com";
const INSTAGRAM = "https://instagram.com/vnx.nakul";
const LINKEDIN = "https://www.linkedin.com/in/nakul-kumar-30876a438/";
const GITHUB = "https://github.com/nakul2008";
const WHATSAPP = "https://wa.me/917310637097";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="py-16 md:py-20"
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow">Keep in touch</p>

              <h2 className="mt-6 max-w-4xl text-[clamp(3.25rem,8vw,8rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
                Still scrolling?
                <span className="block text-[var(--accent)]">
                  Say hello.
                </span>
              </h2>

              <motion.a
                whileHover={{ x: 6 }}
                href={`mailto:${EMAIL}`}
                className="mt-8 inline-flex items-center gap-2 text-lg font-semibold"
              >
                {EMAIL}
                <ArrowUpRight size={18} />
              </motion.a>
            </div>

            <div className="lg:min-w-[260px]">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                Explore
              </p>

              <nav className="mt-5 grid grid-cols-2 gap-x-8 gap-y-4">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-[var(--muted)] transition-all duration-200 hover:translate-x-1 hover:text-[var(--foreground)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-button inline-flex h-10 items-center justify-center border border-[var(--border)] bg-[var(--surface)] px-4 text-xs font-semibold uppercase tracking-[0.08em]"
                >
                  Instagram
                </a>

                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-button inline-flex h-10 items-center justify-center border border-[var(--border)] bg-[var(--surface)] px-4 text-xs font-semibold uppercase tracking-[0.08em]"
                >
                  LinkedIn
                </a>
                
                <a
                   href={GITHUB}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover-button inline-flex h-10 items-center justify-center px-5"
                >
                  GitHub
                </a>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-button inline-flex h-10 items-center justify-center border border-[var(--border)] bg-[var(--surface)] px-4 text-xs font-semibold uppercase tracking-[0.08em]"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4 border-t border-[var(--border)] py-5 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Nakul</span>

            <span className="hidden h-1 w-1 rounded-full bg-[var(--border)] sm:block" />

            <span>Creative Developer</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 font-semibold text-[var(--foreground)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}