import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Code2,
  TestTube2,
  Wrench,
  GraduationCap,
  Award,
  Briefcase,
  Menu,
  ChevronDown,
  Terminal,
  Layers,
  Globe,
  FileCode,
  CheckCircle2,
  Cpu,
  Database,
  Download,
  PlayCircle,
  ShieldCheck,
  Brain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import heroImage from "@/assets/hero.webp";
import focusShiftPoster from "@/assets/poster.webp";
import focusShiftDemo from "@/assets/demo.mp4";
import ecommerceImage from "@/assets/freshcart.webp";
import freshCartDemo from "@/assets/freshcart.mp4";
import travelImage from "@/assets/project-travel.webp";

const CV_URL = "/JudiElkordy_Resume.pdf";
const LINKEDIN_URL = "https://www.linkedin.com/in/judi-elkordy-a26357281/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Judi Elkordy | Software Engineer & QA Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Judi Elkordy, a Computer Science & AI graduate and software engineer focused on web development, test automation, and developer productivity tools.",
      },
      { property: "og:title", content: "Judi Elkordy | Software Engineer & QA Specialist" },
      {
        property: "og:description",
        content:
          "Portfolio of Judi Elkordy, a Computer Science & AI graduate and software engineer focused on web development, test automation, and developer productivity tools.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Judi Elkordy | Software Engineer & QA Specialist" },
      {
        name: "twitter:description",
        content:
          "Portfolio of Judi Elkordy, a Computer Science & AI graduate and software engineer focused on web development, test automation, and developer productivity tools.",
      },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  {
    category: "Languages",
    icon: <FileCode className="h-5 w-5" />,
    items: ["Python", "C", "C++", "Java", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Technologies",
    icon: <Layers className="h-5 w-5" />,
    items: ["React", "Node.js", "Spring Boot", "Tailwind CSS"],
  },
  {
    category: "AI & LLM Technologies",
    icon: <Brain className="h-5 w-5" />,
    items: [
      "Large Language Models (LLMs)",
      "Prompt Engineering",
      "LLM API Integration",
      "AI-Assisted Development",
    ],
  },
  {
    category: "Software Security",
    icon: <ShieldCheck className="h-5 w-5" />,
    items: [
      "Secure Coding Practices",
      "Authentication & Authorization",
      "Data Privacy",
      "API Security",
      "OWASP Principles",
    ],
  },
  {
    category: "Testing & QA",
    icon: <TestTube2 className="h-5 w-5" />,
    items: [
      "JUnit",
      "Selenium",
      "Robot Framework",
      "Postman",
      "API Testing",
      "Test Automation",
      "Unit Testing",
      "TDD",
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <Wrench className="h-5 w-5" />,
    items: ["Git", "GitHub", "Jenkins", "Docker", "Podman", "OpenShift", "JIRA", "SonarQube"],
  },
  {
    category: "Developer Tools",
    icon: <Terminal className="h-5 w-5" />,
    items: ["VS Code", "Visual Studio", "IntelliJ IDEA", "Eclipse", "PyCharm"],
  },
];

const projects = [
  {
    title: "FocusShift",
    subtitle: "VS Code Productivity Extension",
    description:
      "A VS Code extension that monitors developer inactivity and workspace focus changes in real time. It automatically restores context after interruptions, reopens the last edited file, restores cursor position, and provides configurable ambient audio feedback — all using local storage with privacy-first design.",
    image: focusShiftPoster,
    imageFit: "object-contain bg-[#0b1e3d]",
    video: focusShiftDemo,
    tech: ["TypeScript", "VS Code Extension API", "Node.js", "Event-Driven Architecture"],
    links: {
      github: "https://github.com/Mariammazen147/FocusShift",
      live: null,
    },
    highlights: [
      "Real-time inactivity & focus tracking",
      "Automatic context restoration",
      "Privacy-first local storage",
      "Event-driven architecture",
    ],
  },
  {
    title: "E-Commerce Web Application",
    subtitle: "React & REST API Shopping Platform",
    description:
      "A responsive e-commerce application built with React and Tailwind CSS. It features product listing, dynamic rendering, cart management, and REST API integration using Axios and modern React Hooks.",
    image: ecommerceImage,
    imageFit: "object-cover",
    video: freshCartDemo,
    tech: ["React.js", "JavaScript ES6+", "Tailwind CSS", "REST APIs", "Axios", "React Hooks"],
    links: {
      github: "https://github.com/Judikordy/ecommerce_react",
      live: null,
    },
    highlights: [
      "Responsive product catalog",
      "Cart management & state handling",
      "REST API integration",
      "Reusable component architecture",
    ],
  },
  {
    title: "Travel Booking System",
    subtitle: "Software Architecture & System Design",
    description:
      "A scalable travel booking system designed with service-oriented architecture. Includes multilingual notifications, third-party API integration, and UML-modeled backend design following SOLID principles.",
    image: travelImage,
    imageFit: "object-cover",
    video: null as string | null,
    tech: ["Java", "UML", "SOA", "REST APIs", "System Design"],
    links: {
      github: null,
      live: null,
    },
    highlights: [
      "Service-oriented architecture",
      "Multilingual notification module",
      "Third-party API integration",
      "SOLID & UML system design",
    ],
  },
];

const certifications = [
  "React Development Course — Route Academy (2025)",
  "RedHat: DevOps Tools Exposure: Jenkins, Docker, Podman, OpenShift",
  "Red Hat Linux Training Course",
  "Java EE Course",
  "ISTQB® Foundation Level Certification in Software Testing — ESTB (2025)",
  "AI Track — Tech Nights Program, IEEE Suez Canal University Student Branch (Ramadan 2026)",
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="text-lg font-bold tracking-tight text-foreground">
            Judi<span className="text-accent">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <a href={CV_URL} download>
                <Download className="mr-2 h-4 w-4" />
                CV
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="https://github.com/Judikordy" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild size="sm">
              <a href="mailto:judi.kordy05@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Hire Me
              </a>
            </Button>
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full">
              <div className="flex flex-col gap-4 pt-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-accent"
                  >
                    {item.label}
                  </a>
                ))}
                <Separator />
                <div className="flex gap-3">
                  <Button asChild variant="outline" className="flex-1">
                    <a
                      href="https://github.com/Judikordy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild className="flex-1">
                    <a href="mailto:judi.kordy05@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Hire Me
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-medium text-accent-foreground">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
                  </span>
                  Open to software engineering roles
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Hi, I'm <span className="text-accent">Judi Elkordy</span>
                </h1>
                <p className="text-lg text-muted-foreground sm:text-xl">
                  Computer Science & AI graduate from Cairo University. I build web applications,
                  automate tests, and craft developer tools that make engineering teams more
                  productive.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <a href="#projects">View Projects</a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a
                      href="https://github.com/Judikordy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href={CV_URL} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </a>
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    New Capital
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="h-4 w-4" />
                    +201014914750
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="h-4 w-4" />
                    judi.kordy05@gmail.com
                  </span>
                </div>
              </div>
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-full bg-accent/10 blur-3xl"
                  aria-hidden="true"
                />
                <img
                  src={heroImage}
                  alt="Judi Elkordy - Software engineer working at a desk with code on the laptop screen"
                  width={1200}
                  height={800}
                  className="relative rounded-2xl border border-border/50 shadow-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center text-sm text-muted-foreground transition-colors hover:text-foreground lg:flex"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  About Me
                </h2>
                <p className="text-lg text-muted-foreground">
                  I graduated with a B.Sc. in Computer Science and Artificial Intelligence from Cairo
                  University in June 2026. My journey in software engineering
                  spans building full-stack web applications, designing robust test automation
                  suites, and creating developer productivity tools like VS Code extensions.
                </p>
                <p className="text-lg text-muted-foreground">
                  I enjoy teaching and mentoring — I spent nearly a year as a Web Development
                  Instructor at Cairo University, helping students master HTML, CSS, JavaScript, and
                  responsive design. I'm also certified in ISTQB® Foundation Level Software Testing
                  and have hands-on DevOps exposure through RedHat tools.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Software Engineering",
                    "Web Development",
                    "QA & Testing",
                    "DevOps",
                    "Developer Tools",
                    "Mentoring",
                  ].map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <GraduationCap className="h-5 w-5 text-accent" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-foreground">Cairo University</p>
                    <p className="text-sm text-muted-foreground">
                      Faculty of Computers & Artificial Intelligence
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">B.Sc. in Computer Science & AI</p>
                    <p className="text-sm text-muted-foreground">Graduated: June 2026</p>
                  </div>
                  <div className="inline-flex items-center rounded-md bg-accent/10 px-2.5 py-1 text-sm font-medium text-accent-foreground">
                    GPA: 3.09 — Very Good with Honours
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Technical Skills
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                A versatile toolkit built across development, testing, and DevOps.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((group) => (
                <Card key={group.category} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <span className="text-accent">{group.icon}</span>
                      {group.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Badge key={item} variant="outline" className="font-normal">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Featured Projects
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Real-world projects that demonstrate my engineering and problem-solving abilities.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {projects.map((project) => (
                <Card
                  key={project.title}
                  className="group flex flex-col overflow-hidden border-border/50"
                >
                  <div className="aspect-4/3 overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      width={800}
                      height={600}
                      className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${project.imageFit}`}
                      loading="lazy"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <p className="text-sm font-medium text-accent">{project.subtitle}</p>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col gap-4">
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {project.video && (
                      <video
                        src={project.video}
                        controls
                        preload="metadata"
                        className="w-full rounded-md border border-border/50 bg-black"
                      >
                        Your browser does not support the video tag.
                      </video>
                    )}
                    <div className="mt-auto flex flex-wrap gap-2 pt-2">
                      {project.links.github && (
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.links.live && (
                        <Button asChild size="sm" className="flex-1">
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live
                          </a>
                        </Button>
                      )}
                      {project.video && (
                        <Button asChild variant="secondary" size="sm" className="flex-1">
                          <a href={project.video} target="_blank" rel="noopener noreferrer">
                            <PlayCircle className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {!project.links.github && !project.links.live && !project.video && (
                        <Button variant="outline" size="sm" className="flex-1" disabled>
                          <Code2 className="mr-2 h-4 w-4" />
                          Source available on request
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Experience
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Teaching and mentoring the next generation of developers.
              </p>
            </div>
            <Card className="mx-auto max-w-3xl">
              <CardHeader>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1">
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Briefcase className="h-5 w-5 text-accent" />
                      Web Development Instructor
                    </CardTitle>
                    <p className="font-medium text-foreground">Cairo University</p>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    Oct 2023 – Aug 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    Delivered hands-on training in HTML, CSS, JavaScript, jQuery, and Bootstrap.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    Mentored students on responsive design, performance optimization, and debugging
                    practices.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    Provided individual code reviews and technical guidance for student projects.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Certifications & Courses
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Continuous learning across development, testing, and operations.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <Card key={cert} className="h-full">
                  <CardContent className="flex h-full items-start gap-3 p-5">
                    <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <p className="text-sm font-medium text-foreground">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Let's work together
                </h2>
                <p className="text-lg text-muted-foreground">
                  I'm currently looking for software engineering, QA, or developer tooling
                  opportunities. Whether you have a role in mind or just want to connect, I'd love
                  to hear from you.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:judi.kordy05@gmail.com"
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent/50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">judi.kordy05@gmail.com</p>
                    </div>
                  </a>
                  <a
                    href="tel:+201014914750"
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent/50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium text-foreground">+201014914750</p>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/judi-elkordy-a26357281/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent/50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="font-medium text-foreground">Judi Elkordy</p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/Judikordy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent/50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <p className="font-medium text-foreground">Judikordy</p>
                    </div>
                  </a>
                </div>
              </div>
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle>Quick facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Globe className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">New Capital, Egypt</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium text-foreground">Education</p>
                      <p className="text-sm text-muted-foreground">
                        Cairo University, B.Sc. CS & AI (June 2026)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Cpu className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium text-foreground">Focus Areas</p>
                      <p className="text-sm text-muted-foreground">
                        Web Development, Test Automation, Developer Tools
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium text-foreground">Also exploring</p>
                      <p className="text-sm text-muted-foreground">
                        DevOps, System Design, Backend Architecture
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Judi Elkordy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Judikordy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/judi-elkordy-a26357281/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:judi.kordy05@gmail.com"
              className="text-muted-foreground hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
