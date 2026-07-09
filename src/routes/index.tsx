import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const projects = [
  {
    logo: "SQL",
    category: "Handbook",
    title: "SQL Engineering Handbook",
    description:
      "A production-style SQL curriculum spanning twenty-one modules — from first SELECT to analytics engineering, interview prep, and real business case studies.",
    tags: ["MySQL", "Analytics Engineering", "Documentation"],
    github: "https://github.com/theammarngp-makes/SQL-Engineering-Handbook",
    href: "https://github.com/theammarngp-makes/SQL-Engineering-Handbook",
  },
  {
    logo: "NL",
    category: "Urban Intelligence",
    title: "NagpurLens",
    description:
      "A research-first Urban Intelligence Platform transforming fragmented city data into reproducible, evidence-based insights for one Indian city.",
    tags: ["PostgreSQL", "Python", "Research"],
    github: "https://github.com/theammarngp-makes/NagpurLens",
    href: "https://github.com/theammarngp-makes/NagpurLens",
  },
  {
    logo: "OL",
    category: "Sales Analytics",
    title: "Olist Sales Analytics",
    description:
      "End-to-end analysis of Brazilian e-commerce transactions — revenue trends, seller performance, geography, and delivery reliability.",
    tags: ["SQL", "EDA", "Business"],
    github: "https://github.com/theammarngp-makes/olist-sales-analysis",
    href: "https://github.com/theammarngp-makes/olist-sales-analysis",
  },
  {
    logo: "RFM",
    category: "Customer Analytics",
    title: "E-Commerce RFM Segmentation",
    description:
      "Customer segmentation using Recency, Frequency, and Monetary scoring to surface high-value cohorts and churn risk.",
    tags: ["SQL", "Segmentation", "CRM"],
    github: "https://github.com/theammarngp-makes/ecommerce-rfm-customer-segmentation",
    href: "https://github.com/theammarngp-makes/ecommerce-rfm-customer-segmentation",
  },
  {
    logo: "CR",
    category: "Retention",
    title: "Cohort Retention Analysis",
    description:
      "Monthly cohort retention model for an e-commerce dataset — measuring how well a business retains its customers over time.",
    tags: ["SQL", "Cohorts", "Retention"],
    github: "https://github.com/theammarngp-makes/E-commerce-cohort-retention-analysis",
    href: "https://github.com/theammarngp-makes/E-commerce-cohort-retention-analysis",
  },
  {
    logo: "PY",
    category: "Engineering",
    title: "Python Engineering Projects",
    description:
      "A working notebook of Python fundamentals, data manipulation, and small engineering exercises documented as I learn.",
    tags: ["Python", "NumPy", "Notebooks"],
    github: "https://github.com/theammarngp-makes/Python",
    href: "https://github.com/theammarngp-makes/Python",
  },
];

const now = [
  {
    label: "Writing",
    title: "SQL Engineering Handbook",
    detail: "Modules 10–13 — strings, nulls, advanced aggregations, set operators.",
  },
  {
    label: "Building",
    title: "NagpurLens",
    detail: "Validating locality master dataset and PostgreSQL schema.",
  },
  {
    label: "Learning",
    title: "NumPy · Mathematics · ML",
    detail: "Foundations for the transition into data science.",
  },
];

const writing = [
  { title: "SQL Engineering Handbook — Architecture", kind: "Documentation", href: "https://github.com/theammarngp-makes/SQL-Engineering-Handbook/blob/main/ARCHITECTURE.md" },
  { title: "SQL Engineering Handbook — Style Guide", kind: "Guide", href: "https://github.com/theammarngp-makes/SQL-Engineering-Handbook/blob/main/STYLE_GUIDE.md" },
  { title: "NagpurLens — Vision & Problem Statement", kind: "Essay", href: "https://github.com/theammarngp-makes/NagpurLens" },
  { title: "Window Function Business Cases", kind: "Module", href: "https://github.com/theammarngp-makes/SQL-Engineering-Handbook/tree/main/08_WINDOW_BUSINESS_CASES" },
];

