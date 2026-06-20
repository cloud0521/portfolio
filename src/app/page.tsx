import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  Mail,
  Send,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import { assetPath } from "@/app/lib/asset-path";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["JavaScript", "Google Apps Script", "Python", "PHP", "HTML5", "CSS3"],
  },
  {
    icon: Workflow,
    title: "Frameworks & APIs",
    skills: ["React.js", "Node.js", "REST APIs", "API integrations", "JIRA"],
  },
  {
    icon: Database,
    title: "Databases & Cloud",
    skills: ["MySQL", "SQLite", "Data verification", "Backend troubleshooting"],
  },
  {
    icon: ShieldCheck,
    title: "Data & Analytics",
    skills: ["Power BI", "Revenue QA", "Financial reporting", "Advanced Excel", "Pivot tables"],
  },
];

const timeline = [
  "Developed JavaScript and Google Apps Script automations for repetitive extraction, cleanup, and reporting tasks.",
  "Audited large digital financial datasets with MySQL queries and spreadsheet verification workflows.",
  "Worked with affiliate network and internal operations data to keep revenue reporting accurate.",
  "Tracked backend data issues through JIRA and helped translate operations problems into technical fixes.",
];

const projects = [
  {
    title: "Biaknabato Connect Community Portal",
    summary:
      "A Next.js barangay website concept for Biaknabato, featuring resident services, local announcements, emergency guidance, office contacts, and a simple inquiry flow.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://cloud0521.github.io/biaknabato-connect/",
  },
  {
    title: "Prime Talent Remote Staffing Website",
    summary:
      "A live business website for a remote staffing service, featuring service sections, pricing plans, client inquiry flow, job application flow, account portal screens, and contact details.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    url: "https://cloud0521.github.io/prime-talent/",
  },
  {
    title: "Automated Currency & Revenue Normalizer",
    summary:
      "A JavaScript and Google Apps Script workflow that normalizes spreadsheet layouts, fetches exchange-rate data, and prepares revenue figures for review.",
    tags: ["JavaScript", "Apps Script", "External API"],
    url: "",
  },
  {
    title: "Affiliate Reporting QA Workflow",
    summary:
      "A set of repeatable checks for partner revenue data, built around discrepancy review, reporting validation, and cleaner team handoffs.",
    tags: ["MySQL", "Power BI", "Revenue QA", "Excel"],
    url: "",
  },
];

