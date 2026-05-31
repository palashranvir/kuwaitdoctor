import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import {
  BadgeCheck,
  Brain,
  Clock3,
  Diamond,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

const moments = [
  {
    n: "01",
    title: "Arrival",
    text: "A quiet reception flow, private check-in, and staff who already know the reason for your visit.",
    Icon: Diamond,
  },
  {
    n: "02",
    title: "Consultation",
    text: "Longer appointments, careful history-taking, and clear decisions made with your physician.",
    Icon: Brain,
  },
  {
    n: "03",
    title: "Diagnostics",
    text: "Priority lab coordination and same-day readings when your care plan needs immediate clarity.",
    Icon: HeartPulse,
  },
  {
    n: "04",
    title: "Continuity",
    text: "Follow-up, medication refinement, and preventive planning that stays with you beyond the visit.",
    Icon: ShieldCheck,
  },
] as const;

export function LuxuryScrollFeatures() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const total = rect.height + viewport;
      const progress = Math.min(1, Math.max(0, (viewport - rect.top) / total));
      section.style.setProperty("--scroll-progress", progress.toFixed(4));
      section.style.setProperty("--scroll-grid", `${progress * -220}px`);
      section.style.setProperty("--orbit-x", `${70 - progress * 58}deg`);
      section.style.setProperty("--orbit-z", `${-38 + progress * 116}deg`);
      section.style.setProperty("--orbit-y", `${120 - progress * 260}px`);
      section.style.setProperty("--card-depth", `${progress * 180}px`);
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <section ref={sectionRef} className="luxury-scroll-stage">
      <div className="luxury-scroll-inner">
        <div className="luxury-scroll-copy">
          <p className="kicker luxury-kicker">№ 04 — Signature Care</p>
          <h2>The visit feels composed before you ever enter the room.</h2>
          <p>
            A premium clinic experience is not louder. It is calmer, more
            exacting, and more personal at every point in the patient journey.
          </p>
          <div
            className="luxury-scroll-metrics"
            aria-label="Clinic experience metrics"
          >
            <span>
              <BadgeCheck className="size-4" /> Licensed private practice
            </span>
            <span>
              <Clock3 className="size-4" /> Priority scheduling
            </span>
          </div>
        </div>

        <div className="luxury-orbit-wrap" aria-hidden="true">
          <div className="luxury-orbit">
            <div className="luxury-core">
              <span>KW</span>
              <strong>Private Medicine</strong>
            </div>
            {moments.map(({ n, title, text, Icon }, index) => (
              <article
                className="luxury-orbit-card"
                style={{ "--i": index } as CSSProperties & { "--i": number }}
                key={title}
              >
                <div>
                  <span>{n}</span>
                  <Icon className="size-5" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
