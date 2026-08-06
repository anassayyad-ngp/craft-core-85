import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  FileText,
  Star,
  GitFork,
  BookOpen,
  Database,
  Code2,
  LineChart,
  Wrench,
  Sigma,
  Layers,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

/* ---------- Data ---------- */

const nav = [
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Open Source", href: "#opensource" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const metrics = [
  { label: "Current Focus", value: "SQL Engineering Handbook", meta: "9 / 21 modules" },
  { label: "Learning", value: "Python · NumPy · ML", meta: "Foundations" },
  { label: "Building", value: "NagpurLens", meta: "Urban intelligence" },
  { label: "Goal", value: "Analytics Engineering", meta: "→ Data Science" },
];

const now = [
  { when: "This week", title: "SQL Handbook — Modules 10–13", detail: "Strings, nulls, advanced aggregations, set operators." },
  { when: "This month", title: "NagpurLens dataset validation", detail: "Locality master schema, source reconciliation." },
  { when: "This quarter", title: "Python + NumPy foundations", detail: "Mathematics for machine learning." },
  { when: "This year", title: "First applied ML project", detail: "Applied research on city-scale data." },
];

const projects = [
  {
    monogram: "SQL",
    category: "Handbook",
    title: "SQL Engineering Handbook",
    description:
      "A production-style SQL curriculum spanning twenty-one modules — from first SELECT to analytics engineering, interview prep, and real business case studies.",
    stack: ["MySQL", "Analytics Engineering", "Docs"],
    github: "https://github.com/theammarngp-makes/SQL-Engineering-Handbook",
    href: "https://github.com/theammarngp-makes/SQL-Engineering-Handbook",
    featured: true,
  },
  {
    monogram: "NL",
    category: "Urban Intelligence",
    title: "NagpurLens",
    description:
      "A research-first Urban Intelligence Platform transforming fragmented city data into reproducible, evidence-based insights for one Indian city.",
    stack: ["PostgreSQL", "Python", "Research"],
    github: "https://github.com/theammarngp-makes/NagpurLens",
    href: "https://github.com/theammarngp-makes/NagpurLens",
    featured: true,
  },
  {
    monogram: "OL",
    category: "Sales Analytics",
    title: "Olist Sales Analytics",
    description:
      "End-to-end analysis of Brazilian e-commerce transactions — revenue, seller performance, geography, delivery reliability.",
    stack: ["SQL", "EDA", "Business"],
    github: "https://github.com/theammarngp-makes/olist-sales-analysis",
    href: "https://github.com/theammarngp-makes/olist-sales-analysis",
  },
  {
    monogram: "RFM",
    category: "Customer Analytics",
    title: "RFM Segmentation",
    description:
      "Customer segmentation using Recency, Frequency, Monetary scoring to surface high-value cohorts and churn risk.",
    stack: ["SQL", "Segmentation", "CRM"],
    github: "https://github.com/theammarngp-makes/ecommerce-rfm-customer-segmentation",
    href: "https://github.com/theammarngp-makes/ecommerce-rfm-customer-segmentation",
  },
  {
    monogram: "CR",
    category: "Retention",
    title: "Cohort Retention Analysis",
    description:
      "Monthly cohort retention model for e-commerce — measuring how well a business retains its customers over time.",
    stack: ["SQL", "Cohorts", "Retention"],
    github: "https://github.com/theammarngp-makes/E-commerce-cohort-retention-analysis",
    href: "https://github.com/theammarngp-makes/E-commerce-cohort-retention-analysis",
  },
  {
    monogram: "PY",
    category: "Engineering",
    title: "Python Engineering",
    description:
      "A working notebook of Python fundamentals, data manipulation, and small engineering exercises documented as I learn.",
    stack: ["Python", "NumPy", "Notebooks"],
    github: "https://github.com/theammarngp-makes/Python",
    href: "https://github.com/theammarngp-makes/Python",
  },
];

