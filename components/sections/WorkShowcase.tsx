"use client";

import { ArrowUpRight, MoveRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export type WorkProjectKind = "web" | "app";

export type WorkProject = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  kind: WorkProjectKind;
  year: string;
  isLatest: boolean;
  image: string | null;
  liveUrl: string | null;
  technologies: string[];
};

export type WorkShowcaseContent = {
  eyebrow: string;
  title: string;
  description: string;
  viewLabel: string;
  headline: { line1: string; line2: string };
  filters: { all: string; web: string; app: string };
  liveLabel: string;
  latestLabel: string;
};

type WorkFilter = "all" | WorkProjectKind;

type WorkShowcaseProps = {
  content: WorkShowcaseContent;
  projects: WorkProject[];
  githubUrl?: string;
};

// Editorial stagger inspired by gallery layouts: wide / narrow pairs with
// vertical offsets so the grid never reads as a uniform card wall.
const CARD_LAYOUT = [
  { span: "md:col-span-7", offset: "", aspect: "aspect-[16/10]" },
  { span: "md:col-span-5", offset: "md:mt-24", aspect: "aspect-[4/3]" },
  { span: "md:col-span-5", offset: "md:mt-6", aspect: "aspect-[4/3]" },
  { span: "md:col-span-7", offset: "md:mt-[-3rem]", aspect: "aspect-[16/10]" },
] as const;

const FIELD_LINES: Array<[number, number, number, number]> = [
  [14, 0, 28, 100],
  [48, 0, 64, 100],
  [86, 0, 92, 100],
  [0, 30, 100, 75],
  [100, 5, 0, 90],
];

const blurIn = {
  hidden: { opacity: 0, y: 24, filter: "blur(14px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, delay: i * 0.08, ease: EASE },
  }),
};

