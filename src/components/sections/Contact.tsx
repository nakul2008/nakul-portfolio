"use client";

import { FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  MoveUpRight,
} from "lucide-react";

const EMAIL = "goodthoughts320@gmail.com";
const WHATSAPP = "917310637097";

function createGmailLink(
  name = "",
  email = "",
  project = "",
  message = "",
) {
  const subject = encodeURIComponent(
    project
      ? `Project Enquiry — ${project}`
      : "Project Enquiry",
  );

  const body = encodeURIComponent(
    [
      name ? `Name: ${name}` : "",
      email ? `Email: ${email}` : "",
      project ? `Project: ${project}` : "",
      "",
      message || "Hi Nakul,\n\nI would like to discuss a project with you.",
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    EMAIL,
  )}&su=${subject}&body=${body}`;
}

export default function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const project = String(form.get("project") || "");
    const message = String(form.get("message") || "");

    const gmailLink = createGmailLink(
      name,
      email,
      project,
      message,
    );

    window.open(
      gmailLink,
      "_blank",
      "noopener,noreferrer",
    );
  }

  const quickEmailLink = createGmailLink();

  return (
    <section
      id="contact"
      className="section border-t border-[var(--border)]"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_70px_rgba(20,20,20,0.09)]"
        >
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div
              style={{
                background: "#151515",
                color: "#f4f3ef",
              }}
              className="relative overflow-hidden p-8 sm:p-10 md:p-14 lg:p-16"
            >
              <div
                style={{
                  color: "#f4f3ef",
                  opacity: 0.08,
                }}
                className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full border"
              />

              <div
                style={{
                  color: "#f4f3ef",
                  opacity: 0.08,
                }}
                className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full border"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                Have a project in mind?
              </p>

              <h2 className="mt-8 max-w-3xl text-[clamp(3.6rem,7vw,7.5rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
                Let&apos;s make
                <span className="block text-white/40">
                  something
                </span>
                <span
                  className="block"
                  style={{ color: "#7f9cff" }}
                >
                  good.
                </span>
              </h2>

              <p className="mt-9 max-w-lg text-base leading-7 text-white/65">
                Have an idea, a redesign, or a new digital experience
                in mind? Tell me what you&apos;re working on and where
                you want to take it.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 0 }}
                  href={quickEmailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#f4f3ef",
                    color: "#151515",
                    WebkitTextFillColor: "#151515",
                  }}
                  className="inline-flex items-center gap-2 rounded-[14px] px-5 py-3 text-sm font-semibold shadow-[0_10px_28px_rgba(0,0,0,0.12)] transition-all duration-700 hover:shadow-[0_18px_36px_rgba(0,0,0,0.18)]"
                >
                  <span
                    style={{
                      color: "#151515",
                      WebkitTextFillColor: "#151515",
                    }}
                  >
                    Email me
                  </span>

                  <ArrowUpRight
                    size={16}
                    color="#151515"
                  />
                </motion.a>

                <motion.a
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 0 }}
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#f4f3ef",
                    borderColor: "rgba(244,243,239,0.2)",
                  }}
                  className="inline-flex items-center gap-2 rounded-[14px] border px-5 py-3 text-sm font-semibold transition-all duration-700 hover:bg-white hover:text-black"
                >
                  WhatsApp
                  <MessageCircle size={16} />
                </motion.a>
              </div>

              <div className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-white/40">
                <span
                  style={{ background: "#7f9cff" }}
                  className="size-2 rounded-full"
                />

                Available for selected projects
              </div>
            </div>

            <div className="p-8 sm:p-10 md:p-14 lg:p-16">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                  Start a conversation
                </p>

                <MoveUpRight
                  size={18}
                  className="text-[var(--muted)]"
                />
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-7"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-[12px] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3.5 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] transition-all duration-500 focus:border-[var(--foreground)] focus:bg-[var(--surface)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-[12px] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3.5 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] transition-all duration-500 focus:border-[var(--foreground)] focus:bg-[var(--surface)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project"
                    className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]"
                  >
                    Project
                  </label>

                  <input
                    id="project"
                    name="project"
                    type="text"
                    required
                    placeholder="What are you building?"
                    className="w-full rounded-[12px] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3.5 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] transition-all duration-500 focus:border-[var(--foreground)] focus:bg-[var(--surface)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me a little about the project..."
                    className="w-full resize-none rounded-[12px] border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3.5 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] transition-all duration-500 focus:border-[var(--foreground)] focus:bg-[var(--surface)]"
                  />
                </div>

                <motion.button
                  whileHover={{ y: -3 }}
                  whileTap={{ y: 0 }}
                  type="submit"
                  style={{
                    background: "#151515",
                    color: "#f4f3ef",
                    WebkitTextFillColor: "#f4f3ef",
                  }}
                  className="group flex w-full items-center justify-center gap-2 rounded-[14px] px-5 py-4 text-sm font-semibold shadow-[0_10px_28px_rgba(20,20,20,0.12)] transition-all duration-700 hover:shadow-[0_18px_36px_rgba(20,20,20,0.18)]"
                >
                  <span style={{ color: "#f4f3ef" }}>
                    Send message
                  </span>

                  <ArrowUpRight
                    size={16}
                    color="#f4f3ef"
                    className="transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}