const repos = [
  { name: "SQL-Engineering-Handbook", desc: "Twenty-one module SQL curriculum, engineering-grade.", stars: 12, forks: 3, lang: "SQL", langColor: "#e38c00" },
  { name: "NagpurLens", desc: "Urban intelligence platform for a single Indian city.", stars: 8, forks: 1, lang: "Python", langColor: "#3572A5" },
  { name: "olist-sales-analysis", desc: "E-commerce sales analytics on the Olist dataset.", stars: 5, forks: 2, lang: "SQL", langColor: "#e38c00" },
  { name: "ecommerce-rfm-segmentation", desc: "RFM customer segmentation, end to end.", stars: 4, forks: 1, lang: "SQL", langColor: "#e38c00" },
];

const commits = [
  { repo: "SQL-Engineering-Handbook", msg: "docs: add module 09 — set operators overview", ago: "2d" },
  { repo: "NagpurLens", msg: "chore: normalise locality master dataset v0.3", ago: "4d" },
  { repo: "SQL-Engineering-Handbook", msg: "feat: window function business cases", ago: "1w" },
  { repo: "Python", msg: "notebook: numpy broadcasting exercises", ago: "1w" },
];

const writing = [
  { kind: "Architecture", title: "SQL Engineering Handbook — Architecture", excerpt: "How a 21-module curriculum is structured like a software project.", href: "https://github.com/theammarngp-makes/SQL-Engineering-Handbook/blob/main/ARCHITECTURE.md" },
  { kind: "Guide", title: "SQL Style Guide", excerpt: "Naming, formatting, and query conventions used across the handbook.", href: "https://github.com/theammarngp-makes/SQL-Engineering-Handbook/blob/main/STYLE_GUIDE.md" },
  { kind: "Essay", title: "NagpurLens — Vision & Problem Statement", excerpt: "Why one city deserves its own reproducible data layer.", href: "https://github.com/theammarngp-makes/NagpurLens" },
  { kind: "Module", title: "Window Functions in Business Cases", excerpt: "Real revenue, retention, and ranking problems solved with windows.", href: "https://github.com/theammarngp-makes/SQL-Engineering-Handbook/tree/main/08_WINDOW_BUSINESS_CASES" },
];

const skillGroups: { icon: React.ComponentType<{ className?: string }>; title: string; items: string[] }[] = [
  { icon: Code2, title: "Languages", items: ["SQL", "Python", "Bash"] },
  { icon: Layers, title: "Libraries", items: ["Pandas", "NumPy", "Matplotlib"] },
  { icon: LineChart, title: "Analytics", items: ["EDA", "Segmentation", "Cohort Analysis", "Forecasting"] },
  { icon: BookOpen, title: "Visualization", items: ["Streamlit", "Tableau", "Power BI"] },
  { icon: Database, title: "Databases", items: ["MySQL", "PostgreSQL"] },
  { icon: Wrench, title: "Engineering", items: ["Schema Design", "Query Optimization", "Git", "Documentation"] },
  { icon: Sigma, title: "Mathematics", items: ["Linear Algebra", "Probability", "Statistics"] },
];

const roadmap = [
  { phase: "Current", title: "Analytics Engineer in the making", detail: "Publishing engineering-grade SQL resources and building NagpurLens." },
  { phase: "Next", title: "Applied Machine Learning", detail: "Mathematics for ML, first production model, evaluation rigour." },
  { phase: "Future", title: "Data Scientist", detail: "Applied research on urban systems, published methodologies." },
];

/* ---------- Component ---------- */

