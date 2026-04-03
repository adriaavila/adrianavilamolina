import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Github,
  Globe,
  Linkedin,
  type LucideIcon,
  Mail,
  MapPin,
  Menu,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/sections/ContactForm";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { portfolioData } from "@/lib/data/portfolio";
import { portfolioSiteContent, type SiteLocale } from "@/lib/data/site-content";
import { LanguageSync } from "./LanguageSync";
import { StudioScene } from "./StudioScene";

type PremiumPortfolioProps = {
  locale: SiteLocale;
};

const projectPlanes = [
  "bg-[radial-gradient(circle_at_top_left,rgba(224,185,125,0.28),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))]",
  "bg-[radial-gradient(circle_at_top_left,rgba(141,192,184,0.24),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))]",
  "bg-[radial-gradient(circle_at_top_left,rgba(215,165,108,0.24),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))]",
  "bg-[radial-gradient(circle_at_top_left,rgba(127,141,182,0.26),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))]",
];

const pricingPlanes = [
  "bg-[radial-gradient(circle_at_top_left,rgba(224,185,125,0.12),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]",
  "bg-[radial-gradient(circle_at_top_left,rgba(114,246,255,0.16),transparent_38%),linear-gradient(180deg,rgba(114,246,255,0.04),rgba(255,255,255,0))]",
  "bg-[radial-gradient(circle_at_top_left,rgba(127,141,182,0.14),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]",
];

