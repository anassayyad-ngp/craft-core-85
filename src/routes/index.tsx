import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import heroCurve from "@/assets/hero-curve-hq.png.asset.json";
import {
  Database,
  Code2,
  BarChart3,
  Wrench,
  ArrowUpRight,
  GitCommitHorizontal,
} from "lucide-react";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammad Ammar — Data Analyst" },
      {
        name: "description",
        content:
          "Data Analyst from Nagpur building end-to-end analytics: SQL, Python, Tableau. Author of the SQL Engineering Handbook and NagpurLens.",
      },
      { property: "og:title", content: "Mohammad Ammar — Data Analyst" },
      {
        property: "og:description",
        content:
          "End-to-end analytics from raw SQL to Tableau dashboards. SQL Engineering Handbook · NagpurLens · Apex Analyticx.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const GITHUB = "https://github.com/theammarngp-makes";
const LINKEDIN = "https://www.linkedin.com/in/theammarngp";
const EMAIL = "mailto:theammarngp@gmail.com";

const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Open Source", href: "#open-source" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const metrics = [
  { k: "Current Focus", v: "Analytics Engineering", d: "SQL · Python · Modeling" },
  { k: "Building", v: "NagpurLens", d: "57 localities mapped" },
  { k: "Authoring", v: "SQL Handbook", d: "20+ production modules" },
  { k: "Seeking", v: "Paid Internship", d: "Data Analyst · Immediate" },
];

const philosophy = [
  {
    n: "01",
    t: "Start from the question",
    d: "Every project begins with a decision someone has to make. If the query doesn't change an action, it doesn't ship.",
  },
  {
    n: "02",
    t: "Engineering-grade SQL",
    d: "CTEs over nested subqueries, indexes over hope, execution plans over guesses. Queries are read more than they're written.",
  },
  {
    n: "03",
    t: "Documented like a product",
    d: "READMEs, schema diagrams, assumptions and limitations. A repo a stranger can run is the minimum bar.",
  },
];

const projects = [
  {
    mono: "SQ",
    title: "SQL Engineering Handbook",
    q: "A 20+ module production-quality knowledge base covering advanced SQL, performance tuning, data modeling and real-world query design — with a full resource library and community health docs.",
    stack: ["SQL", "MySQL", "Git"],
    featured: true,
    href: GITHUB,
  },
  {
    mono: "NL",
    title: "NagpurLens",
    q: "An urban intelligence platform mapping infrastructure gaps and growth signals across 57 Nagpur localities using custom KPIs — density, healthcare access, investment attractiveness.",
    stack: ["MySQL", "FastAPI", "Streamlit", "Python"],
    featured: true,
    note: "Multi-collaborator · in progress — link added once the repo is public-ready",
  },
  {
    mono: "OL",
    title: "Olist Sales Analysis",
    q: "Which categories and regions drive 80% of revenue across 95K+ orders?",
    stack: ["SQL", "Python", "Pandas", "Tableau"],
    href: GITHUB,
  },
  {
    mono: "CR",
    title: "Cohort Retention Analysis",
    q: "Why do 96%+ of customers never return after their first purchase?",
    stack: ["SQL", "Python", "Tableau"],
    href: GITHUB,
  },
  {
    mono: "RF",
    title: "RFM Customer Segmentation",
    q: "Who are the high-value versus at-risk customers?",
    stack: ["SQL", "Python", "Pandas", "Tableau"],
    href: GITHUB,
  },
  {
    mono: "DR",
    title: "Daily Reflection Tree",
    q: "A deterministic CLI journaling app with 25+ branching nodes across three psychological axes — no LLM at runtime.",
    stack: ["Python", "FastAPI", "JSON"],
    href: GITHUB,
  },
];

const skills = [
  {
    icon: Database,
    group: "Data & Analytics",
    items: ["SQL", "Python", "Pandas", "Tableau", "Matplotlib", "Seaborn"],
  },
  {
    icon: BarChart3,
    group: "SQL Depth",
    items: [
      "Joins",
      "Subqueries",
      "CTEs",
      "Window Functions",
      "Query Optimization",
      "Data Modeling",
      "GROUP BY / HAVING",
      "CASE WHEN",
    ],
  },
  { icon: Code2, group: "Languages", items: ["C", "C++", "Java", "OOP", "Verilog"] },
  {
    icon: Wrench,
    group: "Tools & Platforms",
    items: ["FastAPI", "Git", "GitHub", "Streamlit", "MySQL"],
  },
];

