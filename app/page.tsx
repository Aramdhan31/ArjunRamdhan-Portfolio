"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,f
  Linkedin,
  ArrowDown,
  ExternalLink,
  Users,
  Code,
  Heart,
  Mail,
  ChevronRight,
  Calendar,
  Star,
  Zap,
  Award,
  BookOpen,
  Trophy,
  Medal,
  GraduationCap,
  Briefcase,
  Building,
  School,
  Globe,
  Rocket,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeFilter, setActiveFilter] = useState("all")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false) // Close mobile menu when navigating
    }
  }

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "business", label: "Business" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-slate-900/40"></div>

        {/* Floating 3D Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
          <div className="floating-shape shape-5"></div>
        </div>

        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-xl z-50 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            ARJUN RAMDHAN
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.slice(0, -1).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 relative ${
                  activeSection === item.id ? "text-blue-400" : "text-slate-300"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-slate-100 hover:bg-slate-800/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50">
            <nav className="px-6 py-4 space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-blue-400 bg-blue-400/10 border border-blue-400/30"
                      : "text-slate-300 hover:text-blue-400 hover:bg-slate-800/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="relative z-10 pt-16">
        {/* Hero Section with 3D CSS Animation */}
        <section id="home" className="min-h-screen flex items-center justify-center relative">
          {/* 3D CSS Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="geometric-bg">
              <div className="cube cube-1"></div>
              <div className="cube cube-2"></div>
              <div className="cube cube-3"></div>
              <div className="sphere sphere-1"></div>
              <div className="sphere sphere-2"></div>
            </div>
          </div>

          {/* Cultural & Tech Background Elements */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Hindu Om Symbol - Left Side */}
            <div className="absolute left-10 top-1/2 transform -translate-y-1/2 opacity-5 text-blue-400/20">
              <svg width="300" height="300" viewBox="0 0 100 100" className="animate-pulse">
                <path
                  d="M35 65c-2-8 1-15 8-19 6-3 13-2 18 2 4 3 6 8 5 13-1 4-4 7-8 8-3 1-7 0-9-2-2-2-3-5-2-8 1-2 3-3 5-3 1 0 2 1 2 2 0 1-1 1-1 1M20 45c0-12 10-22 22-22s22 10 22 22c0 8-4 15-11 19l-11 7c-3 2-7 2-10 0l-11-7c-7-4-11-11-11-19zM50 25c-11 0-20 9-20 20 0 7 3 13 9 17l11 7 11-7c6-4 9-10 9-17 0-11-9-20-20-20zM30 15c0-3 2-5 5-5h30c3 0 5 2 5 5s-2 5-5 5H35c-3 0-5-2-5-5z"
                  fill="currentColor"
                  className="drop-shadow-2xl"
                />
                <circle cx="50" cy="15" r="3" fill="currentColor" />
              </svg>
            </div>

            {/* AI/Tech Circuit Pattern - Right Side */}
            <div className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-5 text-cyan-400/20">
              <svg width="300" height="300" viewBox="0 0 200 200" className="animate-pulse">
                {/* Circuit board pattern */}
                <g stroke="currentColor" strokeWidth="1" fill="none">
                  {/* Main circuit lines */}
                  <path d="M20 50 L180 50 M20 100 L180 100 M20 150 L180 150" />
                  <path d="M50 20 L50 180 M100 20 L100 180 M150 20 L150 180" />

                  {/* Circuit nodes */}
                  <circle cx="50" cy="50" r="4" fill="currentColor" />
                  <circle cx="100" cy="50" r="4" fill="currentColor" />
                  <circle cx="150" cy="50" r="4" fill="currentColor" />
                  <circle cx="50" cy="100" r="4" fill="currentColor" />
                  <circle cx="150" cy="100" r="4" fill="currentColor" />
                  <circle cx="50" cy="150" r="4" fill="currentColor" />
                  <circle cx="100" cy="150" r="4" fill="currentColor" />
                  <circle cx="150" cy="150" r="4" fill="currentColor" />

                  {/* Central AI brain representation */}
                  <circle cx="100" cy="100" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="100" cy="100" r="8" fill="currentColor" opacity="0.3" />

                  {/* Neural network connections */}
                  <path d="M85 100 L115 100 M100 85 L100 115 M92 92 L108 108 M108 92 L92 108" strokeWidth="1" />

                  {/* Microchip corners */}
                  <rect x="30" y="30" width="20" height="20" rx="2" fill="currentColor" opacity="0.2" />
                  <rect x="150" y="30" width="20" height="20" rx="2" fill="currentColor" opacity="0.2" />
                  <rect x="30" y="150" width="20" height="20" rx="2" fill="currentColor" opacity="0.2" />
                  <rect x="150" y="150" width="20" height="20" rx="2" fill="currentColor" opacity="0.2" />
                </g>
              </svg>
            </div>

            {/* Floating particles for extra ambiance */}
            <div className="absolute inset-0">
              {/* Cultural particles - left side */}
              <div
                className="absolute left-1/4 top-1/3 w-2 h-2 bg-blue-400/10 rounded-full animate-ping"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="absolute left-1/3 top-2/3 w-1 h-1 bg-blue-400/20 rounded-full animate-ping"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute left-1/5 top-1/2 w-1.5 h-1.5 bg-blue-400/15 rounded-full animate-ping"
                style={{ animationDelay: "4s" }}
              ></div>

              {/* Tech particles - right side */}
              <div
                className="absolute right-1/4 top-1/4 w-2 h-2 bg-cyan-400/10 rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute right-1/3 top-3/4 w-1 h-1 bg-cyan-400/20 rounded-full animate-ping"
                style={{ animationDelay: "3s" }}
              ></div>
              <div
                className="absolute right-1/5 top-1/2 w-1.5 h-1.5 bg-cyan-400/15 rounded-full animate-ping"
                style={{ animationDelay: "5s" }}
              ></div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
            <div className="mb-8 relative">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-4xl font-bold mb-8 shadow-2xl shadow-blue-500/25 animate-pulse avatar-3d">
                AR
              </div>
              <div className="absolute inset-0 w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full blur-xl opacity-30 animate-ping"></div>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-slate-100 via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-tight hero-text">
              ARJUN RAMDHAN
            </h1>

            <div className="flex justify-center mb-8">
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </div>

            <h2 className="text-xl md:text-3xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Developer & Cultural Leader specialising in{" "}
              <span className="text-blue-400 font-semibold">modern web applications</span> and{" "}
              <span className="text-cyan-400 font-semibold">community engagement</span>
            </h2>

            <div className="flex flex-wrap gap-6 mb-12 justify-center">
              <div className="group">
                <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:bg-slate-800/70 tag-3d">
                  <Code className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-100 font-medium">Full-Stack Developer</span>
                </div>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 tag-3d">
                  <Users className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-100 font-medium">Cultural Leader</span>
                </div>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 hover:bg-slate-800/70 tag-3d">
                  <Heart className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-100 font-medium">Community Builder</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white border-0 px-8 py-3 text-lg font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 button-3d"
                onClick={() => scrollToSection("projects")}
              >
                View Portfolio
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-3 text-lg font-semibold backdrop-blur-sm hover:scale-105 transition-all duration-300 button-3d"
                onClick={() => scrollToSection("business")}
              >
                <Rocket className="w-5 h-5 mr-2" />
                ARPK Studio
              </Button>
            </div>

            <div className="mt-20 animate-bounce">
              <ArrowDown className="w-8 h-8 text-cyan-400 mx-auto" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                About
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-blue-400/30 transition-all duration-500 hover:bg-slate-800/70 group card-3d">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-slate-100">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform icon-3d">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    Professional Profile
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Smart Computer Systems engineering professional with expertise in modern web development frameworks.
                    Specialising in building scalable, accessible applications using Next.js, React, and Firebase with a
                    focus on performance optimisation and user experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:bg-slate-800/70 group card-3d">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-slate-100">
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform icon-3d">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    Leadership Profile
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Active cultural leadership professional with experience in coordinating events and promoting
                    traditions through NHSF. Demonstrated ability to develop strong organisational frameworks, manage
                    teams, and create engaging community experiences.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 text-center max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl p-12 rounded-3xl border border-slate-700/50 quote-3d">
                <p className="text-xl text-slate-200 leading-relaxed italic">
                  "I believe in the intersection of technology and community to drive meaningful change. My dual focus
                  on development and cultural leadership allows me to create solutions that are both technically
                  excellent and culturally relevant."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20"></div>
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Professional Skills
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto"></div>
            </div>

            <div className="space-y-16">
              {/* Technical Expertise */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center md:justify-start gap-3 text-slate-100">
                  <Zap className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                  Technical Expertise
                </h3>
                <div className="grid gap-6 md:gap-8">
                  {[
                    {
                      name: "Next.js",
                      color: "text-blue-400",
                      description:
                        "Built 4+ production websites including Westminster Hindu Society and UOW Desi Society with advanced features like SSR, API routes, and dynamic routing",
                    },
                    {
                      name: "React.js",
                      color: "text-cyan-400",
                      description:
                        "3+ years developing interactive UIs with hooks, context, and component architecture for e-commerce and community platforms",
                    },
                    {
                      name: "Firebase",
                      color: "text-blue-400",
                      description:
                        "Implemented authentication, real-time databases, and cloud functions for multiple client projects including event management systems",
                    },
                    {
                      name: "Python",
                      color: "text-emerald-400",
                      description:
                        "Academic and personal projects focusing on data structures, algorithms, and automation scripts during university coursework",
                    },
                    {
                      name: "C++",
                      color: "text-indigo-400",
                      description:
                        "University-level programming for embedded systems and smart computer systems as part of BEng degree requirements",
                    },
                    {
                      name: "HTML/CSS",
                      color: "text-orange-400",
                      description:
                        "Foundation skills with 5+ years experience, including responsive design, Tailwind CSS, and modern CSS features across all projects",
                    },
                    {
                      name: "Git & Version Control",
                      color: "text-rose-400",
                      description:
                        "Daily use for project management, collaboration, and deployment workflows across personal and professional development work",
                    },
                  ].map((skill, index) => (
                    <Card
                      key={skill.name}
                      className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 card-3d"
                    >
                      <CardContent className="p-4 md:p-6">
                        <h4 className={`text-lg md:text-xl font-semibold mb-3 ${skill.color}`}>{skill.name}</h4>
                        <p className="text-slate-300 leading-relaxed text-sm md:text-base">{skill.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Leadership Capabilities */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center md:justify-start gap-3 text-slate-100">
                  <Star className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
                  Leadership Capabilities
                </h3>
                <div className="grid gap-6 md:gap-8">
                  {[
                    {
                      name: "Team Leadership",
                      color: "text-cyan-400",
                      description:
                        "Led Hindu Society as President for 3+ years, managing committee of 8+ members and coordinating with university administration",
                    },
                    {
                      name: "Event Coordination",
                      color: "text-emerald-400",
                      description:
                        "Organised 20+ cultural events including festivals, workshops, and community gatherings with attendance of 50-200+ participants",
                    },
                    {
                      name: "Cultural Programming",
                      color: "text-blue-400",
                      description:
                        "Developed programming for Hindu traditions and South Asian culture through NHSF, reaching university communities across the UK",
                    },
                    {
                      name: "Community Building",
                      color: "text-pink-400",
                      description:
                        "Built active community of 200+ members across multiple societies, fostering engagement and cultural awareness on campus",
                    },
                    {
                      name: "Project Management",
                      color: "text-blue-400",
                      description:
                        "Managed full lifecycle of web development projects from client consultation to deployment, ensuring timely delivery and quality",
                    },
                    {
                      name: "Cross-functional Communication",
                      color: "text-violet-400",
                      description:
                        "Regular collaboration with NHSF teams, university staff, and diverse stakeholders through weekly calls and strategic planning",
                    },
                  ].map((skill, index) => (
                    <Card
                      key={skill.name}
                      className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 card-3d"
                    >
                      <CardContent className="p-4 md:p-6">
                        <h4 className={`text-lg md:text-xl font-semibold mb-3 ${skill.color}`}>{skill.name}</h4>
                        <p className="text-slate-300 leading-relaxed text-sm md:text-base">{skill.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section with Fixed Buttons */}
        <section id="projects" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6"></div>
              <p className="text-slate-300 max-w-3xl mx-auto text-xl">
                Professional web development projects demonstrating expertise in design, functionality, and user
                experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Sen Jewels */}
              <Card className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 overflow-hidden hover:border-blue-400/50 transition-all duration-500 hover:scale-105 group project-card-3d">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                        Sen Jewels
                      </CardTitle>
                      <CardDescription className="text-slate-400 text-lg">E-commerce Platform</CardDescription>
                    </div>
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">E-commerce</Badge>
                  </div>
                </CardHeader>
                <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                  <Image
                    src="/images/senjewels.png"
                    alt="Sen Jewels website screenshot"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    A sophisticated e-commerce platform for handcrafted jewellery featuring elegant design, product
                    galleries, and seamless shopping experience with secure payment integration.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline" className="border-blue-400/30 text-blue-400 bg-blue-400/10">
                      React
                    </Badge>
                    <Badge variant="outline" className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="border-emerald-400/30 text-emerald-400 bg-emerald-400/10">
                      Stripe
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full border-blue-400/50 text-blue-400 hover:bg-blue-400/20 hover:border-blue-400 button-3d"
                  >
                    <a href="http://senjewels.co.uk/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              {/* Westminster Hindu Society */}
              <Card className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 group project-card-3d">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                        Westminster Hindu Society
                      </CardTitle>
                      <CardDescription className="text-slate-400 text-lg">Cultural Organisation</CardDescription>
                    </div>
                    <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0">Community</Badge>
                  </div>
                </CardHeader>
                <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                  <Image
                    src="/images/westminster-hindu-society.png"
                    alt="Westminster Hindu Society website screenshot"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Official platform for Westminster Hindu Society featuring event management, cultural resources, and
                    community engagement tools with integrated membership functionality.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline" className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="border-blue-400/30 text-blue-400 bg-blue-400/10">
                      Firebase
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400 button-3d"
                  >
                    <a href="https://hindusoc.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              {/* Alison Tait Coaching */}
              <Card className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 overflow-hidden hover:border-emerald-400/50 transition-all duration-500 hover:scale-105 group project-card-3d">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                        Alison Tait Coaching
                      </CardTitle>
                      <CardDescription className="text-slate-400 text-lg">Professional Services</CardDescription>
                    </div>
                    <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0">
                      Business
                    </Badge>
                  </div>
                </CardHeader>
                <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                  <Image
                    src="/images/alison-tait-coaching.png"
                    alt="Alison Tait Coaching website screenshot"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Professional coaching platform with service portfolio, client testimonials, and integrated booking
                    system for executive career development services.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline" className="border-emerald-400/30 text-emerald-400 bg-emerald-400/10">
                      HTML
                    </Badge>
                    <Badge variant="outline" className="border-blue-400/30 text-blue-400 bg-blue-400/10">
                      CSS & JavaScript
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/20 hover:border-emerald-400 button-3d"
                  >
                    <a href="https://alisontaitcoaching.co.uk/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              {/* UOW Desi Society */}
              <Card className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 overflow-hidden hover:border-pink-400/50 transition-all duration-500 hover:scale-105 group project-card-3d">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-100 group-hover:text-pink-400 transition-colors">
                        UOW Desi Society
                      </CardTitle>
                      <CardDescription className="text-slate-400 text-lg">Cultural Community</CardDescription>
                    </div>
                    <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0">Community</Badge>
                  </div>
                </CardHeader>
                <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                  <Image
                    src="/images/uow-desi-society.png"
                    alt="UoW Desi Society website screenshot"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Dynamic platform for the University of Westminster Desi Society celebrating South Asian cultures
                    with event management, member engagement, and multimedia content integration.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline" className="border-pink-400/30 text-pink-400 bg-pink-400/10">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="border-blue-400/30 text-blue-400 bg-blue-400/10">
                      Firebase
                    </Badge>
                    <Badge variant="outline" className="border-rose-400/30 text-rose-400 bg-rose-400/10">
                      Google Calendar API
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full border-pink-400/50 text-pink-400 hover:bg-pink-400/20 hover:border-pink-400 button-3d"
                  >
                    <a href="https://uowdesisoc.co.uk/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Section - ARPK Studio */}
        <section id="business" className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-violet-900/30"></div>
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                ARPK Studio
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6"></div>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Recreate the exact ARPK Studio website look */}
              <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden card-3d">
                {/* Header with logo */}
                <div className="text-center py-16 px-8">
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <span className="text-violet-400 font-semibold text-xl">ARPK</span>
                  </div>

                  <p className="text-violet-400 text-sm font-medium mb-6 tracking-wider">
                    TRANSFORMING DIGITAL EXPERIENCES SINCE 2018
                  </p>

                  <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-500 bg-clip-text text-transparent">
                      Your Vision, Our Code
                    </span>
                  </h1>

                  <p className="text-slate-300 text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed">
                    ARPK Studio delivers meticulously designed websites that captivate your audience, elevate your
                    brand, and drive exceptional results.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <Button
                      size="lg"
                      asChild
                      className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-300 hover:scale-105 button-3d rounded-lg"
                    >
                      <a href="https://arpk.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Request a Consultation
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-slate-500 px-8 py-4 text-lg font-semibold backdrop-blur-sm hover:scale-105 transition-all duration-300 button-3d rounded-lg"
                    >
                      <a href="https://arpk.vercel.app/portfolio" target="_blank" rel="noopener noreferrer">
                        View Our Work
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Services section with logos */}
                <div className="border-t border-slate-700/50 py-12 px-8">
                  <p className="text-center text-slate-400 text-sm font-medium mb-8 tracking-wider">
                    SERVICES WE USE TO BUILD YOUR WEBSITE
                  </p>

                  {/* Technology logos row */}
                  <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
                    {/* Firebase */}
                    <div className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
                      <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">F</span>
                      </div>
                      <span className="font-medium">Firebase</span>
                    </div>

                    {/* Stripe */}
                    <div className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
                      <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">S</span>
                      </div>
                      <span className="font-medium">Stripe</span>
                    </div>

                    {/* Next.js */}
                    <div className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors">
                      <div className="w-8 h-8 bg-slate-800 border border-slate-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">N</span>
                      </div>
                      <span className="font-medium">NEXT.js</span>
                    </div>

                    {/* Vercel */}
                    <div className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors">
                      <div className="w-8 h-8 bg-slate-900 border border-slate-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">▲</span>
                      </div>
                      <span className="font-medium">Vercel</span>
                    </div>

                    {/* Repeat for second row effect */}
                    <div className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
                      <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">F</span>
                      </div>
                      <span className="font-medium">Firebase</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
                      <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">S</span>
                      </div>
                      <span className="font-medium">Stripe</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors">
                      <div className="w-8 h-8 bg-slate-800 border border-slate-600 rounded flex items-center justify-center">
                        <span className="text-xs font-bold">NEXT</span>
                      </div>
                      <span className="font-medium">.js</span>
                    </div>
                  </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-slate-700/50 py-12 px-8 text-center">
                  <h3 className="text-2xl font-bold text-slate-100 mb-4">Digital Solutions</h3>
                  <h4 className="text-3xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                      Expertly Crafted
                    </span>
                    <span className="text-slate-100"> For</span>
                  </h4>

                  <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 icon-3d">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <h5 className="text-slate-100 font-semibold mb-2">Modern Websites</h5>
                      <p className="text-slate-400 text-sm">Responsive, fast, and user-friendly web applications</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 icon-3d">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <h5 className="text-slate-100 font-semibold mb-2">Custom Development</h5>
                      <p className="text-slate-400 text-sm">Tailored solutions using cutting-edge technologies</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 icon-3d">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <h5 className="text-slate-100 font-semibold mb-2">Premium Support</h5>
                      <p className="text-slate-400 text-sm">Ongoing maintenance and technical assistance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20"></div>
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Professional Experience
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto"></div>
            </div>

            <div className="space-y-12 max-w-5xl mx-auto">
              <Card className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 overflow-hidden hover:border-blue-400/50 transition-all duration-500 group card-3d">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1"></div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/nhsf-logo.png"
                          alt="NHSF Logo"
                          width={60}
                          height={60}
                          className="rounded-full bg-slate-800/50 p-2"
                        />
                      </div>
                      <div>
                        <CardTitle className="flex items-center gap-3 text-2xl text-slate-100 group-hover:text-blue-400 transition-colors">
                          <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg icon-3d">
                            <Users className="w-6 h-6 text-white" />
                          </div>
                          NHSF (UK) – Sanskaar Team Member
                        </CardTitle>
                        <CardDescription className="flex items-center mt-2 text-slate-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          2023 - Present
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-blue-500/20 text-blue-300 border border-blue-400/30">
                      Cultural Leadership
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-slate-300">
                    {[
                      "Coordinated and executed cultural events to promote Hindu traditions at universities across the UK.",
                      "Participated in weekly team calls and biweekly matrix updates to ensure alignment with organisational goals.",
                      "Contributed to festival planning, workshops, and logistical support for national events.",
                      "Developed skills in teamwork, organisation, and cross-functional communication.",
                      "Built strong networks within the Hindu student community across the UK.",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 mt-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full p-1">
                          <ChevronRight className="w-3 h-3 text-white" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 group card-3d">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1"></div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-3 text-2xl text-slate-100 group-hover:text-cyan-400 transition-colors">
                        <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg icon-3d">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        Freelance Web Developer
                      </CardTitle>
                      <CardDescription className="flex items-center mt-2 text-slate-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        2024 - Present
                      </CardDescription>
                    </div>
                    <Badge className="bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">Technical</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-slate-300">
                    {[
                      "Developed and deployed 4 professional websites for diverse clients including e-commerce, coaching, and cultural organisations.",
                      "Specialised in responsive design, modern frameworks, and user experience optimisation.",
                      "Managed full project lifecycle from client consultation to deployment and maintenance.",
                      "Gained experience in client communication, project management, and technical problem-solving.",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 mt-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full p-1">
                          <ChevronRight className="w-3 h-3 text-white" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Honours & Achievements
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto"></div>
            </div>

            {/* Achievement Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                variant="outline"
                onClick={() => setActiveFilter("all")}
                className={`px-6 py-2 backdrop-blur-sm hover:scale-105 transition-all duration-300 button-3d ${
                  activeFilter === "all"
                    ? "border-slate-400/70 text-slate-100 bg-slate-700/50"
                    : "border-slate-600/50 text-slate-300 bg-slate-800/30 hover:bg-slate-700/50 hover:border-slate-400/70"
                }`}
              >
                All
              </Button>
              <Button
                variant="outline"
                onClick={() => setActiveFilter("leadership")}
                className={`px-6 py-2 backdrop-blur-sm hover:scale-105 transition-all duration-300 button-3d ${
                  activeFilter === "leadership"
                    ? "border-blue-400/70 text-blue-300 bg-blue-400/20"
                    : "border-blue-400/50 text-blue-300 bg-blue-400/10 hover:bg-blue-400/20 hover:border-blue-400/70"
                }`}
              >
                Leadership
              </Button>
              <Button
                variant="outline"
                onClick={() => setActiveFilter("academic")}
                className={`px-6 py-2 backdrop-blur-sm hover:scale-105 transition-all duration-300 button-3d ${
                  activeFilter === "academic"
                    ? "border-cyan-400/70 text-cyan-300 bg-cyan-400/20"
                    : "border-cyan-400/50 text-cyan-300 bg-cyan-400/10 hover:bg-cyan-400/20 hover:border-cyan-400/70"
                }`}
              >
                Academic
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  achievement: "Outstanding Contributions to Community",
                  type: "leadership",
                  icon: Trophy,
                  gradient: "from-blue-500 to-cyan-500",
                  description:
                    "Received at the UWSU Awards 2025, this award recognises outstanding contributions to the student community at the University of Westminster. I was honoured with this award for my work as President of the Hindu Society, where I led cultural, religious, and community-focused initiatives over a 3-year period. The award celebrates meaningful impact, leadership, and dedication to enriching student life.",
                  year: "May 2025",
                  issuer: "University of Westminster Student Union",
                  logo: Building,
                },
                {
                  achievement: "Desi Society Ambassador",
                  type: "leadership",
                  icon: Users,
                  gradient: "from-blue-500 to-cyan-500",
                  description:
                    "Appointed as Desi Society Ambassador by the University of Westminster Student Union, representing and promoting South Asian culture and community engagement across the university.",
                  year: "Oct 2024",
                  issuer: "University of Westminster SU",
                  logo: Users,
                },
                {
                  achievement: "President of University Hindu Society",
                  type: "leadership",
                  icon: Award,
                  gradient: "from-cyan-500 to-blue-500",
                  description:
                    "President of the University of Westminster Hindu society from March 2023 to Summer 2025.",
                  year: "Mar 2023 - Summer 2025",
                  issuer: "University of Westminster",
                  logo: Building,
                },
                {
                  achievement: "Deputy Head Student",
                  type: "leadership",
                  icon: Briefcase,
                  gradient: "from-blue-500 to-indigo-500",
                  description:
                    "Selected as Deputy Head Student at Harris Invictus Academy Croydon, representing student interests and supporting school leadership initiatives.",
                  year: "Jan 2022",
                  issuer: "Harris Invictus Academy Croydon",
                  logo: School,
                },
                {
                  achievement: "Certificate of Excellence (×7)",
                  type: "academic",
                  icon: Medal,
                  gradient: "from-emerald-500 to-teal-500",
                  description:
                    "Super Subject Specialist Award IT | Super Subject Specialist Award Business x2 | Best Attendance | Tutor Award | Kindest Classmate",
                  year: "Dec 2021",
                  issuer: "Harris Invictus Academy Croydon",
                  logo: School,
                },
                {
                  achievement: "In2scienceUK Summer Programme",
                  type: "academic",
                  icon: GraduationCap,
                  gradient: "from-pink-500 to-rose-500",
                  description:
                    "Selected for the prestigious In2scienceUK Summer Programme, providing hands-on STEM research experience and professional mentorship opportunities.",
                  year: "Jul 2021",
                  issuer: "In2scienceUK",
                  logo: GraduationCap,
                },
                {
                  achievement: "World-Class Student - Year 11 Project",
                  type: "academic",
                  icon: BookOpen,
                  gradient: "from-indigo-500 to-purple-500",
                  description:
                    "A project that allowed students to express their creativity by helping others during lockdown times (COVID-19). I created an informative website regarding the Covid-19 pandemic.",
                  year: "Apr 2020",
                  issuer: "World Class Student",
                  logo: BookOpen,
                },
              ]
                .filter((item) => activeFilter === "all" || item.type === activeFilter)
                .map((item, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-slate-400/50 transition-all duration-500 group achievement-card-3d relative overflow-hidden animate-in fade-in-0 slide-in-from-bottom-4"
                  >
                    <CardContent className="pt-8">
                      <div className="flex flex-col items-center text-center">
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-r ${item.gradient} group-hover:scale-110 transition-transform shadow-lg icon-3d`}
                        >
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-slate-100 font-semibold text-lg mb-2 leading-tight">{item.achievement}</p>
                        <p className="text-slate-400 text-sm mb-2">{item.year}</p>
                        <div className="flex items-center gap-2 mb-4">
                          <item.logo className="w-3 h-3 text-slate-400" />
                          <p className="text-slate-500 text-xs">{item.issuer}</p>
                        </div>
                        <Badge
                          variant="outline"
                          className={`border-slate-600/50 ${item.type === "leadership" ? "text-blue-300" : "text-cyan-300"}`}
                        >
                          {item.type === "leadership" ? "Leadership" : "Academic"}
                        </Badge>

                        {/* Description overlay that appears on hover */}
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900/80 backdrop-blur-sm flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="text-center">
                            <p className="text-slate-200 mb-2">{item.description}</p>
                            <p className="text-slate-400 text-sm">— {item.issuer}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 to-blue-900/30"></div>
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Education
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto"></div>
            </div>

            <Card className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 card-3d">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-slate-100 mb-2">
                  BEng (Honours) Smart Computer Systems
                </CardTitle>
                <CardDescription className="text-xl text-cyan-300">University of Westminster</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-300 mb-8 leading-relaxed text-lg max-w-3xl mx-auto">
                  Studying advanced computer systems engineering through embedded platforms, peripheral devices, and
                  operational software. The programme focuses on rapidly growing technologies including embedded
                  systems, sensors, wireless networks, and Internet-of-Things (IoT) ecosystems, preparing graduates for
                  professional engineering careers leading to Chartered IT Professional (CITP) and Chartered Engineer
                  (CEng) registration.
                </p>
                <div className="flex gap-3 flex-wrap justify-center">
                  <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-2">
                    Embedded Systems
                  </Badge>
                  <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 px-4 py-2">
                    IoT Ecosystems
                  </Badge>
                  <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 px-4 py-2">
                    Wireless Networks
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-2">
                    Smart Technologies
                  </Badge>
                  <Badge className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white border-0 px-4 py-2">
                    Real-Time Systems
                  </Badge>
                  <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0 px-4 py-2">
                    Robotics & AI
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6"></div>
              <p className="text-slate-300 max-w-3xl mx-auto text-xl">
                Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
              </p>
            </div>

            <div className="max-w-2xl mx-auto text-center">
              <Card className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-500 card-3d">
                <CardContent className="pt-12 pb-12">
                  <div className="mb-8">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-blue-500/25 icon-3d">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-4">Let's Connect</h3>
                    <p className="text-slate-300 mb-8">
                      Ready to discuss your next project or just want to say hello? Drop me an email and I'll get back
                      to you as soon as possible.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <Button
                      size="lg"
                      asChild
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white border-0 py-4 text-lg font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 button-3d"
                    >
                      <a href="mailto:arjunramdhan37@outlook.com">
                        <Mail className="w-5 h-5 mr-3" />
                        Send Email
                      </a>
                    </Button>

                    <div className="flex justify-center space-x-6">
                      <a
                        href="https://www.linkedin.com/in/arjun-ramdhan-804950168"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-800/50 p-4 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-600 transition-all duration-300 hover:scale-110 social-3d group"
                      >
                        <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      </a>
                      <a
                        href="#"
                        className="bg-slate-800/50 p-4 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-110 social-3d group"
                      >
                        <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      </a>
                    </div>

                    <div className="pt-4 border-t border-slate-700/50">
                      <p className="text-slate-400 text-sm">
                        Email:{" "}
                        <a href="mailto:arjunramdhan37@outlook.com" className="text-blue-400 hover:underline">
                          arjunramdhan37@outlook.com
                        </a>
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
      <footer className="bg-slate-900/50 backdrop-blur-xl border-t border-slate-700/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              ARJUN RAMDHAN
            </div>

            <div className="flex space-x-6 mb-8">
              <a
                href="https://www.linkedin.com/in/arjun-ramdhan-804950168"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 p-4 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-600 transition-all duration-300 hover:scale-110 social-3d"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-slate-800/50 p-4 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-110 social-3d"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:arjunramdhan37@outlook.com"
                className="bg-slate-800/50 p-4 rounded-full hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-600 transition-all duration-300 hover:scale-110 social-3d"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <div className="text-slate-400 text-sm mb-2">© 2025 Arjun Ramdhan | All Rights Reserved</div>
            <div className="text-slate-500 text-xs">Built with Next.js & Tailwind CSS</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