export function PremiumPortfolio({ locale }: PremiumPortfolioProps) {
  const content = portfolioSiteContent[locale];
  const profile = portfolioData.profile;
  const sceneLabel = locale === "es" ? "Build Partner" : "Build Partner";
  const serviceHighlights =
    locale === "es"
      ? [
          {
            label: "Alcance",
            value:
              "Tres líneas de trabajo y paquetes base para decidir rápido.",
          },
          {
            label: "Colaboración",
            value:
              "Trabajo remoto, bilingüe y directo con founders y equipos pequeños.",
          },
          {
            label: "Entrega",
            value:
              "Sprints enfocados, menos ruido y checkpoints claros desde el inicio.",
          },
        ]
      : [
          {
            label: "Scope",
            value:
              "Three work lanes and base packages that are easy to evaluate.",
          },
          {
            label: "Collaboration",
            value:
              "Remote, bilingual, and direct collaboration for founders and lean teams.",
          },
          {
            label: "Delivery",
            value:
              "Focused sprints, less noise, and clear checkpoints from the start.",
          },
        ];
  const includesLabel = locale === "es" ? "Incluye" : "Includes";
  const serviceCtaLabel = locale === "es" ? "Ver paquetes" : "View packages";
  const mobileMenuLabel = locale === "es" ? "Menu" : "Menu";
  const mobileLanguageLabel = locale === "es" ? "Idioma" : "Language";
  const pricingCustomCopy =
    locale === "es"
      ? "Si tu proyecto mezcla producto, automatización y datos, preparo una propuesta híbrida a partir de estos paquetes base."
      : "If your project blends product, automation, and data, I can shape a hybrid proposal on top of these base packages.";
  const pricingCustomCta =
    locale === "es" ? "Pedir propuesta híbrida" : "Request hybrid proposal";
  const pricingMetaCopy =
    locale === "es"
      ? "Precios base. El alcance final depende del stack, integraciones y claridad del brief."
      : "Base prices. Final scope depends on the stack, integrations, and clarity of the brief.";
  const selectedProjectsLabel =
    locale === "es" ? "Builds seleccionados" : "Selected builds";
  const workSupportCopy =
    locale === "es"
      ? "Cada proyecto está elegido porque resolvió una necesidad real de operación, percepción o conversión."
      : "Each project is selected because it solved a real operational, positioning, or conversion problem.";
  const featuredProjects = content.work.items.flatMap((item) => {
    const project = portfolioData.projects.find(
      (entry) => entry.slug.current === item.slug,
    );

    return project ? [{ ...item, project }] : [];
  });

  const socialLinks = [
    {
      href: profile.socialLinks.github,
      label: "GitHub",
      icon: Github,
    },
    {
      href: profile.socialLinks.linkedin,
      label: "LinkedIn",
      icon: Linkedin,
    },
  ].filter((item): item is { href: string; label: string; icon: LucideIcon } =>
    Boolean(item.href),
  );

  return (
    <>
      <LanguageSync locale={locale} />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:border focus:border-primary/40 focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-foreground"
      >
        {content.skipToContent}
      </a>

      <div className="relative bg-background text-foreground">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(114,246,255,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(72,112,255,0.08),transparent_28%)]" />

        <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
          <div className="pointer-events-auto mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#050912]/80 shadow-[0_24px_80px_rgba(4,7,15,0.42)] backdrop-blur-2xl">
              <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
                <Link
                  href={`/?lang=${locale}`}
                  className="group flex items-center"
                  aria-label={`${profile.firstName} ${profile.lastName}`}
                >
                  <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-[14px] border border-white/10 bg-gradient-to-br from-[#1e1e2e] to-[#04070f] shadow-[0_4px_20px_rgba(134,247,255,0.12)] transition-all duration-500 group-hover:scale-105 group-hover:border-white/25 group-hover:shadow-[0_8px_32px_rgba(139,92,246,0.24)]">
                    {/* Startup glass specular reflections */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50" />
                    
                    <svg
                      className="relative z-10 h-6 w-6 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <defs>
                        <linearGradient id="ocean-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#86f7ff" />
                          <stop offset="50%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="#1d4ed8" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M4 20 L12 4 L20 20 M8 12 L12 20 L16 12"
                        stroke="url(#ocean-gradient)"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>

                <nav
                  aria-label="Section navigation"
                  className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/5 p-1 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white/58 md:flex"
                >
                  {content.nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="whitespace-nowrap rounded-full px-3 py-2 transition-[background-color,color] hover:bg-white/8 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="flex items-center gap-2 sm:gap-3">
                  <nav
                    aria-label="Language selector"
                    className="hidden items-center rounded-full border border-white/14 bg-white/6 p-1 backdrop-blur-sm sm:flex"
                  >
                    {(["en", "es"] as const).map((lang) => {
                      const isActive = locale === lang;

                      return (
                        <Link
                          key={lang}
                          href={`/?lang=${lang}`}
                          className={`rounded-full px-3 py-1.5 text-[0.72rem] font-semibold tracking-[0.24em] transition-[background-color,color,box-shadow] ${
                            isActive
                              ? "bg-gradient-to-r from-[#86f7ff] to-[#38bdf8] text-[#04070f] shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                              : "text-white/60 hover:bg-white/10 hover:text-white"
                          }`}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {lang.toUpperCase()}
                        </Link>
                      );
                    })}
                  </nav>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/14 bg-white/6 text-white/72 transition-[background-color,color,border-color] hover:border-white/24 hover:bg-white/10 hover:text-white md:hidden"
                        aria-label={mobileMenuLabel}
                      >
                        <Menu className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="w-60 rounded-2xl border-white/10 bg-[#050912]/96 p-2 text-white shadow-[0_24px_80px_rgba(4,7,15,0.42)] backdrop-blur-2xl"
                    >
                      <DropdownMenuLabel className="px-3 py-2 text-[0.62rem] uppercase tracking-[0.26em] text-white/42">
                        {mobileMenuLabel}
                      </DropdownMenuLabel>
                      {content.nav.map((item) => (
                        <DropdownMenuItem
                          key={item.href}
                          asChild
                          className="cursor-pointer rounded-xl px-3 py-3 text-sm font-medium text-white/84 focus:bg-white/10 focus:text-white"
                        >
                          <Link href={item.href}>{item.label}</Link>
                        </DropdownMenuItem>
                      ))}
                      <DropdownMenuSeparator className="bg-white/10" />
                      <DropdownMenuLabel className="px-3 py-2 text-[0.62rem] uppercase tracking-[0.26em] text-white/42">
                        {mobileLanguageLabel}
                      </DropdownMenuLabel>
                      {(["en", "es"] as const).map((lang) => {
                        const isActive = locale === lang;

                        return (
                          <DropdownMenuItem
                            key={lang}
                            asChild
                            className={`cursor-pointer rounded-xl px-3 py-3 text-sm font-medium focus:bg-white/10 focus:text-white ${
                              isActive ? "bg-gradient-to-r from-[#86f7ff] to-[#38bdf8] bg-clip-text text-transparent" : "text-white/84"
                            }`}
                          >
                            <Link href={`/?lang=${lang}`}>
                              {lang.toUpperCase()}
                            </Link>
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main id="main-content">
          <section
            id="home"
            className="relative overflow-hidden border-b border-white/8 bg-[#04070f] text-white"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_22%,transparent_78%,rgba(255,255,255,0.03))]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)]">
              <div className="flex min-h-[100svh] flex-col justify-end px-4 pb-8 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pb-10 lg:pt-40">
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] bg-gradient-to-r from-[#86f7ff] to-[#38bdf8] bg-clip-text text-transparent">
                  {content.hero.status}
                </div>

                <div className="mt-6">
                  <div className="font-[family:var(--font-display)] text-[clamp(4.2rem,12vw,8.8rem)] leading-[0.84] text-white">
                    {profile.firstName}
                  </div>
                  <div className="text-[clamp(3rem,8vw,7.2rem)] leading-[0.84] font-semibold uppercase tracking-[-0.08em] text-white">
                    {profile.lastName}
                  </div>
                </div>

                <div className="mt-8 max-w-3xl">
                  <h1 className="font-[family:var(--font-display)] text-3xl leading-[1.02] text-white sm:text-4xl">
                    {content.hero.titleLead}{" "}
                    <span className="bg-gradient-to-r from-[#86f7ff] via-[#38bdf8] to-[#1d4ed8] bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(56,189,248,0.4)]">
                      {content.hero.titleAccent}
                    </span>
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
                    {content.hero.description}
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#86f7ff] to-[#38bdf8] px-6 py-3 text-sm font-semibold text-[#04070f] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(56,189,248,0.3)]"
                  >
                    {content.hero.primaryCta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="#work"
                    className="inline-flex items-center gap-2 rounded-full border border-white/14 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/6 hover:text-[#38bdf8] hover:shadow-[0_0_16px_rgba(56,189,248,0.15)]"
                  >
                    {content.hero.secondaryCta}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>

                <div className="mt-12 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-3">
                  {content.hero.metrics.map((metric) => (
                    <div key={`${metric.value}-${metric.label}`}>
                      <div className="font-[family:var(--font-display)] text-4xl leading-none text-white">
                        {metric.value}
                      </div>
                      <p className="mt-3 max-w-[14rem] text-sm leading-6 text-white/56">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[32rem] overflow-hidden border-t border-white/8 lg:min-h-[100svh] lg:border-l lg:border-t-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(114,246,255,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(72,112,255,0.16),transparent_32%)]" />
                <StudioScene />
                <div className="absolute left-6 top-20 flex items-center gap-3 rounded-full border border-white/10 bg-black/26 px-3 py-2 backdrop-blur-md sm:left-8 sm:top-24">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/12">
                    <Image
                      src={profile.profileImage}
                      alt={`${profile.firstName} ${profile.lastName}`}
                      fill
                      priority
                      sizes="44px"
                      className="object-cover grayscale contrast-110"
                    />
                  </div>
                  <div>
                    <div className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] bg-gradient-to-r from-[#86f7ff] to-[#38bdf8] bg-clip-text text-transparent">
                      {sceneLabel}
                    </div>
                    <div className="pt-1 text-xs uppercase tracking-[0.18em] text-white/64">
                      {profile.location}
                    </div>
                  </div>
                </div>

                <div className="relative flex h-full min-h-[32rem] flex-col p-6 pt-20 text-white sm:p-8 sm:pt-24 lg:p-10 lg:pt-28">
                  <div className="ml-auto max-w-[16rem] space-y-3 text-right">
                    {content.hero.stack.slice(0, 4).map((item, index) => (
                      <div
                        key={item}
                        className="border-b border-white/10 pb-3 text-sm uppercase tracking-[0.16em] text-white/76"
                      >
                        0{index + 1} {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="services"
            className="border-b border-border/60 bg-[linear-gradient(180deg,color-mix(in_oklch,var(--background)_98%,white),color-mix(in_oklch,var(--background)_95%,var(--primary)_5%))]"
          >
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-primary/85">
                  {content.services.eyebrow}
                </div>
                <h2 className="mt-4 font-[family:var(--font-display)] text-4xl leading-[1.02] text-foreground sm:text-5xl">
                  {content.services.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {content.services.description}
                </p>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {content.services.items.map((service, index) => (
                  <article
                    key={service.key}
                    className="group relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/82 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-7"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(114,246,255,0.12),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_58%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_top_left,rgba(114,246,255,0.12),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_58%)]" />
                    <div className="relative flex h-full flex-col">
                      <div className="flex items-center justify-between gap-4">
                        <div className="font-[family:var(--font-display)] text-4xl leading-none text-primary/70">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div className="rounded-full border border-border/60 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                          {includesLabel}
                        </div>
                      </div>

                      <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                        {service.description}
                      </p>

                      <ul className="mt-8 space-y-3 border-t border-border/60 pt-6 text-sm leading-7 text-foreground/88">
                        {service.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-[0.7rem] h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="#pricing"
                        className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-semibold uppercase tracking-[0.18em] text-primary transition-[transform,color] hover:-translate-y-0.5 hover:text-foreground"
                      >
                        {serviceCtaLabel}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {serviceHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-border/60 bg-background/72 p-5"
                  >
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary/85">
                      {item.label}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="pricing"
            className="border-b border-border/60 bg-[linear-gradient(180deg,color-mix(in_oklch,var(--background)_98%,white),color-mix(in_oklch,var(--background)_94%,var(--primary)_6%))]"
          >
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-primary/85">
                    {content.pricing.eyebrow}
                  </div>
                  <h2 className="mt-4 font-[family:var(--font-display)] text-4xl leading-[1.02] text-foreground sm:text-5xl">
                    {content.pricing.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                    {content.pricing.description}
                  </p>
                </div>

                <div className="max-w-sm rounded-[1.5rem] border border-border/60 bg-background/80 p-5 text-sm leading-7 text-muted-foreground">
                  {pricingMetaCopy}
                </div>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {content.pricing.plans.map((plan, index) => (
                  <article
                    key={plan.key}
                    className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8 ${
                      plan.featured
                        ? "border-primary/45 bg-card shadow-[0_28px_80px_rgba(34,211,238,0.10)]"
                        : "border-border/60 bg-card/72"
                    } ${pricingPlanes[index % pricingPlanes.length]}`}
                  >
                    <div className="flex items-start justify-between gap-4 border-b border-border/60 pb-6">
                      <div>
                        <div className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-primary/78">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                          {plan.audience}
                        </div>
                        <h3 className="mt-3 font-[family:var(--font-display)] text-3xl leading-[0.96] text-foreground">
                          {plan.name}
                        </h3>
                      </div>

                      {plan.badge ? (
                        <span
                          className={`rounded-full border px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] ${
                            plan.featured
                              ? "border-primary/30 bg-primary/10 text-primary"
                              : "border-border/60 text-muted-foreground"
                          }`}
                        >
                          {plan.badge}
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-6 flex items-end justify-between gap-4">
                      <div className="font-[family:var(--font-display)] text-5xl leading-none text-foreground">
                        {plan.price}
                      </div>
                      <div className="text-right text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                        {plan.cadence}
                      </div>
                    </div>

                    <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
                      {plan.description}
                    </p>

                    <ul className="mt-8 space-y-3 text-sm leading-7 text-foreground/88">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check
                            className="mt-1 h-4 w-4 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-8">
                      <Link
                        href={plan.paymentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-[transform,background-color,border-color,color,box-shadow] hover:-translate-y-0.5 ${
                          plan.featured
                            ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/15"
                            : "border border-border/60 bg-background/80 text-foreground hover:border-primary/40 hover:text-primary"
                        }`}
                      >
                        {plan.ctaLabel}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                      <p className="mt-4 text-sm leading-6 text-muted-foreground">
                        {plan.note}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-border/60 pt-6 md:flex-row md:items-center md:justify-between">
                <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                  {pricingCustomCopy}
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition-[transform,color] hover:-translate-y-0.5 hover:text-primary"
                >
                  {pricingCustomCta}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          <section id="work" className="bg-foreground text-background">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-12">
                <div className="pb-8 lg:sticky lg:top-24 lg:self-start">
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-primary/85">
                    {content.work.eyebrow}
                  </div>
                  <h2 className="mt-4 font-[family:var(--font-display)] text-4xl leading-[1.02] text-background sm:text-5xl">
                    {content.work.title}
                  </h2>
                  <p className="mt-5 max-w-sm text-base leading-7 text-white/68 sm:text-lg">
                    {content.work.description}
                  </p>

                  <div className="mt-10 border-t border-white/12 pt-6">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/44">
                      {selectedProjectsLabel}
                    </div>
                    <div className="mt-4 font-[family:var(--font-display)] text-6xl leading-none text-background">
                      {String(featuredProjects.length).padStart(2, "0")}
                    </div>
                    <p className="mt-4 max-w-xs text-sm leading-7 text-white/56">
                      {workSupportCopy}
                    </p>
                  </div>
                </div>

                <div className="space-y-10">
                  {featuredProjects.map(
                    (
                      { category, deliverables, impact, project, summary },
                      index,
                    ) => (
                      <article
                        key={project.slug.current}
                        className="grid gap-8 border-t border-white/12 pt-10 first:border-t-0 lg:grid-cols-[minmax(0,1fr)_minmax(21rem,0.95fr)] lg:items-stretch"
                      >
                        <div className="flex flex-col">
                          <div className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white/48">
                            {String(index + 1).padStart(2, "0")} / {category}
                          </div>
                          <h3 className="mt-4 font-[family:var(--font-display)] text-5xl leading-[0.96] text-background">
                            {project.title}
                          </h3>
                          <p className="mt-4 max-w-xl text-base leading-7 text-white/68">
                            {summary}
                          </p>

                          <ul className="mt-6 flex flex-wrap gap-2">
                            {deliverables.map((item) => (
                              <li
                                key={item}
                                className="rounded-full border border-white/12 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/66"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>

                          {project.liveUrl ? (
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold uppercase tracking-[0.18em] text-background transition-[transform,color] hover:-translate-y-0.5 hover:text-primary"
                            >
                              {content.work.viewLabel}
                              <ArrowUpRight
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                            </Link>
                          ) : null}
                        </div>

                        <div
                          className={`group relative overflow-hidden border border-white/12 p-6 sm:p-8 ${projectPlanes[index % projectPlanes.length]}`}
                        >
                          {project.image ? (
                            <>
                              <Image 
                                src={project.image} 
                                alt={project.title} 
                                fill 
                                className="object-cover object-top opacity-30 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-60" 
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent pointer-events-none transition-opacity duration-700 group-hover:opacity-80" />
                            </>
                          ) : (
                            <div className="absolute right-5 top-3 text-[5rem] font-semibold uppercase tracking-[-0.08em] text-white/6">
                              {String(index + 1).padStart(2, "0")}
                            </div>
                          )}

                          <div className="relative flex min-h-[18rem] flex-col justify-between">
                            <div className="flex items-start justify-between gap-4">
                              <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/48">
                                {project.slug.current.replace(/-/g, " ")}
                              </div>
                              <span className="rounded-full border border-white/12 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white/66">
                                Live
                              </span>
                            </div>

                            <p className="mt-10 max-w-xl font-[family:var(--font-display)] text-2xl leading-[1.08] text-background sm:text-3xl">
                              {impact}
                            </p>

                            <div className="mt-10 border-t border-white/12 pt-6">
                              <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/44">
                                Stack
                              </div>
                              <div className="mt-4 flex flex-wrap gap-2">
                                {project.technologies
                                  .slice(0, 4)
                                  .map((tech) => (
                                    <span
                                      key={tech}
                                      className="border border-white/12 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/66"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ),
                  )}
                </div>
              </div>
            </div>
          </section>

          <section id="process" className="border-b border-border/60">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
                <div>
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-primary/85">
                    {content.process.eyebrow}
                  </div>
                  <h2 className="mt-4 max-w-sm font-[family:var(--font-display)] text-4xl leading-[1.02] text-foreground sm:text-5xl">
                    {content.process.title}
                  </h2>
                  <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
                    {content.process.description}
                  </p>

                  <div className="mt-10">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                      {content.process.differentiatorsTitle}
                    </div>
                    <ul className="mt-4 border-t border-border/60">
                      {content.process.differentiators.map((item) => (
                        <li
                          key={item}
                          className="border-b border-border/60 py-4 text-sm leading-7 text-foreground/88"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  {content.process.steps.map((step, index) => (
                    <article
                      key={step.title}
                      className="border-t border-border/60 pt-5"
                    >
                      <div className="font-[family:var(--font-display)] text-5xl leading-none text-primary/72">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">
                        {step.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="border-b border-border/60">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-primary/85">
                  {content.faq.eyebrow}
                </div>
                <h2 className="mt-4 font-[family:var(--font-display)] text-4xl leading-[1.02] text-foreground sm:text-5xl">
                  {content.faq.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                  {content.faq.description}
                </p>
              </div>

              <div className="mt-12 border-t border-border/60">
                {content.faq.items.map((item) => (
                  <details
                    key={item.question}
                    className="group border-b border-border/60 py-6"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                      <span className="max-w-3xl font-[family:var(--font-display)] text-2xl leading-[1.08] text-foreground sm:text-3xl">
                        {item.question}
                      </span>
                      <span className="mt-1 text-sm font-semibold uppercase tracking-[0.22em] text-primary transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section id="contact">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(21rem,0.95fr)]">
                <div>
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-primary/85">
                    {content.contact.eyebrow}
                  </div>
                  <h2 className="mt-4 max-w-xl font-[family:var(--font-display)] text-4xl leading-[1.02] text-foreground sm:text-5xl">
                    {content.contact.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                    {content.contact.description}
                  </p>

                  <Link
                    href={`mailto:${profile.email}`}
                    className="mt-10 block max-w-3xl break-all font-[family:var(--font-display)] text-[clamp(2.4rem,7vw,5.2rem)] leading-[0.95] text-foreground transition-colors hover:text-primary"
                  >
                    {profile.email}
                  </Link>

                  <div className="mt-10 grid gap-6 border-y border-border/60 py-6 sm:grid-cols-2">
                    <div>
                      <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                        {content.contact.responseLabel}
                      </div>
                      <p className="mt-3 text-sm leading-7 text-foreground/88">
                        {content.contact.responseValue}
                      </p>
                    </div>

                    {content.contact.details.map((detail) => (
                      <div key={`${detail.label}-${detail.value}`}>
                        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                          {detail.label}
                        </div>
                        <p className="mt-3 text-sm leading-7 text-foreground/88">
                          {detail.value}
                        </p>
                      </div>
                    ))}

                    <div>
                      <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                        {locale === "es" ? "Teléfono" : "Phone"}
                      </div>
                      <Link
                        href={`tel:${profile.phone}`}
                        className="mt-3 inline-flex text-sm leading-7 text-foreground/88 transition-colors hover:text-primary"
                      >
                        {profile.phone}
                      </Link>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {socialLinks.map((item) => {
                      const Icon = item.icon;

                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm font-semibold text-foreground transition-[transform,border-color,color] hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                          {item.label}
                        </Link>
                      );
                    })}

                    {profile.socialLinks.website ? (
                      <Link
                        href={profile.socialLinks.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm font-semibold text-foreground transition-[transform,border-color,color] hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                      >
                        <Globe className="h-4 w-4" aria-hidden="true" />
                        Website
                      </Link>
                    ) : null}
                  </div>

                  <div className="mt-10 grid gap-4 text-sm text-muted-foreground sm:grid-cols-3">
                    <div className="flex items-start gap-3">
                      <Mail
                        className="mt-1 h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                      <span>{profile.email}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone
                        className="mt-1 h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                      <span>{profile.phone}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin
                        className="mt-1 h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                      <span>{profile.location}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:pt-6">
                  <ContactForm locale={locale} variant="minimal" />
                </div>
              </div>

              <footer className="mt-20 flex flex-col gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
                <p className="max-w-2xl leading-7">{content.footer.blurb}</p>
                <p>
                  © 2026 {profile.firstName} {profile.lastName}.{" "}
                  {content.footer.rights}
                </p>
              </footer>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