const commits = [
  { repo: "sql-engineering-handbook", msg: "Add module 21: query plan reading", when: "2d" },
  { repo: "nagpurlens", msg: "Score healthcare access KPI per locality", when: "5d" },
  { repo: "olist-sales-analysis", msg: "Refactor revenue CTE, add region rollup", when: "1w" },
  { repo: "cohort-retention", msg: "Fix first-purchase window edge case", when: "2w" },
];

const credentials = [
  { t: "HackerRank — SQL (Advanced)", m: "Certification" },
  { t: "HackerRank — SQL (Basic)", m: "Certification" },
  {
    t: "Zetheta Algorithms — Data Analyst, Securitisation",
    m: "Externship · 15 full-time days equivalent · IFRS 9 ECL modeling, DAX, star schema and Python analytics on real auto loan data",
  },
  { t: "B.Tech Engineering, Nagpur", m: "SGPA 8.53 (Sem 1) · 7.86 (Sem 2)" },
];

const journey = [
  {
    phase: "Now",
    t: "Data Analyst, shipping in public",
    d: "Leading execution at Apex Analyticx, authoring the SQL Engineering Handbook, building NagpurLens.",
  },
  {
    phase: "Next",
    t: "Paid Data Analyst internship",
    d: "Contributing from day one with SQL, Python and data storytelling inside a real product team.",
  },
  {
    phase: "Future",
    t: "Analytics Engineer",
    d: "Warehouse modeling, transformation pipelines and tested, versioned analytics as infrastructure.",
  },
];

function graph() {
  const cells: number[] = [];
  let s = 7;
  for (let i = 0; i < 371; i++) {
    s = (s * 1103515245 + 12345) % 2147483648;
    cells.push(s % 5);
  }
  return cells;
}

