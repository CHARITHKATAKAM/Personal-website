"use client";

import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import SectionWrapper from "../SectionWrapper";

const Certifications = () => {
  const certifications = [
    {
      title: "AI and ML Project-Based Learning Program (FarmIQ)",
      issuer: "ByteXL TechEd",
      icon: FiAward,
      category: "AI & Machine Learning",
      color: "purple",
      date: "Aug-Oct 2025",
    },
    {
      title: "Generative AI-Powered Data Analytics Job Simulation",
      issuer: "TATA and Forage",
      icon: FiAward,
      category: "Generative AI & Data Analytics",
      color: "cyan",
      date: "Dec 2025",
    },
    {
      title: "Solutions Architecture Job Simulation",
      issuer: "AWS and Forage",
      icon: FiAward,
      category: "Solutions Architecture",
      color: "blue",
      date: "Dec 2025",
    },
  ];

  const workshops: typeof certifications = [];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        gradient: "from-blue-500/30 to-blue-500/10",
        text: "text-blue-400",
        border: "hover:border-blue-400",
        shadow: "hover:shadow-blue-500/30",
        button:
          "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
        glow: "shadow-blue-500/20",
      },
      cyan: {
        gradient: "from-cyan-500/30 to-cyan-500/10",
        text: "text-cyan-400",
        border: "hover:border-cyan-400",
        shadow: "hover:shadow-cyan-500/30",
        button:
          "from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700",
        glow: "shadow-cyan-500/20",
      },
      green: {
        gradient: "from-green-500/30 to-green-500/10",
        text: "text-green-400",
        border: "hover:border-green-400",
        shadow: "hover:shadow-green-500/30",
        button:
          "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
        glow: "shadow-green-500/20",
      },
      orange: {
        gradient: "from-orange-500/30 to-orange-500/10",
        text: "text-orange-400",
        border: "hover:border-orange-400",
        shadow: "hover:shadow-orange-500/30",
        button:
          "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
        glow: "shadow-orange-500/20",
      },
      purple: {
        gradient: "from-purple-500/30 to-purple-500/10",
        text: "text-purple-400",
        border: "hover:border-purple-400",
        shadow: "hover:shadow-purple-500/30",
        button:
          "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
        glow: "shadow-purple-500/20",
      },
      red: {
        gradient: "from-red-500/30 to-red-500/10",
        text: "text-red-400",
        border: "hover:border-red-400",
        shadow: "hover:shadow-red-500/30",
        button: "from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
        glow: "shadow-red-500/20",
      },
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  const CertificateCard = ({ cert, index }: { cert: any; index: number }) => {
    const colors = getColorClasses(cert.color);

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className={`group relative rounded-2xl border border-white/[0.12] bg-white/[0.05] backdrop-blur-sm ${colors.border} hover:bg-white/[0.08] transition-all duration-300 hover:shadow-xl ${colors.shadow} p-6 overflow-hidden`}
      >
        {/* Subtle hover glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none`}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div
              className={`p-2.5 rounded-xl bg-white/5 border border-white/8 group-hover:border-current/20 transition-colors duration-300`}
            >
              <cert.icon className={`${colors.text} text-xl`} />
            </div>
            <span
              className={`text-sm font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 ${colors.text} font-mono uppercase tracking-wider`}
            >
              {cert.category}
            </span>
          </div>

          {/* Title & meta */}
          <div className="space-y-2 mb-5">
            <h3 className="text-sm font-bold text-white line-clamp-2 min-h-[2.5rem] leading-snug">
              {cert.title}
            </h3>
            <div className="flex items-center justify-between gap-2">
              <span className="text-gray-400 text-sm line-clamp-1">
                {cert.issuer}
              </span>
              <span
                className={`${colors.text} text-sm font-mono border border-white/8 px-2 py-0.5 rounded-md whitespace-nowrap`}
              >
                {cert.date}
              </span>
            </div>
          </div>

          {/* Resume lists the credentials, but the certificate files were not supplied. */}
          <div className="flex gap-2">
            <span className="flex-1 inline-flex items-center justify-center px-3 py-2.5 border border-white/8 bg-white/3 text-gray-400 rounded-xl text-sm">
              Certificate file not provided
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <SectionWrapper
      id="certifications"
      className="bg-[#080d18] relative overflow-hidden"
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
      {/* Ambient glow orbs — boosted from /6 to /12 */}
      <div className="absolute -top-20 left-0 w-[500px] h-[500px] bg-cyan-500/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      {/* Centered heading spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-cyan-500 font-mono text-sm tracking-[0.35em] uppercase mb-3">
            // certifications
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] mb-4">
            <span className="text-white">Proof of</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              learning.
            </span>
          </h2>
          <p className="text-gray-400 font-body text-base max-w-lg mx-auto">
            Certifications and job simulations listed in my resume.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/60" />
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/60" />
          </div>
        </motion.div>

        {/* Professional Certifications */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="p-2 rounded-lg bg-white/5 border border-white/8">
              <FiAward className="text-cyan-400 text-base" />
            </div>
            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest">
              Professional Certifications
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <CertificateCard key={index} cert={cert} index={index} />
            ))}
          </div>
        </div>

        {workshops.length > 0 && (
          <div className="mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-7"
            >
              <div className="p-2 rounded-lg bg-white/5 border border-white/8">
                <FiAward className="text-red-400 text-base" />
              </div>
              <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest">
                Workshops &amp; Training
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {workshops.map((cert, index) => (
                <CertificateCard key={index} cert={cert} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
