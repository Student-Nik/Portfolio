import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  Code2, Database, Monitor, Wrench, Sun, Moon, Menu, X 
} from "lucide-react";
import photo from "../assets/Nikhil-Photo.jpeg"

// ============================
// Scroll Progress Bar
// ============================
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 origin-left z-50"
    />
  );
};

// Navbar
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/40 backdrop-blur-2xl border-b border-white/10 shadow-lg"
          : "bg-black/20 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent tracking-wide">
          Nikhil.dev
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-300 hover:text-white transition duration-300"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mx-4 mb-4 rounded-2xl bg-gradient-to-br from-[#0f172a]/95 to-[#1e1b4b]/95 backdrop-blur-2xl border border-white/10 shadow-2xl p-6 space-y-5 text-center"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-cyan-400 text-lg transition duration-300"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// ============================
// Hero (UNCHANGED)
// ============================
const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-24 sm:pt-28 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b] text-white px-6 sm:px-8 overflow-hidden">
    
    {/* Glow Background */}
    <div className="absolute top-10 left-10 w-60 h-60 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 right-10 w-60 h-60 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Nikhil Kute
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-4">
          Java Developer | Spring Boot | Microservices
        </p>

        <p className="text-gray-400 max-w-xl mx-auto md:mx-0 mb-8">
          I build scalable backend systems, secure REST APIs with JWT,
          and production-ready full-stack applications using clean architecture.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/nikhil-kute-java"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-600 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/40 hover:scale-105"
          >
            Connect on LinkedIn
          </a>

          <a
           href="/JavaDeveloperResumeNikhilKuteFresher.pdf"
           download
           className="px-8 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
          Download Resume
          </a>


          <a
            href="#projects"
            className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300"
          >
            View Projects
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6 mt-8 text-gray-300">
          <a href="https://www.linkedin.com/in/nikhil-kute-java" target="_blank">
            <Linkedin className="hover:text-cyan-400 hover:scale-125 transition duration-300" />
          </a>
          <a href="https://github.com/Student-Nik" target="_blank">
            <Github className="hover:text-cyan-400 hover:scale-125 transition duration-300" />
          </a>
          <a href="mailto:nkute611@gmail.com">
            <Mail className="hover:text-cyan-400 hover:scale-125 transition duration-300" />
          </a>
        </div>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <div className="relative w-64 sm:w-72 md:w-80">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-2xl opacity-60"></div>

          <img
            src={photo}
            alt="Nikhil Profile"
            className="relative w-full h-auto object-cover rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

