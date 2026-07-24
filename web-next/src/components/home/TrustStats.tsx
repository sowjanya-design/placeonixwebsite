"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { num: string; label: string };

function parseTarget(num: string): {
  prefix: string;
  target: number;
  suffix: string;
} {
  const m = num.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!m) return { prefix: "", target: 0, suffix: num };
  return {
    prefix: m[1],
    target: parseInt(m[2].replace(/,/g, ""), 10),
    suffix: m[3],
  };
}

function CountUpStat({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { prefix, target, suffix } = parseTarget(stat.num);
  const [display, setDisplay] = useState(`${prefix}0`);
  const [entered, setEntered] = useState(false);
  const [numberLanded, setNumberLanded] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const done = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion) {
      setTimeout(() => {
        setDisplay(`${prefix}${target.toLocaleString("en-IN")}`);
        setEntered(true);
        setNumberLanded(true);
        setShowLabel(true);
      }, 0);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !done.current) {
            done.current = true;
            const staggerDelay = index * 180;

            setTimeout(() => setEntered(true), staggerDelay);

            setTimeout(() => {
              const duration = 1800;
              const start = performance.now();
              function tick(now: number) {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
                const value = Math.round(target * eased);
                setDisplay(`${prefix}${value.toLocaleString("en-IN")}`);
                if (progress < 1) {
                  requestAnimationFrame(tick);
                } else {
                  setNumberLanded(true);
                }
              }
              requestAnimationFrame(tick);
            }, staggerDelay);

            setTimeout(() => setShowLabel(true), 900);

            io.unobserve(el);
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`trust-stat${entered ? " trust-stat-in" : ""}`} ref={ref}>
      <div className="trust-stat-num">
        {display}
        {suffix && <span className="trust-stat-suffix">{suffix}</span>}
      </div>
      <div
        className={`trust-stat-underline${numberLanded ? " trust-stat-underline-in" : ""}`}
      />
      <div className={`trust-stat-lbl${showLabel ? " trust-stat-lbl-in" : ""}`}>
        {stat.label}
      </div>
    </div>
  );
}

export default function TrustStats({ stats }: { stats: Stat[] }) {
  return (
    <section className="trust-stats-wrap">
      <div className="trust-stats-eyebrow">Trusted Nationwide</div>
      <div className="trust-stats" id="trustStats">
        <span className="trust-orb trust-orb-1" />
        <span className="trust-orb trust-orb-2" />
        <span className="trust-orb trust-orb-3" />
        {stats.map((s, i) => (
          <CountUpStat stat={s} index={i} key={s.label} />
        ))}
      </div>
    </section>
  );
}
