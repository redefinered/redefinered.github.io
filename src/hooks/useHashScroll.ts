import { useEffect } from "react";

function scrollToHash(hash: string) {
  if (!hash || hash === "#") return;
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** SPA: browser may miss hash before React mounts `#id` targets. */
export function useHashScroll() {
  useEffect(() => {
    const run = () => scrollToHash(window.location.hash);
    // Wait one frame so sections exist in DOM.
    const frame = requestAnimationFrame(run);
    window.addEventListener("hashchange", run);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", run);
    };
  }, []);
}
