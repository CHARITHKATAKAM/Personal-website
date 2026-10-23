"use client";

import { motion } from "framer-motion";
import {
  FiAward,
  FiCode,
  FiExternalLink,
  FiTrendingUp,
} from "react-icons/fi";
import SectionWrapper from "../SectionWrapper";

const competitions = [
  {
    title: "Star Performer Award",
    achievement: "Oasis Infobyte (AICTE)",
    description:
      "Award received during the Web Development Internship in January 2026.",
    icon: FiAward,
    accent: "indigo",
  },
  {
    title: "Bharatiya Antariksh Hackathon 2025",
    achievement: "Idea Submission Phase",
    description: "ISRO",
    icon: FiCode,
    accent: "cyan",
  },
  {
    title: "Parul University Code Hackathon 3.0",
    achievement: "January 2026",
    description: "Parul University and Vadodara Municipal Corporation",
    icon: FiAward,
    accent: "indigo",
  },
  {
    title: "Hackathon Participant",
    achievement: "Participant",
    description: "Augustcode Solutions and Parul University",
    icon: FiCode,
    accent: "cyan",
  },
];

const codingProfiles = [
  {
    platform: "GitHub",
    link: "https://github.com/charithkatakam",
    color: "text-cyan-400",
  },
  {
    platform: "LeetCode",
    link: "https://leetcode.com/u/Charith_katakam/",
    color: "text-orange-400",
  },
];

const Achievements = () => {
  return (
    <SectionWrapper
      id="achievements"
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
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-indigo-500/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-cyan-500/12 rounded-full blur-3xl pointer-events-none" />
      {/* Centered heading spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-500 font-mono text-sm tracking-[0.35em] uppercase mb-3">
            // achievements
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] mb-4">
            <span className="text-white">Awards &</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Hackathons
            </span>
          </h2>
          <p className="text-gray-400 font-body text-base max-w-lg mx-auto">
            Awards, hackathons, and coding profiles listed in my resume.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/60" />
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/60" />
          </div>
        </motion.div>

        {/* ── Awards & Hackathons ──────────────────────────────────── */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="p-2 rounded-lg bg-white/5 border border-white/8">
              <FiTrendingUp className="text-cyan-400 text-base" />
            </div>
            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest">
              Awards &amp; Hackathons
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {competitions.map((comp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.12] bg-white/[0.05] hover:border-cyan-500/40 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group"
              >
                <div
                  className={`p-3 rounded-xl flex-shrink-0 border transition-all duration-300 ${
                    comp.accent === "cyan"
                      ? "bg-cyan-500/10 border-cyan-500/20 group-hover:bg-cyan-500/15"
                      : "bg-indigo-500/10 border-indigo-500/20 group-hover:bg-indigo-500/15"
                  }`}
                >
                  <comp.icon
                    className={`text-xl ${comp.accent === "cyan" ? "text-cyan-400" : "text-indigo-400"}`}
                  />
                </div>

                <div>
                  <h4 className="text-white font-bold text-sm mb-0.5">
                    {comp.title}
                  </h4>
                  <p
                    className={`text-sm font-semibold mb-2 ${comp.accent === "cyan" ? "text-cyan-400" : "text-indigo-400"}`}
                  >
                    {comp.achievement}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="p-2 rounded-lg bg-white/5 border border-white/8">
              <FiCode className="text-cyan-400 text-base" />
            </div>
            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest">
              Coding Profiles
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {codingProfiles.map((profile, index) => (
              <motion.a
                key={profile.platform}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex items-center justify-between p-5 rounded-xl border border-white/[0.12] bg-white/[0.05] hover:bg-white/[0.08] hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group"
              >
                <span className={`font-bold text-sm ${profile.color}`}>
                  {profile.platform}
                </span>
                <FiExternalLink className="text-gray-400 group-hover:text-gray-200 transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
