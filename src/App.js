import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Menu, X, Download, Code, Award, BookOpen, Briefcase, Star, Zap, Rocket, Facebook, Instagram, MessageCircle, Twitter } from 'lucide-react';

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [activeWagon, setActiveWagon] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 800 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'certifications', 'publications'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shubhadip-mahata/', icon: Linkedin, color: 'from-blue-600 to-blue-400' },
    { name: 'GitHub', url: 'https://github.com/Shubhadip1004', icon: Github, color: 'from-gray-600 to-gray-400' },
    { name: 'Facebook', url: 'https://www.facebook.com/shubhadip.mahato.1/', icon: Facebook, color: 'from-blue-600 to-blue-500' },
    { name: 'Instagram', url: 'https://www.instagram.com/shubhadip.mahata/', icon: Instagram, color: 'from-pink-600 via-purple-600 to-orange-500' },
    { name: 'Twitter', url: 'https://x.com/SuperiorDablu', icon: Twitter, color: 'from-sky-500 to-blue-400' },
    { name: 'WhatsApp', url: 'https://wa.me/918942869813?text=Hi', icon: MessageCircle, color: 'from-green-600 to-green-400' },
  ];

  const codingPlatforms = [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/ShubhadipMahata_1004/',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'GeeksForGeeks',
      url: 'https://www.geeksforgeeks.org/user/shubhadipw/',
      logo: 'https://media.geeksforgeeks.org/gfg-gg-logo.svg',
      color: 'from-green-400 to-emerald-500'
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/shubhadip_w',
      logo: 'https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg',
      color: 'from-green-500 to-teal-500'
    },
  ];

    const skillTrainSections = [
    {
      id: 'programming',
      label: 'Programming',
      icon: '🧠',
      skills: ['Python', 'Java', 'C', 'MySQL', 'Oracle DB'],
    },
    {
      id: 'frameworks',
      label: 'Frameworks',
      icon: '🚀',
      skills: ['Numpy', 'Pandas', 'Scikit-Learn', 'OpenCV', 'NLTK', 'Seaborn', 'Vosk', 'Flask'],
    },
    {
      id: 'tools',
      label: 'Tools & Tech',
      icon: '🛠',
      skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Postman', 'Kaggle', 'Linux'],
    },
    {
      id: 'languages',
      label: 'Languages Spoken',
      icon: '🌍',
      skills: ['English', 'Hindi', 'Bengali'],
    },
    {
      id: 'interests',
      label: 'Interests',
      icon: '💡',
      skills: [
        'Machine Learning',
        'Deep Learning',
        'Reinforcement Learning',
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Optimization Algorithms',
      ],
    },
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'publications', label: 'Publications' },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Particle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s infinite ease-in-out ${particle.delay}s`,
            }}
          />
        ))}
        <div
          className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] transition-all duration-300"
          style={{
            left: `${mousePosition.x - 300}px`,
            top: `${mousePosition.y - 300}px`,
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] transition-all duration-300"
          style={{
            left: `${mousePosition.x - 150}px`,
            top: `${mousePosition.y - 450}px`,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-2xl py-4' : 'bg-transparent py-6'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Shubhadip Mahata
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 px-4 pb-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg mb-2 transition-all duration-300 ${activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-10">
            {/* Left Side - Content */}
            <div className="flex-1 text-center md:text-left max-w-2xl">
              <h1 className="text-7xl md:text-8xl lg:text-8xl font-black mb-6 leading-tight">
                <span className="block text-gray-400 text-3xl md:text-4xl lg:text-5xl mb-4 font-light">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Shubhadip
                </span>
                <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient" style={{ animationDelay: '1s' }}>
                  Mahata
                </span>
              </h1>

              <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8 leading-relaxed">
                Aspiring <span className="text-blue-400 font-bold">Developer</span> & <span className="text-purple-400 font-bold">AI Enthusiast</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
                <a
                  href="https://drive.google.com/uc?export=download&id=1USnDK_oOqAPKV6zts-eFnQqx2lOiUuyC"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold overflow-hidden transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    <Download size={20} className="group-hover:animate-bounce" />
                    Download CV
                  </span>
                </a>
                <a
                  href="mailto:shubhadip.w@gmail.com"
                  className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400/10 transition-all duration-300 transform hover:scale-110"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Mail size={20} />
                    Get In Touch
                  </span>
                </a>
              </div>

              <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                {socialLinks.map(social => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-gradient-to-r ${social.color} rounded-full hover:scale-125 transition-all duration-300 transform hover:rotate-12 shadow-lg`}
                    title={social.name}
                  >
                    <social.icon size={24} className="text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side - Profile Image (No Box, Natural Look) */}
            <div className="relative group flex-shrink-0">
              {/* Subtle background glow only */}
              <div className="absolute -inset-16 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-all duration-700"></div>

              {/* Image with no border or box - natural placement */}
              <div className="relative w-72 h-96 md:w-96 md:h-[32rem] lg:w-[28rem] lg:h-[36rem] transform transition-all duration-700 group-hover:scale-105">
                <img
                  src="/images/Profile.png"
                  alt="Shubhadip Mahata"
                  className="w-full h-full object-cover object-center rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-20 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p className="transform transition-all duration-500 hover:translate-x-4 hover:text-white">
                I am a <span className="text-blue-400 font-bold">B.Tech graduate in Information Technology</span> with a passion for AI, Machine Learning, and solving complex optimization problems. My journey includes building intelligent systems like voice assistants, predictive models, and automation tools.
              </p>
              <p className="transform transition-all duration-500 hover:translate-x-4 hover:text-white">
                With research experience in <span className="text-purple-400 font-bold">advanced metaheuristic algorithms</span>, I focus on improving performance in engineering and security applications. I love transforming data-driven ideas into real-world solutions.
              </p>
              <div className="flex gap-4 flex-wrap pt-4">
                <div className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-blue-500/10 rounded-full border border-blue-400/30">
                  <span className="text-blue-400 font-semibold">AI/ML</span>
                </div>
                <div className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-purple-500/10 rounded-full border border-purple-400/30">
                  <span className="text-purple-400 font-semibold">Python</span>
                </div>
                <div className="px-6 py-3 bg-gradient-to-r from-pink-500/20 to-pink-500/10 rounded-full border border-pink-400/30">
                  <span className="text-pink-400 font-semibold">Data Science</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-50 blur-2xl group-hover:opacity-75 transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="images/Workspace.jpg"
                  alt="Coding"
                  className="w-full h-80 object-cover transform transition-all duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-20 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>

          <div className="space-y-8">
            <div className="group relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full transform transition-all duration-500 group-hover:w-2"></div>
              <div className="pl-12 transform transition-all duration-500 group-hover:translate-x-4">
                <div className="flex items-center gap-4 mb-4">
                  <Briefcase className="text-blue-400" size={24} />
                  <span className="px-4 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm font-semibold border border-blue-400/30">
                    August 2022 - May 2025
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  Undergraduate Research Assistant
                </h3>
                <p className="text-xl text-gray-400 mb-6">Netaji Subhash Engineering College</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3 hover:text-white transition-colors">
                    <Zap className="text-blue-400 flex-shrink-0 mt-1" size={16} />
                    <span>Conducted comparative analysis of advanced metaheuristic algorithms with focus on exploration-exploitation balance</span>
                  </li>
                  <li className="flex items-start gap-3 hover:text-white transition-colors">
                    <Zap className="text-blue-400 flex-shrink-0 mt-1" size={16} />
                    <span>Achieved faster convergence and higher solution accuracy for engineering design and intrusion detection</span>
                  </li>
                  <li className="flex items-start gap-3 hover:text-white transition-colors">
                    <Zap className="text-blue-400 flex-shrink-0 mt-1" size={16} />
                    <span>Improved detection accuracy by 4-5% while reducing dimensionality by 39% on 120K+ records</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full transform transition-all duration-500 group-hover:w-2"></div>
              <div className="pl-12 transform transition-all duration-500 group-hover:translate-x-4">
                <div className="flex items-center gap-4 mb-4">
                  <Code className="text-purple-400" size={24} />
                  <span className="px-4 py-1 bg-purple-500/20 rounded-full text-purple-400 text-sm font-semibold border border-purple-400/30">
                    November 2023
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  Python Developer Intern
                </h3>
                <p className="text-xl text-gray-400 mb-6">CodeAlpha</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3 hover:text-white transition-colors">
                    <Zap className="text-purple-400 flex-shrink-0 mt-1" size={16} />
                    <span>Developed interactive Hangman game using Tkinter with city name guessing mechanics</span>
                  </li>
                  <li className="flex items-start gap-3 hover:text-white transition-colors">
                    <Zap className="text-purple-400 flex-shrink-0 mt-1" size={16} />
                    <span>Created URL shortener generating unique links using Pyshorteners</span>
                  </li>
                  <li className="flex items-start gap-3 hover:text-white transition-colors">
                    <Zap className="text-purple-400 flex-shrink-0 mt-1" size={16} />
                    <span>Built NLTK-based chatbot with pattern matching for user queries</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-20 text-center">
            <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Education</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                degree: 'B.Tech in Information Technology',
                institution: 'Netaji Subhash Engineering College',
                location: 'Kolkata, India',
                year: '2021-2025',
                grade: 'DGPA: 9.06',
                link: 'https://drive.google.com/drive/u/0/folders/1Tf_v4T3hFrgyDDcJIbK6ICcvgPNp9j30',
                color: 'from-blue-500 to-purple-500'
              },
              {
                degree: 'Higher Secondary',
                institution: 'Atrayee D.A.V. Public School',
                location: 'Balurghat',
                year: '2019-2021',
                grade: '91.2%',
                link: 'https://drive.google.com/file/d/15nDua1t2lCrw6EIzYAugIoohNH-1kaTT/view?usp=drive_link',
                color: 'from-purple-500 to-pink-500'
              },
              {
                degree: 'Secondary',
                institution: 'Kendriya Vidyalaya Sangathan',
                location: 'Balurghat',
                year: '2009-2019',
                grade: '89.8%',
                link: 'https://drive.google.com/file/d/12995w8aC7LdLCmAC4iMuVm75HZKfZlbY/view?usp=drive_link',
                color: 'from-pink-500 to-orange-500'
              }
            ].map((edu, index) => (
              <a
                key={index}
                href={edu.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative overflow-hidden transform transition-all duration-500 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center p-8 gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpen className={`bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`} size={24} />
                      <h3 className="text-2xl font-bold group-hover:translate-x-2 transition-transform duration-300">
                        {edu.degree}
                      </h3>
                      <ExternalLink className={`bg-gradient-to-r ${edu.color} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity`} size={20} />
                    </div>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                      {edu.institution}
                    </p>
                    <p className="text-gray-400">{edu.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 mb-2">{edu.year}</p>
                    <p className="text-2xl font-bold text-green-400">{edu.grade}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-20 text-center">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          {/* TRAIN + TRACK */}
          <div className="mt-16 relative h-72">
            {/* Track (flat ellipse) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="train-track"></div>
            </div>

            {/* Moving train (engine + 5 cargo containers) */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                animation: 'trainPath 20s linear infinite',
                animationPlayState: activeWagon ? 'paused' : 'running',
              }}
            >
              <div className="flex items-center gap-4">
                {/* Engine */}
                <div className="px-5 py-4 rounded-2xl bg-gradient-to-br from-gray-300 to-gray-600 border border-gray-900 shadow-[0_0_20px_rgba(0,0,0,0.45)] flex items-center gap-2 text-slate-900 font-bold">
                  <span className="text-2xl">🚂</span>
                  <span className="font-semibold text-xs md:text-sm tracking-wide uppercase text-white/90">
                    Skills Express
                  </span>
                </div>

                {/* Cargo containers */}
                {skillTrainSections.map((section) => {
                  const isActive = activeWagon === section.id;
                  return (
                    <div key={section.id} className="relative">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveWagon(isActive ? null : section.id)
                        }
                        className={`px-4 py-3 min-w-[130px] rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center gap-1
                          ${isActive
                            ? 'bg-white/20 border-blue-400 shadow-lg shadow-blue-500/40'
                            : 'bg-white/5 border-white/20 hover:bg-white/10 hover:border-blue-300'
                          }`}
                      >
                        <span className="text-lg">{section.icon}</span>
                        <span className="text-xs md:text-sm font-semibold text-gray-100 text-center">
                          {section.label}
                        </span>
                      </button>

                      {/* Skills popping out ABOVE the container */}
                      {isActive && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-full w-max max-w-xs md:max-w-sm flex flex-wrap justify-center gap-2 p-3 rounded-2xl bg-black/80 border border-blue-400/60 shadow-xl shadow-blue-500/40 backdrop-blur-md">
                          {section.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs md:text-sm text-gray-100"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-20 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'J.A.R.V.I.S.',
                description: 'AI voice assistant with real-time speech recognition and intelligent command execution',
                link: 'https://github.com/Shubhadip1004/JARVIS',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                name: 'Model Canvas v2',
                description: 'An interactive machine learning visualization platform that brings algorithms to life through real-time decision boundary visualization and performance metrics.',
                link: 'https://github.com/Shubhadip1004/Model-Canvas-v2',
                live: 'https://model-canvas-v2.vercel.app/',
                gradient: 'from-red-500 to-orange-500'
              },
              {
                name: 'Certificate Generator',
                description: 'Automated certificate generator processing 250+ certificates per minute',
                link: 'https://github.com/Shubhadip1004/Certificate-Generator',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                name: 'Quiz Application',
                description: 'Python Quiz App with MySQL backend and role-based access control',
                link: 'https://github.com/Shubhadip1004/Quiz_Application',
                gradient: 'from-pink-500 to-rose-500'
              },
              {
                name: 'SniffAI',
                description: 'A CNN Model with high accuracy in classifying real image and AI generated Image',
                link: 'https://github.com/Shubhadip1004/SniffAI',
                gradient: 'from-green-500 to-teal-500'
              },
              {
                name: 'Hangman Game',
                description: 'Interactive Tkinter GUI game with visual hangman display',
                link: 'https://github.com/Shubhadip1004/CodeAlpha_Hangman',
                gradient: 'from-yellow-500 to-orange-500'
              }
            ].map((project, index) => (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden transform transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-4 relative">
                    <div className={`p-3 bg-gradient-to-br ${project.gradient} rounded-xl transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                      <Code className="text-white" size={24} />
                    </div>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} // prevent redirect to GitHub when clicking Live
                        className="absolute top-0 right-0 mt-1 mr-1"
                      >
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-blue-500/20 border border-blue-400 text-blue-300 backdrop-blur-sm hover:scale-105 transition-all">
                          <span className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-ping"></span>
                          <span className="w-2.5 h-2.5 bg-blue-400 rounded-full absolute"></span>
                          Live
                        </span>
                      </a>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-20 text-center">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Certifications</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'OCI AI Foundations Associate', issuer: 'Oracle', date: 'October 2025', link: 'https://drive.google.com/file/d/1HrMT6wexXkJx1oTQ2eRds6L8-Kl-bIO4/view?usp=sharing' },
              { name: 'Cyber Suraksha', issuer: 'Microsoft | Tata Strive', date: 'May 2024', link: 'https://drive.google.com/file/d/1GrjDtrl-r8K37IsmbxdWjLYATzsyHJsX/view?usp=sharing' },
              { name: 'Machine Learning Specialization', issuer: 'DeepLearning.AI | Coursera', date: 'September 2023', link: 'https://drive.google.com/file/d/1yKV6QpcoI4yP1c2xc3TwZUXAOm8tl_aI/view?usp=sharing' },
              { name: 'Foundations of Data Science', issuer: 'Google | Coursera', date: 'August 2023', link: 'https://drive.google.com/file/d/1W5TK1qeHBbC3a_3zW6Bp2D-n8Mg4I6bm/view?usp=sharing' },
              { name: 'Full Stack Data Scientist', issuer: 'Udemy', date: '', link: 'https://drive.google.com/file/d/14iYwywBKQO5IujDhgaP-kS7AICZmGOBr/view?usp=sharing' },
              { name: 'The Bits and Bytes of Computer Networking', issuer: 'Google | Coursera', date: 'May 2023', link: 'https://drive.google.com/file/d/1dVIMGGmeGHpLzbJS066BkBk3OTIYnGEs/view?usp=sharing' }
            ].map((cert, index) => (
              <a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden transform transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 group-hover:from-yellow-500/20 group-hover:to-orange-500/20 transition-colors duration-500"></div>
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Award className="text-yellow-400 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-125" size={32} />
                    <ExternalLink className="text-gray-400 group-hover:text-white transition-colors" size={18} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm font-semibold text-orange-400 mb-1">{cert.issuer}</p>
                  {cert.date && <p className="text-sm text-gray-400">{cert.date}</p>}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-20 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Publications</span>
          </h2>

          <div className="group relative overflow-hidden transform transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 group-hover:from-emerald-500/20 group-hover:to-cyan-500/20 transition-colors duration-500"></div>
            <div className="relative p-10">
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl flex items-center justify-center text-3xl font-black transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    2025
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
                    Enhanced Black Hole Optimization: A Metaheuristics Approach to address optimization challenges
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-lg font-semibold text-green-400">
                      ACCEPTED - International Conference on Data Mining and Information Security
                    </p>
                  </div>
                  <p className="text-gray-300 text-lg">
                    Shubhadip Mahata, Soumyadip Paul, Partha Ghosh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-20 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Let's Connect</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
              <a
                href="mailto:shubhadip.w@gmail.com"
                className="group flex items-center gap-4 p-6 bg-gradient-to-r from-blue-500/10 to-transparent rounded-2xl hover:from-blue-500/20 transition-all duration-300 transform hover:translate-x-4"
              >
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg font-semibold">shubhadip.w@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+918942869813"
                className="group flex items-center gap-4 p-6 bg-gradient-to-r from-purple-500/10 to-transparent rounded-2xl hover:from-purple-500/20 transition-all duration-300 transform hover:translate-x-4"
              >
                <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-lg font-semibold">+91-8942869813</p>
                </div>
              </a>

              <div className="pt-8">
                <h4 className="text-xl font-bold mb-6">Social Media</h4>
                <div className="flex gap-4 flex-wrap">
                  {socialLinks.map(social => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-5 bg-gradient-to-br ${social.color} rounded-2xl transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 shadow-lg`}
                      title={social.name}
                    >
                      <social.icon size={28} className="text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Coding Platforms */}
            <div>
              <h3 className="text-3xl font-bold mb-8">Coding Profiles</h3>
              <div className="space-y-4">
                {codingPlatforms.map((platform, index) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-6 p-6 bg-gradient-to-r from-white/5 to-transparent rounded-2xl hover:from-white/10 transition-all duration-500 transform hover:translate-x-4 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <div className={`relative p-4 bg-gradient-to-br ${platform.color} rounded-xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                      <img src={platform.logo} alt={platform.name} className="w-8 h-8 object-contain invert" />
                    </div>
                    <div className="relative flex-1">
                      <p className="text-xl font-bold group-hover:translate-x-2 transition-transform duration-300">
                        {platform.name}
                      </p>
                    </div>
                    <ExternalLink className="relative text-gray-400 group-hover:text-white transition-colors" size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/10 text-center">
            <p className="text-gray-400">
              © 2025 Shubhadip Mahata. Crafted with <span className="text-red-500 animate-pulse">❤</span> and <span className="text-blue-400">Code</span>
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes train-ellipse {
          0%   { transform: translateX(-10%) translateY(0); }
          25%  { transform: translateX(0) translateY(-10%); }
          50%  { transform: translateX(10%) translateY(0); }
          75%  { transform: translateX(0) translateY(10%); }
          100% { transform: translateX(-10%) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
