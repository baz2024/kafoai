"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Wraps the server-rendered nav links. Below 900px the panel is collapsed behind an accessible toggle.
// A <noscript> rule in the layout keeps the links visible if JS is unavailable.
export function MobileNav({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button type="button" className="menu-btn" aria-expanded={open} aria-controls="site-nav" aria-label={label} onClick={() => setOpen((o) => !o)}>
        <span aria-hidden="true" />
      </button>
      <div id="site-nav" className={`nav-panel${open ? " open" : ""}`}>
        {children}
      </div>
    </>
  );
}
