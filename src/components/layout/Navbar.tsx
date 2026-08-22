"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeToggle from "@/src/components/ui/ThemeToggle";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container pt-4">
        <nav
          style={{
            position: "relative",
            borderRadius: "16px",
            border: "1px solid var(--border)",
            background: "rgba(244, 243, 239, 0.92)",
            boxShadow: "0 8px 24px rgba(20,20,20,0.06)",
            backdropFilter: "blur(14px)",
          }}
          className="px-4 py-3"
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={closeMenu}
              style={{ color: "#151515" }}
              className="text-lg font-bold tracking-[-0.04em]"
            >
              Nakul<span style={{ color: "#315bea" }}>.</span>
            </Link>

            <div className="hidden items-center gap-7 md:flex">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: "#151515" }}
                  className="text-sm font-medium transition-all duration-500 hover:-translate-y-0.5 hover:opacity-60"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  minWidth: "116px",
                  height: "44px",
                  padding: "0 18px",
                  borderRadius: "14px",
                  background: "#151515",
                  color: "#ffffff",
                  WebkitTextFillColor: "#ffffff",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.10)",
                }}
                className="text-sm font-semibold transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(0,0,0,0.16)]"
              >
                <span
                  style={{
                    color: "#ffffff",
                    WebkitTextFillColor: "#ffffff",
                  }}
                >
                  Let&apos;s talk
                </span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={2}
                  color="#ffffff"
                />
              </Link>

              <ThemeToggle />
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />

              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                style={{
                  color: "#151515",
                  background: "#ffffff",
                }}
                className="flex size-10 items-center justify-center rounded-[12px] border border-[var(--border)]"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {open && (
            <div className="border-t border-[var(--border)] pt-4 md:hidden">
              <div className="flex flex-col">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    style={{ color: "#151515" }}
                    className="border-b border-[var(--border)] py-4 text-lg font-medium"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="#contact"
                  onClick={closeMenu}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    marginTop: "16px",
                    padding: "12px 16px",
                    borderRadius: "14px",
                    background: "#151515",
                    color: "#ffffff",
                    WebkitTextFillColor: "#ffffff",
                  }}
                  className="text-sm font-semibold"
                >
                  <span style={{ color: "#ffffff" }}>
                    Let&apos;s talk
                  </span>
                  <ArrowUpRight size={16} color="#ffffff" />
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}