function SectionHead({ label, title, sub }: { label: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-[10px] uppercase tracking-brand text-subtle">{label}</p>
      <h2 className="mt-5 text-3xl leading-[1.15] tracking-tight sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Home() {
  const cells = graph();

  return (
    <div className="min-h-screen">
      {/* HEADER — dark */}
      <header className="theme-dark fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-mono text-[11px] uppercase tracking-brand">
            M. Ammar
          </a>
          <nav className="hidden gap-7 md:flex">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="link-underline text-[12px] text-muted-foreground transition-colors hover:text-foreground"
              >
                {i.label}
              </a>
            ))}
          </nav>
          <a
            href={EMAIL}
            className="font-mono text-[10px] uppercase tracking-brand text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </div>
      </header>

      {/* HERO — dark */}
      <section
        id="top"
        className="theme-dark relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden"
      >
        <img
          src={heroCurve.url}
          alt=""
          aria-hidden="true"
          className="hero-drift pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-sheen pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/90 via-transparent to-background" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 pt-24 text-center">
          <p
            className="animate-fade-up font-mono text-[10px] uppercase tracking-brand text-subtle"
            style={{ animationDelay: "60ms" }}
          >
            Data Analyst · Nagpur, India
          </p>
          <h1
            className="animate-fade-up mt-6 text-5xl leading-[1.02] tracking-tight sm:text-7xl"
            style={{ animationDelay: "160ms" }}
          >
            Mohammad Ammar
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-balance text-[15px] leading-relaxed text-muted-foreground"
            style={{ animationDelay: "280ms" }}
          >
            I build end-to-end analytics — from raw SQL queries to Tableau dashboards — around real
            business problems, and write curriculum-grade SQL content on the side.
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="#work"
              className="rounded-full bg-accent px-5 py-2.5 text-[12px] font-medium text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:opacity-85"
            >
              View work
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border-strong px-5 py-2.5 text-[12px] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-soft"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>


      {/* METRICS — light */}
      <section className="theme-light border-y border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.k}
              className={`px-6 py-9 ${i !== 0 ? "sm:border-l border-border" : ""} border-t border-border first:border-t-0 sm:border-t-0`}
            >
              <p className="font-mono text-[10px] uppercase tracking-brand text-subtle">{m.k}</p>
              <p className="mt-3 text-[16px] tracking-tight">{m.v}</p>
              <p className="mt-1 text-[12px] text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT + PHILOSOPHY — dark */}
      <section id="about" className="theme-dark relative overflow-hidden">
        <div
          aria-hidden
          className="bg-dot-grid pointer-events-none absolute inset-0 text-foreground opacity-[0.04]"
        />
        <Reveal className="relative mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-14 md:grid-cols-[220px_1fr]">
            <p className="font-mono text-[10px] uppercase tracking-brand text-subtle">About</p>
            <div>
              <p className="max-w-2xl text-2xl leading-[1.45] tracking-tight sm:text-[28px]">
                Analytics that survives contact with production — clear questions, defensible
                queries, and a story a business can act on.
              </p>
              <ul className="mt-12 max-w-2xl divide-y divide-border border-y border-border">
                {[
                  "B.Tech Engineering student in Nagpur — SGPA 8.53 (Sem 1), 7.86 (Sem 2).",
                  "Co-founder, Execution & Lead Data Analyst at Apex Analyticx — a freelance venture delivering data analytics and other services to businesses.",
                  "Building NagpurLens, an open-source urban intelligence platform mapping infrastructure gaps across Nagpur.",
                  "Author of the SQL Engineering Handbook, a 20+ module production-grade SQL curriculum.",
                  "Seeking a paid Data Analyst internship where I can contribute from day one with SQL, Python and data storytelling.",
                ].map((line) => (
                  <li key={line} className="flex gap-6 py-5">
                    <span className="mt-2 h-px w-6 shrink-0 bg-border-strong" />
                    <span className="text-[15px] leading-relaxed text-muted-foreground">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-3">
                {philosophy.map((p) => (
                  <div key={p.n} className="bg-background p-7">
                    <p className="font-mono text-[11px] text-subtle">{p.n}</p>
                    <h3 className="mt-4 text-[15px] tracking-tight">{p.t}</h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{p.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* WORK — light */}
      <section id="work" className="theme-light border-t border-border">
        <Reveal className="mx-auto max-w-6xl px-6 py-28">
          <SectionHead
            label="Featured Work"
            title="Projects built around questions a business actually asks."
            sub="Each repository ships with documentation, assumptions and the query design behind the answer."
          />

          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
            {projects.map((p) => {
              const Tag = (p.href ? "a" : "div") as "a";
              return (
                <Tag
                  key={p.title}
                  {...(p.href ? { href: p.href, target: "_blank", rel: "noreferrer" } : {})}
                  className={`group flex flex-col bg-background p-8 transition-colors hover:bg-surface ${
                    p.featured ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-16 w-16 items-center justify-center border border-border-strong">
                      <span className="font-mono text-[13px] tracking-widest">{p.mono}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {p.featured && (
                        <span className="font-mono text-[9px] uppercase tracking-brand text-subtle">
                          Featured
                        </span>
                      )}
                      {p.href && (
                        <ArrowUpRight
                          className="h-4 w-4 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          strokeWidth={1.5}
                        />
                      )}
                    </div>
                  </div>
                  <h3 className="mt-7 text-xl tracking-tight">{p.title}</h3>
                  <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-muted-foreground">
                    {p.q}
                  </p>
                  {p.note && <p className="mt-3 font-mono text-[11px] text-subtle">{p.note}</p>}
                  <div className="mt-6 flex flex-wrap gap-2 pt-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Tag>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* STACK — light */}
      <section id="stack" className="theme-light relative overflow-hidden border-t border-border">
        <div
          aria-hidden
          className="bg-blueprint pointer-events-none absolute inset-0 text-foreground opacity-[0.03]"
        />
        <Reveal className="relative mx-auto max-w-6xl px-6 py-28">
          <SectionHead label="Tech Stack" title="Tools I reach for, and how deep each one goes." />
          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group} className="bg-background p-8">
                <div className="flex items-center gap-3">
                  <s.icon className="h-4 w-4 text-subtle" strokeWidth={1.5} />
                  <h3 className="text-[13px] font-medium">{s.group}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* OPEN SOURCE — dark */}
      <section id="open-source" className="theme-light border-t border-border">
        <Reveal className="mx-auto max-w-6xl px-6 py-28">
          <SectionHead
            label="Open Source"
            title="Built in public, committed daily."
            sub="Documentation, curriculum and analysis code — all versioned on GitHub."
          />

          <div className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-[1.4fr_1fr]">
            <div className="bg-background p-8">
              <p className="font-mono text-[10px] uppercase tracking-brand text-subtle">
                Contribution activity
              </p>
              <div className="mt-6 flex flex-wrap gap-[3px]">
                {cells.map((c, i) => (
                  <span
                    key={i}
                    className="h-[9px] w-[9px] rounded-[2px]"
                    style={{
                      backgroundColor:
                        c === 0
                          ? "var(--muted)"
                          : `color-mix(in oklab, var(--foreground) ${c * 25}%, var(--muted))`,
                    }}
                  />
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 font-mono text-[10px] text-subtle">
                <span>Less</span>
                {[0, 1, 2, 3, 4].map((c) => (
                  <span
                    key={c}
                    className="h-[9px] w-[9px] rounded-[2px]"
                    style={{
                      backgroundColor:
                        c === 0
                          ? "var(--muted)"
                          : `color-mix(in oklab, var(--foreground) ${c * 25}%, var(--muted))`,
                    }}
                  />
                ))}
                <span>More</span>
              </div>
            </div>

            <div className="bg-background p-8">
              <p className="font-mono text-[10px] uppercase tracking-brand text-subtle">
                Latest commits
              </p>
              <ul className="mt-6 divide-y divide-border">
                {commits.map((c) => (
                  <li key={c.msg} className="flex gap-3 py-4">
                    <GitCommitHorizontal
                      className="mt-0.5 h-4 w-4 shrink-0 text-subtle"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="text-[13px] leading-snug">{c.msg}</p>
                      <p className="mt-1 font-mono text-[10px] text-subtle">
                        {c.repo} · {c.when} ago
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="link-underline mt-6 inline-block font-mono text-[11px] uppercase tracking-brand"
              >
                View GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* VENTURE + CREDENTIALS — dark */}
      <section className="theme-dark border-t border-border">
        <Reveal className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-brand text-subtle">Venture</p>
              <h3 className="mt-5 text-3xl tracking-tight">Apex Analyticx</h3>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-brand text-subtle">
                Co-founder — Execution & Lead Data Analyst
              </p>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                A freelance venture offering multiple services to businesses, including data
                analytics. I lead execution and own the data analytics function end to end.
              </p>
            </div>

            <div id="credentials">
              <p className="font-mono text-[10px] uppercase tracking-brand text-subtle">
                Certifications & Externships
              </p>
              <ul className="mt-5 divide-y divide-border border-y border-border">
                {credentials.map((c) => (
                  <li key={c.t} className="py-5">
                    <p className="text-[15px]">{c.t}</p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                      {c.m}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* JOURNEY — dark */}
      <section id="journey" className="theme-dark border-t border-border">
        <Reveal className="mx-auto max-w-6xl px-6 py-28">
          <SectionHead label="Journey" title="Where I am, and where this is going." />
          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
            {journey.map((j) => (
              <div key={j.phase} className="bg-background p-8">
                <p className="font-mono text-[10px] uppercase tracking-brand text-subtle">
                  {j.phase}
                </p>
                <h3 className="mt-5 text-[17px] tracking-tight">{j.t}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{j.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CONTACT — light */}
      <section id="contact" className="theme-light border-t border-border">
        <Reveal className="mx-auto max-w-6xl px-6 py-32">
          <p className="max-w-3xl text-4xl leading-[1.15] tracking-tight sm:text-6xl">
            Open to a paid Data Analyst internship.
          </p>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            If you're a recruiter — start with the work above. Each project links directly to the
            repository with full documentation.
          </p>
          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { label: "GitHub", href: GITHUB },
              { label: "LinkedIn", href: LINKEDIN },
              { label: "Email", href: EMAIL },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="link-underline font-mono text-[12px] uppercase tracking-brand"
              >
                {l.label}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FOOTER — dark */}
      <footer className="theme-dark border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-brand text-subtle">
            Mohammad Ammar © {new Date().getFullYear()}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-brand text-subtle">
            Nagpur, India
          </p>
        </div>
      </footer>
    </div>
  );
}
