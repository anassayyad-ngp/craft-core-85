import { createFileRoute } from "@tanstack/react-router";
import heroCurve from "@/assets/hero-curve.png.asset.json";

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
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

const facts = [
  { k: "Based", v: "Nagpur, India" },
  { k: "Role", v: "Data Analyst" },
  { k: "Venture", v: "Apex Analyticx" },
  { k: "Seeking", v: "Paid internship" },
];

const stack = [
  {
    group: "Data & Analytics",
    items: ["SQL", "Python", "Pandas", "Tableau", "Matplotlib", "Seaborn"],
  },
  {
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
  { group: "Languages", items: ["C", "C++", "Java", "OOP", "Verilog"] },
  { group: "Tools & Platforms", items: ["FastAPI", "Git", "GitHub", "Streamlit", "MySQL"] },
];

const projects = [
  {
    n: "01",
    title: "SQL Engineering Handbook",
    answers:
      "A 20+ module production-quality knowledge base covering advanced SQL, performance tuning, data modeling and real-world query design.",
    stack: ["SQL", "MySQL", "Git"],
    href: GITHUB,
  },
  {
    n: "02",
    title: "NagpurLens",
    answers:
      "An urban intelligence platform mapping infrastructure gaps and growth signals across 57 Nagpur localities using custom KPIs.",
    stack: ["MySQL", "FastAPI", "Streamlit", "Python"],
    note: "In progress — repo link once public-ready",
  },
  {
    n: "03",
    title: "Olist Sales Analysis",
    answers: "Which categories and regions drive 80% of revenue across 95K+ orders?",
    stack: ["SQL", "Python", "Pandas", "Tableau"],
    href: GITHUB,
  },
  {
    n: "04",
    title: "Cohort Retention Analysis",
    answers: "Why do 96%+ of customers never return after their first purchase?",
    stack: ["SQL", "Python", "Tableau"],
    href: GITHUB,
  },
  {
    n: "05",
    title: "RFM Customer Segmentation",
    answers: "Who are the high-value versus at-risk customers?",
    stack: ["SQL", "Python", "Pandas", "Tableau"],
    href: GITHUB,
  },
  {
    n: "06",
    title: "Daily Reflection Tree",
    answers:
      "A deterministic CLI journaling app with 25+ branching nodes across three psychological axes — no LLM at runtime.",
    stack: ["Python", "FastAPI", "JSON"],
    href: GITHUB,
  },
];

const credentials = [
  { title: "HackerRank — SQL (Advanced)", meta: "Certification" },
  { title: "HackerRank — SQL (Basic)", meta: "Certification" },
  {
    title: "Zetheta Algorithms — Data Analyst, Securitisation",
    meta:
      "Externship · 15 full-time days equivalent · IFRS 9 ECL modeling, DAX, star schema and Python analytics on real auto loan data",
  },
  {
    title: "B.Tech Engineering, Nagpur",
    meta: "SGPA 8.53 (Sem 1) · 7.86 (Sem 2)",
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-[10px] uppercase tracking-brand text-subtle">{children}</p>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-mono text-[11px] uppercase tracking-brand">
            M. Ammar
          </a>
          <nav className="hidden gap-8 md:flex">
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

      {/* HERO */}
      <section id="top" className="relative isolate flex min-h-[92vh] items-end overflow-hidden">
        <img
          src={heroCurve.url}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

        <div className="relative mx-auto w-full max-w-6xl px-6 pb-24">
          <div className="animate-fade-up">
            <SectionLabel>Data Analyst · Nagpur, India</SectionLabel>
            <h1 className="mt-6 max-w-3xl text-5xl leading-[1.02] tracking-tight sm:text-7xl">
              Mohammad Ammar
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              I build end-to-end analytics — from raw SQL queries to Tableau dashboards — around
              real business problems, and write curriculum-grade SQL content on the side.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="rounded-full bg-accent px-5 py-2.5 text-[12px] font-medium text-accent-foreground transition-opacity hover:opacity-85"
              >
                View work
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border-strong px-5 py-2.5 text-[12px] font-medium transition-colors hover:bg-accent-soft"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="border-y border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {facts.map((f, i) => (
            <div
              key={f.k}
              className={`px-6 py-8 ${i !== 0 ? "border-l border-border" : ""} ${
                i < 2 ? "border-b border-border md:border-b-0" : ""
              }`}
            >
              <p className="font-mono text-[10px] uppercase tracking-brand text-subtle">{f.k}</p>
              <p className="mt-3 text-[14px]">{f.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-14 md:grid-cols-[200px_1fr]">
          <SectionLabel>About</SectionLabel>
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
                "Currently seeking a paid Data Analyst internship where I can contribute from day one with SQL, Python and data storytelling.",
              ].map((line) => (
                <li key={line} className="flex gap-6 py-5">
                  <span className="mt-2 h-px w-6 shrink-0 bg-border-strong" />
                  <span className="text-[15px] leading-relaxed text-muted-foreground">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-14 md:grid-cols-[200px_1fr]">
            <SectionLabel>Tech Stack</SectionLabel>
            <div className="grid gap-12 sm:grid-cols-2">
              {stack.map((s) => (
                <div key={s.group}>
                  <h3 className="text-[13px] font-medium">{s.group}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
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
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 pt-28">
          <div className="grid gap-14 md:grid-cols-[200px_1fr]">
            <SectionLabel>Featured Work</SectionLabel>
            <p className="max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Each project starts with a question a business actually asks, and ends with an
              answer someone can act on.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-6xl border-t border-border px-6">
          {projects.map((p) => {
            const Tag = p.href ? "a" : "div";
            return (
              <Tag
                key={p.n}
                {...(p.href ? { href: p.href, target: "_blank", rel: "noreferrer" } : {})}
                className="group grid gap-6 border-b border-border py-10 md:grid-cols-[64px_1fr_260px] md:items-start"
              >
                <span className="font-mono text-[11px] text-subtle">{p.n}</span>
                <div>
                  <h3 className="text-xl tracking-tight transition-opacity group-hover:opacity-70">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-muted-foreground">
                    {p.answers}
                  </p>
                  {p.note && (
                    <p className="mt-3 font-mono text-[11px] text-subtle">{p.note}</p>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
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
      </section>

      {/* VENTURE */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-14 md:grid-cols-[200px_1fr]">
            <SectionLabel>Venture</SectionLabel>
            <div className="max-w-2xl">
              <h3 className="text-3xl tracking-tight">Apex Analyticx</h3>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-brand text-subtle">
                Co-founder — Execution & Lead Data Analyst
              </p>
              <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
                A freelance venture offering multiple services to businesses, including data
                analytics. I lead execution and own the data analytics function end to end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section id="credentials" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-14 md:grid-cols-[200px_1fr]">
            <SectionLabel>Credentials</SectionLabel>
            <ul className="divide-y divide-border border-y border-border">
              {credentials.map((c) => (
                <li key={c.title} className="grid gap-2 py-6 md:grid-cols-[1fr_1.2fr]">
                  <p className="text-[15px]">{c.title}</p>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">{c.meta}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-32">
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
        </div>
      </section>

      <footer className="border-t border-border">
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