const credentials = [
  "Bachelor of Science in Information Technology",
  "Programmer of the Year Award",
  "Best Thesis Award - Hardware Category",
  "Civil Service Second Level Eligibility",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          <a className="rounded-md p-2 text-2xl font-bold text-indigo-600 transition-colors hover:bg-indigo-50" href="#hero">
            Cloyd D. Argando
          </a>
          <nav className="flex flex-wrap items-center gap-1 text-sm font-medium sm:text-base">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="rounded-md px-3 py-2 text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        id="hero"
        className="animate-shimmer relative flex min-h-[calc(100vh-76px)] items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-600 px-5 py-20 text-white"
      >
        <div className="animate-hero-glow absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.12)_0,rgba(255,255,255,0)_42%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.18),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div className="animate-hero-media mx-auto w-full max-w-[260px] md:max-w-[320px]">
            <Image
              src={assetPath("/cloyd_argando.jpg")}
              alt="Cloyd D. Argando"
              width={454}
              height={396}
              priority
              sizes="(min-width: 768px) 320px, 260px"
              className="aspect-square w-full rounded-full border-4 border-white object-cover shadow-2xl"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="animate-rise mb-4 inline-flex items-center gap-2 rounded-md bg-white/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/25">
              <BadgeCheck className="animate-icon size-4" aria-hidden="true" />
              Junior Programmer / Data Automation Specialist
            </p>
            <h1 className="animate-rise text-4xl font-extrabold leading-tight sm:text-5xl" style={{ animationDelay: "120ms" }}>
              Hi, I&apos;m Cloyd D. Argando,
            </h1>
            <p className="animate-rise mt-4 max-w-2xl text-lg leading-8 text-indigo-50" style={{ animationDelay: "220ms" }}>
              an IT professional focused on data specialization, quality assurance, and practical programming
              solutions for real operations work.
            </p>
            <div className="animate-rise mt-8 flex flex-wrap justify-center gap-3 md:justify-start" style={{ animationDelay: "320ms" }}>
              <a
                className="animate-button inline-flex h-12 items-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-indigo-700 shadow-lg hover:bg-indigo-50"
                href="#contact"
              >
                <Mail className="animate-icon size-4" aria-hidden="true" />
                Get in Touch
              </a>
              <a
                className="animate-button inline-flex h-12 items-center gap-2 rounded-md border border-white/35 px-5 text-sm font-semibold text-white hover:bg-white/10"
                href={assetPath("/cloyd-argando-resume.pdf")}
              >
                <Download className="animate-icon size-4" aria-hidden="true" />
                Resume
              </a>
              <a
                className="animate-button inline-flex h-12 items-center justify-center rounded-md border border-white/35 px-4 text-white hover:bg-white/10"
                href="https://ph.linkedin.com/in/cloyd-argando-44480a346"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <BriefcaseBusiness className="animate-icon size-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="reveal-section bg-gray-50 px-5 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          <p className="mt-8 text-lg leading-8 text-gray-600">
            Greetings! I&apos;m Cloyd D. Argando, an IT professional with seven years of experience at Joinpiggy Inc.,
            specializing in data quality, revenue checking, and operations support.
          </p>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            I&apos;m transitioning deeper into programmer and developer work, bringing hands-on experience with
            JavaScript automation, Google Apps Script, MySQL, API integrations, Power BI, and spreadsheet-heavy
            financial data.
          </p>
        </div>
      </section>

      <section id="skills" className="reveal-section bg-indigo-50 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold text-gray-800">My Skills</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map(({ icon: Icon, title, skills }, index) => (
              <article
                key={title}
                className="animate-card animate-soft-rise rounded-md bg-white p-6 text-center shadow-lg"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <Icon className="animate-icon mx-auto size-8 text-indigo-600" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-indigo-600">{title}</h3>
                <ul className="mt-5 space-y-3 text-gray-700">
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal-section bg-white px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Experience</h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Offers Analyst & Revenue QA at Joinpiggy Inc.
            </p>
            <p className="mt-2 font-semibold text-indigo-600">May 2019 - May 2026</p>
          </div>
          <div className="animate-card rounded-md border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <ul className="space-y-4 text-gray-700">
              {timeline.map((item, index) => (
                <li key={item} className="timeline-item flex gap-3" style={{ animationDelay: `${index * 100}ms` }}>
                  <BadgeCheck className="animate-icon mt-1 size-5 shrink-0 text-indigo-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="reveal-section bg-gray-50 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project, projectIndex) => (
              <article
                key={project.title}
                className="animate-card animate-soft-rise rounded-md bg-white p-6 shadow-lg"
                style={{ animationDelay: `${projectIndex * 120}ms` }}
              >
                <h3 className="text-2xl font-semibold text-indigo-600">{project.title}</h3>
                <p className="mt-4 leading-7 text-gray-600">{project.summary}</p>
                {project.url ? (
                  <a
                    className="animate-button mt-5 inline-flex h-10 items-center gap-2 rounded-md border border-indigo-200 px-4 text-sm font-semibold text-indigo-600 hover:bg-indigo-50"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                    <ArrowUpRight className="animate-icon size-4" aria-hidden="true" />
                  </a>
                ) : null}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className="tag-pop rounded-md bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700"
                      style={{ animationDelay: `${projectIndex * 120 + tagIndex * 70}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal-section bg-white px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold text-gray-800">Credentials</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {credentials.map((credential, index) => (
              <div
                key={credential}
                className="animate-card animate-soft-rise flex items-center gap-3 rounded-md border border-gray-200 bg-gray-50 p-4 text-gray-700"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <BadgeCheck className="animate-icon size-5 shrink-0 text-indigo-600" aria-hidden="true" />
                <span>{credential}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="reveal-section bg-indigo-600 px-5 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-4xl font-bold">Get in Touch</h2>
            <p className="mt-5 text-lg leading-8 text-indigo-50">
              I&apos;m open to programmer, developer, data automation, and QA-focused opportunities.
            </p>
            <div className="mt-8 space-y-3">
              <a className="block text-indigo-50 transition hover:text-white" href="mailto:cloudd000argando28@gmail.com">
                cloudd000argando28@gmail.com
              </a>
              <a className="block text-indigo-50 transition hover:text-white" href="https://ph.linkedin.com/in/cloyd-argando-44480a346" target="_blank" rel="noreferrer">
                ph.linkedin.com/in/cloyd-argando-44480a346
              </a>
            </div>
          </div>

          <form action="mailto:cloudd000argando28@gmail.com" className="animate-card rounded-md bg-white p-6 text-gray-800 shadow-2xl">
            <label className="block text-sm font-semibold text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="mt-2 h-12 w-full rounded-md border border-gray-300 px-4 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
            />

            <label className="mt-5 block text-sm font-semibold text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-2 h-12 w-full rounded-md border border-gray-300 px-4 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
            />

            <label className="mt-5 block text-sm font-semibold text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-2 w-full resize-none rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
            />

            <button
              className="animate-button mt-6 inline-flex h-12 items-center gap-2 rounded-md bg-indigo-600 px-5 text-sm font-semibold text-white hover:bg-indigo-700"
              type="submit"
            >
              <Send className="animate-icon size-4" aria-hidden="true" />
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-800 px-5 py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <p className="text-gray-300">(c) 2026 Cloyd D. Argando. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="text-gray-400 transition-colors hover:text-white" href="https://ph.linkedin.com/in/cloyd-argando-44480a346" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