const skills = [
  { group: "Languages", items: ["SQL", "Python"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL"] },
  { group: "Analytics", items: ["Pandas", "NumPy", "EDA", "Segmentation", "Cohort Analysis"] },
  { group: "Engineering", items: ["Schema Design", "Query Optimization", "Documentation", "Git"] },
  { group: "Presentation", items: ["Streamlit", "Tableau", "Power BI"] },
];

const journey = [
  { year: "2024", title: "Foundations", detail: "Began Electronics & Telecommunication Engineering. First SQL." },
  { year: "2025", title: "Analyst in Public", detail: "Published SQL modules, Olist, RFM, and Cohort projects." },
  { year: "2026", title: "Analytics Engineer", detail: "Building NagpurLens and the SQL Engineering Handbook." },
  { year: "→", title: "Data Scientist", detail: "Mathematics, machine learning, applied research." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="mx-auto max-w-[1180px] px-8 pt-10 lg:pt-14">
        <nav className="flex items-center justify-between">
          <a href="#top" className="font-serif text-xl tracking-tight">
            Mohammad Ammar
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#work" className="transition-colors hover:text-foreground">Work</a>
            <a href="#now" className="transition-colors hover:text-foreground">Now</a>
            <a href="#writing" className="transition-colors hover:text-foreground">Writing</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-[1180px] px-8">
        {/* Hero */}
        <section className="pt-32 pb-40 lg:pt-48 lg:pb-56">
          <p className="mb-10 text-xs uppercase tracking-[0.2em] text-subtle">
            <span className="mr-3 inline-block h-px w-8 align-middle bg-subtle" />
            Nagpur, India
          </p>
          <h1 className="font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[1.02] tracking-[-0.02em]">
            Building quiet,<br />
            <span className="italic text-accent">engineering-grade</span> tools<br />
            for data.
          </h1>
          <p className="mt-12 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I am an Electronics & Telecommunication student on a deliberate path from
            Data Analyst to Analytics Engineer to Data Scientist. I write open-source
            resources that treat teaching as a form of engineering.
          </p>
        </section>

        <Divider />

        {/* About */}
        <Section id="about" label="About" title="A slow, considered practice.">
          <div className="grid gap-16 md:grid-cols-2">
            <p className="text-lg leading-[1.7] text-muted-foreground">
              I care about the invisible parts of good work — schema decisions, naming,
              documentation, the failure modes nobody writes about. My projects are fewer
              in number and larger in scope. Each one is intended to remain useful years
              after it ships.
            </p>
            <p className="text-lg leading-[1.7] text-muted-foreground">
              My long-term interest is the intersection of urban systems and analytics
              engineering — how well-modelled data can support decisions that affect
              cities, businesses, and everyday life.
            </p>
          </div>
        </Section>

        <Divider />

        {/* Now */}
        <Section id="now" label="Now" title="What I am working on this season.">
          <div className="grid gap-px overflow-hidden bg-border md:grid-cols-3">
            {now.map((n) => (
              <div key={n.title} className="bg-background p-8">
                <p className="mb-6 text-xs uppercase tracking-[0.18em] text-subtle">{n.label}</p>
                <h3 className="font-serif text-2xl tracking-tight">{n.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{n.detail}</p>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* Philosophy */}
        <Section id="philosophy" label="Project Philosophy" title="Fewer projects. Built to last.">
          <div className="grid gap-16 md:grid-cols-[1fr_1.2fr]">
            <div className="text-sm uppercase tracking-[0.18em] text-subtle">
              A note on approach
            </div>
            <div className="space-y-6 text-lg leading-[1.7] text-muted-foreground">
              <p>
                Most learning portfolios are a long list of small tutorials. I prefer the
                opposite: a small number of well-documented, engineering-grade resources
                that behave more like open-source products than assignments.
              </p>
              <p>
                An architecture document. A style guide. A changelog. A roadmap. A
                contributor path. These aren't ornamental — they are what turn a
                repository into something other people can actually rely on.
              </p>
              <p className="text-foreground">
                Teaching, when done rigorously, is the highest form of understanding.
              </p>
            </div>
          </div>
        </Section>

        <Divider />

        {/* Work */}
        <Section id="work" label="Featured Work" title="Selected projects.">
          <div className="grid gap-px overflow-hidden bg-border sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </Section>

        <Divider />

        {/* Open Source */}
        <Section id="opensource" label="Open Source" title="Built in public.">
          <div className="grid gap-16 md:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6 text-lg leading-[1.7] text-muted-foreground">
              <p>
                Every module, dataset, and query I publish lives on GitHub under
                <a
                  href="https://github.com/theammarngp-makes"
                  className="mx-1 text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
                  target="_blank" rel="noreferrer"
                >
                  @theammarngp-makes
                </a>
                — with issues, discussions, contribution guides, and a public roadmap.
              </p>
              <a
                href="https://github.com/theammarngp-makes"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent"
              >
                Visit GitHub profile <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {[
                { name: "SQL-Engineering-Handbook", note: "9 of 21 modules complete" },
                { name: "NagpurLens", note: "Active — data engineering phase" },
                { name: "olist-sales-analysis", note: "Stable" },
                { name: "ecommerce-rfm-customer-segmentation", note: "Stable" },
                { name: "E-commerce-cohort-retention-analysis", note: "Stable" },
              ].map((r) => (
                <li key={r.name} className="flex items-baseline justify-between gap-6 py-4">
                  <span className="font-mono text-sm">{r.name}</span>
                  <span className="text-xs text-muted-foreground">{r.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Divider />

        {/* Writing */}
        <Section id="writing" label="Writing" title="Documentation as design.">
          <ul className="divide-y divide-border border-y border-border">
            {writing.map((w) => (
              <li key={w.title}>
                <a
                  href={w.href}
                  target="_blank" rel="noreferrer"
                  className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-8 py-6 transition-colors hover:text-accent"
                >
                  <span className="w-32 text-xs uppercase tracking-[0.18em] text-subtle">{w.kind}</span>
                  <span className="font-serif text-2xl tracking-tight">{w.title}</span>
                  <ArrowUpRight className="h-4 w-4 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Divider />

        {/* Skills */}
        <Section id="skills" label="Skills" title="Tools I reach for.">
          <div className="grid gap-px overflow-hidden bg-border md:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group} className="bg-background p-8">
                <p className="mb-6 text-xs uppercase tracking-[0.18em] text-subtle">{s.group}</p>
                <ul className="space-y-2 font-serif text-xl">
                  {s.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* Journey */}
        <Section id="journey" label="Engineering Journey" title="A deliberate path.">
          <ol className="relative">
            {journey.map((j, idx) => (
              <li key={j.year} className="grid grid-cols-[80px_1fr] gap-8 border-t border-border py-8 last:border-b">
                <span className="font-mono text-sm text-subtle">{j.year}</span>
                <div>
                  <h3 className="font-serif text-2xl tracking-tight">{j.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{j.detail}</p>
                </div>
                <span className="sr-only">{idx}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Divider />

        {/* Contact */}
        <section id="contact" className="py-32 lg:py-48">
          <p className="mb-10 text-xs uppercase tracking-[0.2em] text-subtle">Contact</p>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.02em]">
            Available for thoughtful <br />
            <span className="italic text-accent">analytics engineering</span> work.
          </h2>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            <ContactLink href="mailto:theammarngp@gmail.com" icon={<Mail className="h-4 w-4" />}>theammarngp@gmail.com</ContactLink>
            <ContactLink href="https://github.com/theammarngp-makes" icon={<Github className="h-4 w-4" />}>GitHub</ContactLink>
            <ContactLink href="https://www.linkedin.com/in/mohammad-ammar-ngp/" icon={<Linkedin className="h-4 w-4" />}>LinkedIn</ContactLink>
            <ContactLink href="https://twitter.com/theammarngp" icon={<Twitter className="h-4 w-4" />}>Twitter</ContactLink>
            <ContactLink href="https://instagram.com/ammar__syd" icon={<Instagram className="h-4 w-4" />}>Instagram</ContactLink>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-4 px-8 py-10 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Mohammad Ammar</span>
          <span className="font-mono">Designed & built with care.</span>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id, label, title, children,
}: { id: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-28 lg:py-40">
      <header className="mb-16 grid gap-4 md:grid-cols-[200px_1fr] md:gap-16">
        <p className="text-xs uppercase tracking-[0.2em] text-subtle">{label}</p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] tracking-[-0.02em]">
          {title}
        </h2>
      </header>
      {children}
    </section>
  );
}

function Divider() {
  return <div className="h-px w-full bg-border" />;
}

function ProjectCard({
  logo, category, title, description, tags, github, href,
}: (typeof projects)[number]) {
  return (
    <article className="group flex flex-col bg-background p-8 transition-colors hover:bg-muted">
      <div className="mb-8 flex h-16 w-16 items-center justify-center border border-border font-mono text-sm tracking-tight">
        {logo}
      </div>
      <p className="text-xs uppercase tracking-[0.18em] text-subtle">{category}</p>
      <h3 className="mt-2 font-serif text-2xl tracking-tight">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-xs text-subtle">
        {tags.map((t) => <li key={t}>{t}</li>)}
      </ul>
      <div className="mt-8 flex items-center gap-6 pt-6 border-t border-border text-xs">
        <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-accent">
          <Github className="h-3.5 w-3.5" /> GitHub
        </a>
        <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-accent">
          Learn more <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}

function ContactLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank" rel="noreferrer"
      className="group inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent"
    >
      <span className="text-subtle group-hover:text-accent">{icon}</span>
      <span className="underline decoration-border underline-offset-4 transition-colors group-hover:decoration-accent">{children}</span>
    </a>
  );
}
