"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiCode,
  FiExternalLink,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import SectionWrapper from "../SectionWrapper";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Project {
  title: string;
  subtitle?: string;
  role?: string;
  period?: string;
  description: string;
  features: string[];
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  isCompanyProject?: boolean;
}

// ─── Label colour map for PCAR format ─────────────────────────────────────────
const LABEL_STYLES: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  Problem: {
    bg: "bg-red-500/15",
    text: "text-red-400",
    border: "border-red-500/40",
  },
  Challenges: {
    bg: "bg-amber-500/15",
    text: "text-amber-400",
    border: "border-amber-500/40",
  },
  Actions: {
    bg: "bg-blue-500/15",
    text: "text-blue-400",
    border: "border-blue-500/40",
  },
  Result: {
    bg: "bg-emerald-500/15",
    text: "text-emerald-400",
    border: "border-emerald-500/40",
  },
  Learnings: {
    bg: "bg-cyan-500/15",
    text: "text-cyan-300",
    border: "border-cyan-500/40",
  },
};

// ─── Single project card ───────────────────────────────────────────────────────
const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [techExpanded, setTechExpanded] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const MAX_TECHS = 5;
  const showMore = project.technologies.length > MAX_TECHS;
  const visibleTechs = techExpanded
    ? project.technologies
    : project.technologies.slice(0, MAX_TECHS);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      className={`group relative flex flex-col rounded-2xl border backdrop-blur-sm hover:-translate-y-1 transition-all duration-500 overflow-hidden ${project.featured
        ? "border-white/[0.14] bg-gradient-to-br from-cyan-500/[0.04] via-white/[0.05] to-transparent hover:border-cyan-500/40 hover:from-cyan-500/[0.07] hover:shadow-xl hover:shadow-cyan-500/15"
        : "border-white/[0.10] bg-white/[0.03] hover:border-white/[0.20] hover:bg-white/[0.06] hover:shadow-lg hover:shadow-white/5"
        }`}
    >
      {/* Subtle top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <div className="p-5 pb-4 border-b border-white/6 group-hover:border-cyan-500/15 transition-colors duration-500">
        {/* Badges row */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/35">
              ⭐ Featured
            </span>
          )}
          {project.isCompanyProject && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm font-bold bg-yellow-500/15 text-yellow-400 border border-yellow-500/35">
              🏢 Employee Project
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 leading-snug break-words mb-1">
          {project.title}
        </h3>

        {/* Subtitle */}
        {project.subtitle && (
          <p className="text-sm font-medium text-cyan-400/80 mb-2 break-words">
            {project.subtitle}
          </p>
        )}

        {/* Role + Period */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {project.role && (
            <span className="text-sm text-gray-300 font-medium">
              {project.role}
            </span>
          )}
          {project.period && (
            <span className="flex items-center gap-1 text-sm text-gray-400">
              <FiCalendar className="flex-shrink-0 text-[14px]" />
              {project.period}
            </span>
          )}
        </div>
      </div>

      {/* ── BODY ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-grow p-5 gap-4">
        {/* Description */}
        <div className="space-y-2">
          {project.isCompanyProject && project.role && (
            <div className="flex items-center gap-2">
              <span className="flex-shrink-0 px-2 py-0.5 rounded text-sm font-bold uppercase tracking-wide border bg-purple-500/15 text-purple-400 border-purple-500/40">
                Role
              </span>
              <span className="text-sm text-purple-300/90 font-medium">
                {project.role}
              </span>
            </div>
          )}
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* View Details toggle */}
        <button
          onClick={() => setDetailsOpen((prev) => !prev)}
          className="flex items-center gap-1.5 text-sm font-semibold text-cyan-400/80 hover:text-cyan-300 transition-colors duration-200 w-fit"
        >
          {detailsOpen ? (
            <>
              <FiChevronUp className="text-sm" /> Hide Details
            </>
          ) : (
            <>
              <FiChevronDown className="text-sm" /> View Details
            </>
          )}
        </button>

        {/* PCAR Features — collapsible */}
        <AnimatePresence initial={false}>
          {detailsOpen && (
            <motion.div
              key="pcarl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-1">
                <h4 className="flex items-center gap-2 text-sm font-bold text-white mb-2.5">
                  <span className="flex-shrink-0 w-1 h-3 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500" />
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => {
                    const colonIdx = feature.indexOf(": ");
                    const rawLabel =
                      colonIdx !== -1 ? feature.slice(0, colonIdx).trim() : null;
                    const body =
                      colonIdx !== -1 ? feature.slice(colonIdx + 2).trim() : feature;
                    const style = rawLabel ? LABEL_STYLES[rawLabel] : null;

                    return (
                      <li
                        key={i}
                        className="grid grid-cols-[116px_minmax(0,1fr)] sm:grid-cols-[128px_minmax(0,1fr)] items-start gap-x-2 text-sm text-gray-400 leading-relaxed"
                      >
                        {style && rawLabel ? (
                          <>
                            <span
                              className={`mt-0.5 w-full whitespace-nowrap text-center px-1.5 py-0.5 rounded text-[11px] sm:text-sm font-bold uppercase tracking-normal leading-tight border ${style.bg} ${style.text} ${style.border}`}
                            >
                              {rawLabel}
                            </span>
                            <span className="break-words">{body}</span>
                          </>
                        ) : (
                          <>
                            <span aria-hidden className="block" />
                            <span className="break-words">{feature}</span>
                          </>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech Stack */}
        <div>
          <h4 className="flex items-center gap-2 text-sm font-bold text-white mb-2">
            <span className="flex-shrink-0 w-1 h-3 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500" />
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            <AnimatePresence initial={false}>
              {visibleTechs.map((tech) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  className="px-2.5 py-1 rounded-md text-sm font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-400/40 transition-all duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </AnimatePresence>
            {showMore && (
              <button
                onClick={() => setTechExpanded(!techExpanded)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-md text-sm font-semibold text-gray-400 hover:text-cyan-400 border border-dashed border-gray-700 hover:border-cyan-500/50 transition-all duration-200"
              >
                {techExpanded ? (
                  <>
                    <FiChevronUp className="text-sm" /> Less
                  </>
                ) : (
                  <>
                    <FiChevronDown className="text-sm" /> +
                    {project.technologies.length - MAX_TECHS} more
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* ── LINKS ──────────────────────────────────────────────────────── */}
        {(project.github || project.live) && (
          <div className="flex flex-wrap gap-4 pt-3 border-t border-white/5 group-hover:border-cyan-500/10 transition-colors duration-500 mt-auto">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <FiGithub className="text-base" />
                Source Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <FiExternalLink className="text-sm" />
                {project.isCompanyProject ? "View Platform" : "Live Demo"}
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
const Projects = () => {
  const projects: Project[] = [
    {
      title: "FarmIQ",
      subtitle: "AI-Powered Smart Farming Platform",
      description:
        "Full-stack smart farming project combining machine learning features with an equipment rental platform.",
      features: [
        "Engineered 3 AI modules for crop recommendation, disease detection, and weather alerts for 100+ farmers, achieving 85% accuracy in crop prediction and 90% accuracy in disease classification.",
        "Developed an equipment rental module with 50+ listings that reduced farmer operating costs by 30% and boosted yield quality by 20%.",
      ],
      technologies: ["Python", "Machine Learning", "Full Stack"],
      featured: true,
    },
    {
      title: "WhatsApp Chat Analyzer",
      subtitle: "NLP Analytics Tool",
      description:
        "An interactive Streamlit dashboard for analyzing WhatsApp chat data with natural language processing and visual reports.",
      features: [
        "Processed 10,000+ messages using Pandas and natural language processing techniques, achieving 95% accuracy and cutting manual analysis time by 60% through an interactive Streamlit dashboard.",
        "Produced 15+ visual reports on trends and user engagement with Matplotlib and Seaborn, enhancing data interpretability by 40%.",
      ],
      technologies: ["Python", "Natural Language Processing", "Pandas", "Streamlit", "Matplotlib", "Seaborn"],
      featured: true,
    },
    {
      title: "WhatsApp Chat Analyzer",
      subtitle: "Manual QA Testing",
      description:
        "Manual quality assurance testing of the WhatsApp Chat Analyzer Streamlit dashboard, including functional, regression, and UAT coverage.",
      features: [
        "Designed and executed 40+ manual test cases for functional, regression, and UAT testing, validating NLP output accuracy across 10,000+ messages with 0 critical defects post-release.",
        "Tracked and reported 15+ bugs via JIRA covering edge cases in message parsing and visual report generation, reducing data display errors by 30% and improving dashboard reliability.",
      ],
      technologies: ["Manual Testing", "JIRA", "Test Case Design", "Functional Testing", "Regression Testing", "UAT"],
      featured: true,
    },
    {
      title: "AI for Sustainability",
      subtitle: "Resource Optimization System",
      description:
        "A machine learning and predictive modeling project focused on environmental resource optimization.",
      features: [
        "Constructed predictive models on 1,000+ data points, cutting resource waste by 25%, raising operational efficiency by 15%, and solving 5+ real-world environmental challenges.",
      ],
      technologies: ["Machine Learning", "Predictive Modeling"],
      featured: true,
    },
  ];

  return (
    <SectionWrapper
      id="projects"
      className="bg-[#0a0f1a] relative overflow-hidden"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Ambient glow orbs — boosted */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-cyan-500/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      {/* Centered heading spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section Heading ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-cyan-500 font-mono text-sm tracking-[0.35em] uppercase mb-3">
            // featured.projects
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] mb-4">
            <span className="text-white">Things I've</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              built.
            </span>
          </h2>
          <p className="text-gray-400 font-body text-base max-w-lg mx-auto">
            Selected projects and work described in my resume.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/60" />
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/60" />
          </div>
        </motion.div>

        {/* ── Grid ─────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* ── GitHub profile link ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          className="text-center mt-14 md:mt-20"
        >
          <motion.a
            href="https://github.com/charithkatakam"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 rounded-xl" />
            <FiCode className="text-xl relative z-10" />
            <span className="relative z-10">View GitHub Profile</span>
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