const cardIn = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, delay: (i % 4) * 0.12, ease: EASE },
  }),
  exit: {
    opacity: 0,
    scale: 0.96,
    filter: "blur(8px)",
    transition: { duration: 0.3, ease: EASE },
  },
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function LineLayer() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full select-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {FIELD_LINES.map(([x1, y1, x2, y2], i) => (
        <motion.line
          key={`${x1}-${y1}-${x2}-${y2}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="white"
          strokeWidth="0.08"
          strokeOpacity="0.1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, delay: i * 0.12, ease: EASE }}
        />
      ))}
    </svg>
  );
}

function GrainLayer() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05] mix-blend-overlay"
    >
      <filter id="work-grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" />
      </filter>
      <rect width="100%" height="100%" filter="url(#work-grain)" />
    </svg>
  );
}

export function WorkShowcase({
  content,
  projects,
  githubUrl,
}: WorkShowcaseProps) {
  const [filter, setFilter] = useState<WorkFilter>("all");
  const reduceMotion = useReducedMotion();

  const counts = useMemo(
    () => ({
      all: projects.length,
      web: projects.filter((p) => p.kind === "web").length,
      app: projects.filter((p) => p.kind === "app").length,
    }),
    [projects],
  );

  const visible = useMemo(
    () =>
      filter === "all" ? projects : projects.filter((p) => p.kind === filter),
    [filter, projects],
  );

  const years = useMemo(() => {
    const sorted = [...new Set(projects.map((p) => p.year))].sort();
    return sorted.length > 1
      ? `${sorted[0]}—${sorted[sorted.length - 1]}`
      : (sorted[0] ?? "");
  }, [projects]);

  const filterOptions: Array<{
    key: WorkFilter;
    label: string;
    count: number;
  }> = [
    { key: "all", label: content.filters.all, count: counts.all },
    { key: "web", label: content.filters.web, count: counts.web },
    { key: "app", label: content.filters.app, count: counts.app },
  ];

  const motionProps = reduceMotion
    ? {}
    : {
        variants: blurIn,
        initial: "hidden" as const,
        whileInView: "show" as const,
        viewport: { once: true, margin: "-100px" },
      };

  return (
    <section
      id="work"
      className="relative overflow-hidden border-y border-white/8 bg-[#04070f] py-28 text-white sm:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(134,247,255,0.08),transparent_28%),radial-gradient(circle_at_78%_12%,rgba(72,112,255,0.1),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(134,247,255,0.05),transparent_30%)]" />
      <LineLayer />
      <GrainLayer />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
          <div>
            <motion.div
              {...motionProps}
              custom={0}
              className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] bg-gradient-to-r from-[#86f7ff] to-[#38bdf8] bg-clip-text text-transparent"
            >
              {content.eyebrow}
            </motion.div>
            <motion.h2
              {...motionProps}
              custom={1}
              className="mt-6 font-[family:var(--font-display)] text-[clamp(3.6rem,11vw,8.5rem)] uppercase leading-[0.85] tracking-[-0.02em]"
            >
              {content.headline.line1}
              <br />
              <span className="bg-gradient-to-r from-[#86f7ff] via-[#38bdf8] to-[#1d4ed8] bg-clip-text text-transparent">
                {content.headline.line2}
              </span>
            </motion.h2>
          </div>

          <div className="lg:pb-3">
            <motion.p
              {...motionProps}
              custom={2}
              className="max-w-md text-lg leading-8 text-white/85"
            >
              {content.title}
            </motion.p>
            <motion.p
              {...motionProps}
              custom={3}
              className="mt-4 max-w-md text-sm leading-7 text-white/50"
            >
              {content.description}
            </motion.p>

            <motion.div
              {...motionProps}
              custom={4}
              className="mt-10 flex gap-10 border-t border-white/10 pt-6"
            >
              {[
                { value: pad(counts.web), label: content.filters.web },
                { value: pad(counts.app), label: content.filters.app },
                { value: pad(counts.all), label: years },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-mono text-2xl text-white">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/40">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Filters */}
        <motion.div
          {...motionProps}
          custom={5}
          className="mt-16 flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-6"
        >
          <div
            role="tablist"
            aria-label={content.eyebrow}
            className="flex flex-wrap items-center gap-2"
          >
            {filterOptions.map((option) => {
              const isActive = filter === option.key;

              return (
                <button
                  key={option.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(option.key)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.26em] transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-[#86f7ff] to-[#38bdf8] text-[#04070f] shadow-[0_0_24px_rgba(56,189,248,0.35)]"
                      : "border border-white/12 text-white/55 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {option.label}
                  <span
                    className={`font-mono text-[0.62rem] ${
                      isActive ? "text-[#04070f]/70" : "text-white/35"
                    }`}
                  >
                    {pad(option.count)}
                  </span>
                </button>
              );
            })}
          </div>

          {githubUrl ? (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-white/55 transition-colors hover:text-white"
            >
              GitHub
              <MoveRight
                className="h-3.5 w-3.5 -rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </Link>
          ) : null}
        </motion.div>

        {/* Project grid */}
        <div className="mt-16 grid grid-cols-1 items-start gap-x-10 gap-y-20 md:grid-cols-12">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => {
              const layout = CARD_LAYOUT[index % CARD_LAYOUT.length];
              const kindLabel =
                project.kind === "app"
                  ? content.filters.app
                  : content.filters.web;

              return (
                <motion.article
                  key={project.slug}
                  layout
                  custom={index}
                  variants={reduceMotion ? undefined : cardIn}
                  initial={reduceMotion ? false : "hidden"}
                  whileInView={reduceMotion ? undefined : "show"}
                  exit={reduceMotion ? undefined : "exit"}
                  viewport={{ once: true, margin: "-80px" }}
                  className={`group relative col-span-1 ${layout.span} ${layout.offset}`}
                >
                  <Link
                    href={project.liveUrl ?? "#"}
                    target={project.liveUrl ? "_blank" : undefined}
                    rel={project.liveUrl ? "noopener noreferrer" : undefined}
                    aria-label={`${project.title} — ${content.viewLabel}`}
                    className="block"
                  >
                    {/* Frame: sharp corners on purpose — gallery treatment */}
                    <div className="relative overflow-hidden bg-white/[0.02] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.85)] ring-1 ring-white/10 transition-all duration-700 group-hover:ring-white/25">
                      <div
                        className={`relative ${layout.aspect} overflow-hidden`}
                      >
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 700px"
                            className="object-cover object-top transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                          />
                        ) : (
                          <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]">
                            <span className="select-none font-[family:var(--font-display)] text-7xl uppercase text-white/10">
                              {project.title.charAt(0)}
                            </span>
                          </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        <div className="absolute left-4 top-4 flex items-center gap-2">
                          <span className="inline-flex items-center gap-2 bg-black/45 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white/85 ring-1 ring-white/15 backdrop-blur-sm">
                            {kindLabel}
                            <span className="font-mono text-white/45">
                              {project.year}
                            </span>
                          </span>
                        </div>

                        {project.isLatest ? (
                          <span className="absolute right-4 top-4 inline-flex items-center gap-2 bg-gradient-to-r from-[#86f7ff] to-[#38bdf8] px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#04070f] shadow-[0_0_24px_rgba(56,189,248,0.45)]">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#04070f]/60" />
                              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#04070f]" />
                            </span>
                            {content.latestLabel}
                          </span>
                        ) : null}

                        <div className="pointer-events-none absolute bottom-5 left-5 flex translate-y-2 items-center gap-2.5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                          <span className="relative grid place-items-center">
                            <span className="absolute h-[38px] w-[38px] rounded-full bg-white/35 blur-[8px]" />
                            <span className="relative h-[13px] w-[13px] rounded-full bg-white shadow-[0_0_18px_4px_rgba(255,255,255,0.7)]" />
                          </span>
                          <span className="grid place-items-center rounded-full border border-white/15 bg-black/35 px-4 py-2 text-[13px] text-white backdrop-blur-md">
                            {content.liveLabel}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="mt-6">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-sm text-white/30">
                          {pad(index + 1)}
                        </span>
                        <h3 className="font-[family:var(--font-display)] text-2xl uppercase leading-none tracking-tight text-white sm:text-3xl">
                          {project.title}
                        </h3>
                        <span className="ml-auto grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-white/60 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-[#04070f]">
                          <ArrowUpRight
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <p className="mt-3 max-w-md text-sm leading-7 text-white/55">
                        {project.summary}
                      </p>
                      <div className="mt-4 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white/35">
                        {[project.category, ...project.technologies].join(
                          " · ",
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