// ============================
// Modern About Section
// ============================
const About = () => (
  <section
    id="about"
    className="relative py-28 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] text-white overflow-hidden"
  >
    {/* Background Glow */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/30 blur-3xl rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/30 blur-3xl rounded-full"></div>

    <div className="max-w-6xl mx-auto relative z-10">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-6"
      >
        About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
      </motion.h2>

      <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
        Passionate backend developer focused on building secure, scalable and
        production-ready applications with modern technologies.
      </p>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative p-12 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
      >
        <p className="text-lg leading-relaxed text-gray-300 mb-8">
          I am a <span className="text-cyan-400 font-semibold">Java Developer</span> with hands-on experience 
          building scalable backend systems using <span className="text-purple-400 font-semibold">Core Java</span>, 
          <span className="text-purple-400 font-semibold"> Spring Boot</span>, and 
          <span className="text-purple-400 font-semibold"> MySQL</span>.  
          I have implemented <span className="text-cyan-400 font-semibold">JWT Authentication</span>, 
          integrated <span className="text-cyan-400 font-semibold">Payment Gateways</span>, 
          and developed RESTful APIs following MVC architecture.
        </p>

        <p className="text-lg leading-relaxed text-gray-400">
          My goal is to write clean, maintainable code while solving real-world 
          problems. I continuously improve my skills in backend development, 
          system design, and security best practices to deliver reliable and 
          high-performance applications.
        </p>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-4 mt-10">
          {[
            "Java",
            "Spring Boot",
            "REST APIs",
            "JWT Auth",
            "MySQL",
            "Microservices",
            "Payment Integration",
            "Tailwind CSS"
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 text-sm hover:scale-105 transition duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
        {[
          { title: "Projects Built", value: "5+" },
          { title: "Technologies Used", value: "10+" },
          { title: "Hands-on Experience", value: "1+ Year" }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:scale-105 transition duration-300"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {item.value}
            </h3>
            <p className="text-gray-400 mt-2">{item.title}</p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

// ============================
// Experience Section (NEW)
// ============================
const Experience = () => (
  <section
    id="experience"
    className="relative py-28 px-6 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b] text-white"
  >
    <div className="max-w-5xl mx-auto">

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        Experience
      </motion.h2>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
        className="relative p-10 rounded-3xl 
        bg-white/5 backdrop-blur-2xl 
        border border-white/10 
        shadow-2xl hover:shadow-cyan-500/20 
        transition-all duration-500"
      >
        {/* Left Accent Line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Briefcase className="text-cyan-400" />
          <h3 className="text-2xl font-semibold">
            Java Developer Intern – Landmine Soft (Remote)
          </h3>
        </div>

        <p className="text-sm text-gray-400 mb-6">
          Jan 2026 – Feb 2026
        </p>

        {/* Description */}
        <ul className="space-y-3 text-gray-300 list-disc pl-6 leading-relaxed">
          <li>
            Developed a full-stack College Student Portal using Spring Boot 3,
            Spring Data JPA, and MySQL/PostgreSQL.
          </li>
          <li>
            Designed RESTful APIs for student, faculty, and admin modules
            including authentication and profile management.
          </li>
          <li>
            Implemented JWT-based authentication and role-based access control
            (STUDENT, FACULTY, ADMIN).
          </li>
          <li>
            Built modules for course enrollment, attendance tracking,
            internal marks, and grade sheet generation.
          </li>
          <li>
            Designed relational database schemas and managed entity
            relationships using Hibernate/JPA.
          </li>
          <li>
            Tested APIs using Postman and followed clean code practices with
            structured exception handling.
          </li>
          <li>
            Used Git and GitHub for version control and collaborative
            development.
          </li>
        </ul>

        {/* GitHub Button */}
        <div className="mt-8">
          <a
            href="https://github.com/Student-Nik/CollegeStudentPortal.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 
            bg-gradient-to-r from-cyan-500 to-blue-500 
            hover:from-blue-500 hover:to-cyan-500 
            rounded-full text-white font-medium 
            transition-all duration-300 shadow-lg hover:shadow-cyan-500/40"
          >
            <Github size={18} />
            View Project on GitHub
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

// ============================
// Modern Education Section
// ============================
const Education = () => (
  <section
    id="education"
    className="relative py-28 px-6 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b] text-white"
  >
    <div className="max-w-5xl mx-auto">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16 
        bg-gradient-to-r from-cyan-400 to-blue-500 
        bg-clip-text text-transparent"
      >
        Education
      </motion.h2>

      <div className="relative space-y-12">

        {/* Vertical Timeline Line */}
        <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>

        {/* Education Item */}
        {[
          {
            title: "M.Sc. Computer Science (2025–Present)",
            place:
              "Modern College of Arts, Science and Commerce, Pune",
          },
          {
            title: "B.Sc. Computer Science (2022–2025) – CGPA: 9.45",
            place:
              "New Arts, Commerce and Science College, Ahilyanagar",
          },
          {
            title: "HSC (2022) – 78.83%",
            place:
              "Hanuman Arts and Science College, Takali Khatgaon",
          },
          {
            title: "SSC (2020) – 90.80%",
            place:
              "Shri Durgadevi Vidyalaya, Dhawalpuri",
          },
        ].map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative pl-14"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 top-2 w-8 h-8 
              rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 
              flex items-center justify-center shadow-lg">
              <GraduationCap size={16} className="text-black" />
            </div>

            {/* Card */}
            <div
              className="p-8 rounded-3xl 
              bg-white/5 backdrop-blur-2xl 
              border border-white/10 
              shadow-xl hover:shadow-cyan-500/20 
              transition-all duration-500"
            >
              <h3 className="text-lg font-semibold mb-2">
                {edu.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {edu.place}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Certification Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          className="mt-16 p-8 rounded-3xl 
          border border-yellow-400/30 
          bg-yellow-400/10 
          backdrop-blur-xl 
          flex items-center gap-4 
          shadow-xl hover:shadow-yellow-400/30 
          transition-all duration-500"
        >
          <Award className="text-yellow-400" size={28} />
          <div>
            <h4 className="font-semibold text-yellow-300">
              Java Full Stack Development Certification
            </h4>
            <p className="text-sm text-gray-300">
              Symbiosis Skills & Professional University
              (Industry Collaboration with Capgemini)
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

// ============================
// Modern Skills Section
// ============================
const Skills = () => (
  <section
    id="skills"
    className="relative py-28 px-6 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b] text-white overflow-hidden"
  >
    {/* Background Glow Effects */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

    <div className="max-w-7xl mx-auto relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-20 
        bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
        bg-clip-text text-transparent"
      >
        Technical Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        <SkillCategory
          icon={<Code2 />}
          title="Backend Development"
          skills={[
            "Java",
            "Spring Boot",
            "Spring MVC",
            "Spring Security",
            "Spring Data JPA",
            "Hibernate",
            "REST APIs",
            "Microservices",
          ]}
        />

        <SkillCategory
          icon={<Database />}
          title="Databases"
          skills={["MySQL", "PostgreSQL", "MongoDB"]}
        />

        <SkillCategory
          icon={<Monitor />}
          title="Frontend Technologies"
          skills={["HTML5", "CSS3", "JavaScript", "React JS", "Thymeleaf"]}
        />

        <SkillCategory
          icon={<Wrench />}
          title="Tools & DevOps"
          skills={["Git", "GitHub", "Postman", "Maven", "Docker"]}
        />
      </div>
    </div>
  </section>
);

const SkillCategory = ({ title, skills, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.02 }}
    className="relative p-10 rounded-3xl 
    bg-white/5 backdrop-blur-2xl 
    border border-white/10 
    shadow-2xl hover:shadow-cyan-500/20 
    transition-all duration-500"
  >
    {/* Glow Layer */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition duration-500"></div>

    <div className="flex items-center gap-3 mb-10 relative z-10">
      <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-black">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold 
      bg-gradient-to-r from-cyan-400 to-purple-500 
      bg-clip-text text-transparent">
        {title}
      </h3>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.08, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative px-4 py-3 rounded-xl 
          bg-gradient-to-br from-white/10 to-white/5 
          border border-white/10 
          text-sm font-medium text-center 
          shadow-lg hover:shadow-cyan-500/30 
          hover:border-cyan-400/40 
          transition-all duration-300 
          cursor-pointer overflow-hidden"
        >
          {/* Shimmer Effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></span>
          <span className="relative z-10">{skill}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// ============================
// Projects (UNCHANGED)
// ============================
const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const projectList = [
    {
      title: "MindConnect",
      short:
        "Mental Health Consultation & Awareness platform with quiz assessment and doctor scheduling.",
      full:
        "Built a complete mental health support system including psychological assessment quiz, automated result evaluation, doctor consultation booking, and awareness content. Implemented MVC architecture with secure backend APIs, validation, and structured exception handling.",
      tech: ["Spring Boot", "JPA", "MySQL"],
      github: "https://github.com/Student-Nik/mindconnect",
    },
    {
      title: "SeedToServe",
      short:
        "Farm-to-Table e-commerce platform connecting farmers directly with customers.",
      full:
        "Developed scalable e-commerce backend enabling farmers to list products, customers to manage cart, place orders, and track lifecycle. Designed REST APIs, order workflows, and optimized entity relationships using Hibernate/JPA.",
      tech: ["Spring Boot", "Hibernate", "REST APIs"],
      github: "https://github.com/Student-Nik/SeedToServe-Backend",
    },
    {
      title: "College Student Portal",
      short:
        "Full-stack student management system with JWT authentication.",
      full:
        "Implemented role-based authentication (STUDENT, FACULTY, ADMIN), course enrollment, attendance tracking, marks management, and grade generation. Followed clean architecture principles with proper validation and exception handling.",
      tech: ["Spring Boot 3", "PostgreSQL", "JWT"],
      github: "https://github.com/Student-Nik/CollegeStudentPortal",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b] text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 
          bg-gradient-to-r from-cyan-400 to-blue-500 
          bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projectList.map((project, i) => {
            const isOpen = expanded === i;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4 }}
                className="relative p-8 rounded-3xl 
                bg-white/5 backdrop-blur-2xl 
                border border-white/10 
                shadow-2xl hover:shadow-cyan-500/30 
                transition-all duration-500"
              >
                {/* Top Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 hover:opacity-100 transition duration-500"></div>

                <h3 className="text-xl font-semibold mb-4 relative z-10">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-300 mb-4 relative z-10">
                  {project.short}
                </p>

                {/* Expand Section */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-sm text-gray-400 mb-4 relative z-10"
                    >
                      {project.full}
                    </motion.p>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="text-cyan-400 text-sm font-medium mb-5 hover:text-cyan-300 transition relative z-10"
                >
                  {isOpen ? "Show Less ▲" : "Read More ▼"}
                </button>

                {/* Tech Stack */}
                <div className="flex gap-3 flex-wrap mb-6 relative z-10">
                  {project.tech.map((t, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 
                      bg-gradient-to-r from-cyan-500/20 to-blue-500/20 
                      border border-cyan-400/20 
                      rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 
                  bg-gradient-to-r from-cyan-500 to-blue-500 
                  hover:from-blue-500 hover:to-cyan-500 
                  rounded-full text-white text-sm font-medium 
                  transition-all duration-300 
                  shadow-lg hover:shadow-cyan-500/40 relative z-10"
                >
                  <Github size={16} />
                  View on GitHub
                  <ExternalLink size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch(
        "https://portfoliobackend-ck7x.onrender.com/api/contact/me",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.text();

      if (response.ok) {
        setResponseMessage("Thank you for contacting me. I have received your message and will respond shortly.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage("❌ " + data);
      }
    } catch (error) {
      setResponseMessage("❌ Server error. Try again later.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b] text-white overflow-hidden"
    >
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-14 
          bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
          bg-clip-text text-transparent"
        >
          Contact Me
        </motion.h2>

        <motion.div
          className="p-10 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            <InputField
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />

            <InputField
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
            />

            <motion.textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-5 py-4 rounded-xl 
              bg-white/10 border border-white/20 
              focus:outline-none focus:border-cyan-400 
              focus:ring-2 focus:ring-cyan-400/30 
              transition-all duration-300 resize-none"
              whileFocus={{ scale: 1.02 }}
              required
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 
              bg-gradient-to-r from-cyan-500 to-purple-600 
              rounded-full font-semibold 
              shadow-lg transition-all duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>

          {responseMessage && (
            <p className="mt-6 text-center text-sm">
              {responseMessage}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const InputField = ({ type, name, value, onChange, placeholder }) => (
  <motion.input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required
    className="w-full px-5 py-4 rounded-xl 
    bg-white/10 border border-white/20 
    focus:outline-none focus:border-cyan-400 
    focus:ring-2 focus:ring-cyan-400/30 
    transition-all duration-300"
    whileFocus={{ scale: 1.02 }}
  />
);

// ============================
// Footer (UNCHANGED)
// ============================
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 
      bg-gradient-to-br from-[#0f172a] via-[#111827] to-black 
      text-gray-400 overflow-hidden">

      {/* Top Glow Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] 
        bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">

        {/* Left - Branding */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Nikhil Kute
          </h3>
          <p className="text-sm text-gray-400">
            Java Developer | Spring Boot | Backend Enthusiast
          </p>
        </div>

        {/* Center - Quick Links */}
        <div className="flex justify-center gap-6 text-sm">
          {["About", "Projects", "Skills", "Contact"].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right - Empty for symmetry */}
        <div></div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-xs text-gray-500 relative">
        © {new Date().getFullYear()} Nikhil Kute. All rights reserved.  
        <br />
        Built with ❤️ using React & Tailwind CSS
      </div>

      {/* Scroll To Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-6 bottom-6 p-3 rounded-full 
          bg-gradient-to-r from-cyan-500 to-purple-600 
          text-white shadow-lg hover:shadow-cyan-500/40 
          transition-all duration-300"
      >
        <ArrowUp size={18} />
      </motion.button>
    </footer>
  );
};


export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="font-sans bg-white dark:bg-black transition-colors duration-500 scroll-smooth">
      <ScrollProgress />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