function Index() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ============ HEADER ============ */}
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 lg:px-10">
          <a href="#top" className="flex items-baseline gap-3">
            <span className="text-[15px] font-semibold tracking-tight">Mohammad Ammar</span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:inline">
              Data · Analytics Engineering
            </span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="https://github.com/theammarngp-makes"
              target="_blank" rel="noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden">
          {/* faint blueprint background */}
          <div className="pointer-events-none absolute inset-0 [opacity:0.025] bg-blueprint" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-border" />

          <div className="mx-auto max-w-[1280px] px-6 pt-[180px] pb-32 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
              {/* Left */}
              <div className="lg:col-span-7">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground shadow-elev">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Available for analytics engineering work
                </div>
                <h1 className="font-sans text-[clamp(2.75rem,6vw,5.25rem)] font-medium leading-[1.02] tracking-[-0.03em] text-foreground">
                  Building{" "}
                  <span className="font-serif italic text-accent">production-quality</span>{" "}
                  data systems and analytics resources.
                </h1>
                <p className="mt-8 max-w-xl text-[17px] leading-[1.65] text-muted-foreground">
                  I'm Mohammad Ammar — an Electronics &amp; Telecommunication student on a
                  deliberate path from Data Analyst to Analytics Engineer to Data
                  Scientist. I write open-source resources that treat teaching as a form
                  of engineering.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <a
                    href="#projects"
                    className="group inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground shadow-elev transition-all hover:-translate-y-[1px] hover:shadow-elev-lg"
                  >
                    View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="https://github.com/theammarngp-makes"
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground shadow-elev transition-colors hover:bg-muted"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-foreground link-underline"
                  >
                    <FileText className="h-4 w-4" /> Resume
                  </a>
                </div>

                {/* meta row */}
                <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent" /> Nagpur, India
                  </span>
                  <span className="font-mono">v2026.1</span>
                  <span>Open source · Built in public</span>
                </div>
              </div>

              {/* Right — engineering composition */}
              <div className="lg:col-span-5">
                <EngineeringDiagram />
              </div>
            </div>

            {/* Metric strip */}
            <div className="mt-24 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border shadow-elev sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label} className="bg-background p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">{m.label}</p>
                  <p className="mt-3 text-[15px] font-semibold tracking-tight text-foreground">{m.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{m.meta}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <Section id="about" bg="surface" label="About" title="A slow, considered practice.">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-6 text-[17px] leading-[1.7] text-muted-foreground">
              <p>
                I care about the invisible parts of good work — schema decisions, naming,
                documentation, the failure modes nobody writes about. My projects are
                fewer in number and larger in scope. Each one is intended to remain useful
                years after it ships.
              </p>
              <p>
                My long-term interest sits at the intersection of urban systems and
                analytics engineering — how well-modelled data can support decisions that
                affect cities, businesses, and everyday life.
              </p>
              <p>
                Most learning portfolios are a long list of small tutorials. I prefer the
                opposite: a small number of well-documented, engineering-grade resources
                that behave more like open-source products than assignments.
              </p>
            </div>
            <aside className="lg:col-span-5">
              <figure className="rounded-xl border border-border bg-background p-8 shadow-elev">
                <p className="font-serif text-2xl leading-[1.35] tracking-tight text-foreground">
                  “Teaching, when done rigorously, is the{" "}
                  <span className="italic text-accent">highest form</span> of
                  understanding.”
                </p>
                <figcaption className="mt-6 flex items-center gap-3 text-xs">
                  <span className="h-px w-6 bg-border-strong" />
                  <span className="font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    Working principle · 01
                  </span>
                </figcaption>
              </figure>
              <ul className="mt-6 divide-y divide-border rounded-xl border border-border bg-background shadow-elev">
                {[
                  ["Research", "before implementation"],
                  ["Evidence", "before conclusions"],
                  ["Quality", "before quantity"],
                  ["Reproducibility", "before convenience"],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-baseline justify-between gap-4 px-5 py-3.5">
                    <span className="text-sm font-medium text-foreground">{k}</span>
                    <span className="text-xs text-muted-foreground">{v}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Section>

        {/* ============ NOW / TIMELINE ============ */}
        <Section id="now" bg="white" label="Now" title="What I'm working on this season." kicker="Updated weekly">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4 text-[15px] leading-[1.65] text-muted-foreground">
              <p>
                A running log of current focus areas. The list is intentionally short —
                depth beats breadth.
              </p>
            </div>
            <ol className="relative lg:col-span-8">
              <span className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
              {now.map((n) => (
                <li key={n.title} className="relative pl-8 pb-8 last:pb-0">
                  <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center">
                    <span className="h-2 w-2 rounded-full bg-accent ring-4 ring-accent/10" />
                  </span>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">{n.when}</p>
                  <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-foreground">{n.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{n.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        {/* ============ PROJECTS ============ */}
        <Section id="projects" bg="surface" label="Featured Work" title="Selected projects." kicker="6 projects · built in public">
          <div className="grid gap-6 lg:grid-cols-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        {/* ============ OPEN SOURCE ============ */}
        <Section id="opensource" bg="white" label="Open Source" title="Built in public." kicker="@theammarngp-makes">
          <div className="grid gap-6 lg:grid-cols-12">
            {/* Repos */}
            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
              {repos.map((r) => (
                <a
                  key={r.name}
                  href={`https://github.com/theammarngp-makes/${r.name}`}
                  target="_blank" rel="noreferrer"
                  className="group flex flex-col rounded-xl border border-border bg-background p-5 shadow-elev transition-all hover:-translate-y-[1px] hover:shadow-elev-lg"
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="font-mono text-[13px] font-medium text-accent group-hover:underline">
                      {r.name}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: r.langColor }} />
                      {r.lang}
                    </span>
                    <span className="flex items-center gap-1"><Star className="h-3 w-3" /> {r.stars}</span>
                    <span className="flex items-center gap-1"><GitFork className="h-3 w-3" /> {r.forks}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Contribution + commits */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="rounded-xl border border-border bg-background p-6 shadow-elev">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-sm font-semibold text-foreground">Contribution activity</h3>
                  <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">Last 20 weeks</span>
                </div>
                <ContributionGraph />
                <div className="mt-3 flex items-center justify-end gap-2 text-[10px] text-muted-foreground">
                  <span>Less</span>
                  {[0, 1, 2, 3, 4].map((l) => (
                    <span key={l} className="h-2.5 w-2.5 rounded-[3px]" style={{ backgroundColor: contribColor(l) }} />
                  ))}
                  <span>More</span>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-background shadow-elev">
                <div className="flex items-center justify-between border-b border-border px-6 py-4">
                  <h3 className="text-sm font-semibold text-foreground">Latest commits</h3>
                  <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">main</span>
                </div>
                <ul className="divide-y divide-border">
                  {commits.map((c, i) => (
                    <li key={i} className="grid grid-cols-[auto_1fr_auto] items-baseline gap-4 px-6 py-3.5">
                      <span className="font-mono text-[11px] text-accent">{c.repo.slice(0, 3).toLowerCase()}</span>
                      <span className="truncate text-sm text-foreground">{c.msg}</span>
                      <span className="text-xs text-muted-foreground">{c.ago}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ============ WRITING ============ */}
        <Section id="writing" bg="surface" label="Writing" title="Documentation as design." kicker="Selected essays · guides · notes">
          <div className="grid gap-5 md:grid-cols-2">
            {writing.map((w) => (
              <a
                key={w.title}
                href={w.href}
                target="_blank" rel="noreferrer"
                className="group flex flex-col rounded-xl border border-border bg-background p-8 shadow-elev transition-all hover:-translate-y-[1px] hover:shadow-elev-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                    {w.kind}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-[1.25] tracking-tight text-foreground">
                  {w.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.excerpt}</p>
                <div className="mt-6 pt-6 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
                  <FileText className="h-3.5 w-3.5" /> Read documentation
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* ============ SKILLS ============ */}
        <Section id="skills" bg="white" label="Skills" title="Tools I reach for." kicker="No progress bars. Just what I use.">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.title} className="rounded-xl border border-border bg-background p-6 shadow-elev">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-surface text-muted-foreground">
                    <g.icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">{g.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <li key={i} className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-foreground">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* ============ ROADMAP ============ */}
        <Section id="roadmap" bg="surface" label="Roadmap" title="A deliberate path." kicker="Where this is going">
          <div className="grid gap-6 md:grid-cols-3">
            {roadmap.map((r, i) => (
              <div key={r.phase} className="relative rounded-xl border border-border bg-background p-8 shadow-elev">
                <div className="flex items-baseline justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">{r.phase}</span>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.detail}</p>
                <span className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
              </div>
            ))}
          </div>
        </Section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className="relative overflow-hidden border-t border-border bg-background">
          <div className="pointer-events-none absolute inset-0 [opacity:0.025] bg-dot-grid" />
          <div className="relative mx-auto max-w-[1180px] px-6 py-32 text-center lg:px-10 lg:py-40">
            <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
            <h2 className="mx-auto max-w-3xl text-[clamp(2.25rem,4.5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.03em] text-foreground">
              Available for thoughtful{" "}
              <span className="font-serif italic text-accent">analytics engineering</span> work.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.65] text-muted-foreground">
              Open to collaboration, contract work, and thoughtful conversations about
              data systems, documentation, and urban intelligence.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:theammarngp@gmail.com"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground shadow-elev transition-all hover:-translate-y-[1px] hover:shadow-elev-lg"
              >
                <Mail className="h-4 w-4" /> theammarngp@gmail.com
              </a>
              <a
                href="https://github.com/theammarngp-makes"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground shadow-elev hover:bg-muted"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-ammar-ngp/"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground shadow-elev hover:bg-muted"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-6 py-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>© {new Date().getFullYear()} Mohammad Ammar</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Nagpur, India</span>
          </div>
          <div className="flex items-center gap-5 font-mono">
            <span>v2026.1</span>
            <a href="#top" className="hover:text-foreground">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Reusable Section ---------- */

function Section({
  id, label, title, kicker, children, bg,
}: {
  id: string;
  label: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
  bg: "white" | "surface";
}) {
  return (
    <section
      id={id}
      className={[
        "relative border-t border-border",
        bg === "surface" ? "bg-surface" : "bg-background",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10 lg:py-32">
        <header className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                {label}
              </p>
            </div>
            <h2 className="mt-5 text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-foreground">
              {title}
            </h2>
          </div>
          {kicker && (
            <p className="font-mono text-xs text-muted-foreground md:text-right">{kicker}</p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}

/* ---------- Project Card ---------- */

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const span = project.featured ? "lg:col-span-3" : "lg:col-span-2";
  return (
    <article
      className={[
        "group relative flex flex-col rounded-xl border border-border bg-background p-8 shadow-elev transition-all hover:-translate-y-[2px] hover:shadow-elev-lg",
        span,
      ].join(" ")}
    >
      {/* Logo */}
      <div className="mb-8 flex items-start justify-between">
        <div className="grid h-14 w-14 place-items-center rounded-lg border border-border bg-surface font-mono text-[11px] font-semibold tracking-tight text-foreground shadow-elev">
          {project.monogram}
        </div>
        {project.featured && (
          <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
            Featured
          </span>
        )}
      </div>

      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {project.category}
      </p>
      <h3 className="mt-2 text-xl font-semibold leading-[1.25] tracking-tight text-foreground">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <li
            key={t}
            className="rounded-md border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-2 border-t border-border pt-5">
        <a
          href={project.github}
          target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
        >
          <Github className="h-3.5 w-3.5" /> GitHub
        </a>
        <a
          href={project.href}
          target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background transition-opacity hover:opacity-90"
        >
          Case study <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}

/* ---------- Engineering Diagram (hero right) ---------- */

function EngineeringDiagram() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-border bg-background shadow-elev">
      {/* faint grid */}
      <div className="pointer-events-none absolute inset-0 [opacity:0.04] bg-blueprint" />

      {/* corner ticks */}
      <div className="pointer-events-none absolute inset-4 border border-dashed border-border/70" />
      <span className="absolute left-3 top-3 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">A · 01</span>
      <span className="absolute right-3 top-3 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">rev 26.1</span>
      <span className="absolute left-3 bottom-3 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">Data · Systems</span>
      <span className="absolute right-3 bottom-3 font-mono text-[9px] uppercase tracking-[0.16em] text-accent">
        ● live
      </span>

      <svg viewBox="0 0 400 500" className="relative h-full w-full" fill="none">
        {/* connections */}
        <g stroke="#d1d5db" strokeWidth="1">
          <path d="M200 90 L120 200" />
          <path d="M200 90 L280 200" />
          <path d="M120 220 L200 340" />
          <path d="M280 220 L200 340" />
          <path d="M200 360 L200 430" />
        </g>
        {/* accent connection */}
        <path d="M200 90 L200 340" stroke="#111827" strokeWidth="1.25" strokeDasharray="3 4" />

        {/* Source node (top) */}
        <g transform="translate(160,50)">
          <rect width="80" height="40" rx="6" fill="#ffffff" stroke="#e5e7eb" />
          <ellipse cx="40" cy="12" rx="20" ry="4" fill="#f3f4f6" stroke="#111827" strokeWidth="0.75" />
          <text x="40" y="26" textAnchor="middle" fontSize="9" fontFamily="ui-monospace" fill="#111827">source</text>
          <text x="40" y="35" textAnchor="middle" fontSize="7" fontFamily="ui-monospace" fill="#6b7280">raw.csv</text>
        </g>

        {/* Two middle nodes */}
        <g transform="translate(80,200)">
          <rect width="80" height="40" rx="6" fill="#ffffff" stroke="#e5e7eb" />
          <text x="40" y="18" textAnchor="middle" fontSize="9" fontFamily="ui-monospace" fill="#111827">stg_orders</text>
          <text x="40" y="30" textAnchor="middle" fontSize="7" fontFamily="ui-monospace" fill="#6b7280">table</text>
        </g>
        <g transform="translate(240,200)">
          <rect width="80" height="40" rx="6" fill="#ffffff" stroke="#e5e7eb" />
          <text x="40" y="18" textAnchor="middle" fontSize="9" fontFamily="ui-monospace" fill="#111827">stg_users</text>
          <text x="40" y="30" textAnchor="middle" fontSize="7" fontFamily="ui-monospace" fill="#6b7280">table</text>
        </g>

        {/* Mart node */}
        <g transform="translate(140,340)">
          <rect width="120" height="44" rx="6" fill="#f3f4f6" stroke="#111827" />
          <text x="60" y="20" textAnchor="middle" fontSize="10" fontFamily="ui-monospace" fill="#111827" fontWeight="600">mart_revenue</text>
          <text x="60" y="34" textAnchor="middle" fontSize="7" fontFamily="ui-monospace" fill="#111827">fact · daily</text>
        </g>

        {/* Chart panel */}
        <g transform="translate(120,430)">
          <rect width="160" height="50" rx="6" fill="#ffffff" stroke="#e5e7eb" />
          <polyline
            points="10,40 30,32 50,36 70,22 90,26 110,14 130,18 150,10"
            stroke="#111827" strokeWidth="1.25" fill="none"
          />
          {[10, 30, 50, 70, 90, 110, 130, 150].map((x, i) => (
            <circle key={i} cx={x} cy={[40, 32, 36, 22, 26, 14, 18, 10][i]} r="1.5" fill="#111827" />
          ))}
          <line x1="10" y1="44" x2="150" y2="44" stroke="#e5e7eb" />
        </g>

        {/* axis ticks */}
        {[100, 200, 300, 400].map((y) => (
          <line key={y} x1="20" x2="26" y1={y} y2={y} stroke="#d1d5db" />
        ))}
        <text x="14" y="103" fontSize="7" fontFamily="ui-monospace" fill="#9ca3af">100</text>
        <text x="14" y="203" fontSize="7" fontFamily="ui-monospace" fill="#9ca3af">200</text>
        <text x="14" y="303" fontSize="7" fontFamily="ui-monospace" fill="#9ca3af">300</text>
      </svg>
    </div>
  );
}

/* ---------- Contribution graph ---------- */

function contribColor(level: number) {
  const colors = ["#f3f4f6", "#dbeafe", "#93c5fd", "#3b82f6", "#1d4ed8"];
  return colors[level];
}

function ContributionGraph() {
  const weeks = 20;
  const days = 7;
  // Deterministic pseudo-random pattern
  const cells: number[][] = [];
  let seed = 7;
  for (let w = 0; w < weeks; w++) {
    const col: number[] = [];
    for (let d = 0; d < days; d++) {
      seed = (seed * 9301 + 49297) % 233280;
      const r = seed / 233280;
      const level = r < 0.35 ? 0 : r < 0.6 ? 1 : r < 0.8 ? 2 : r < 0.95 ? 3 : 4;
      col.push(level);
    }
    cells.push(col);
  }
  return (
    <div className="mt-5 flex gap-[3px]">
      {cells.map((col, i) => (
        <div key={i} className="flex flex-col gap-[3px]">
          {col.map((lvl, j) => (
            <span
              key={j}
              className="h-3 w-3 rounded-[3px] border border-border/50"
              style={{ backgroundColor: contribColor(lvl) }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
