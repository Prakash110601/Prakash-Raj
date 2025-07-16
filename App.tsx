import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Badge } from './components/ui/badge';
import prakashProfile from 'figma:asset/1ff967503730bd8b86a583b88a29fe3f03965e3a.png';
import { 
  Instagram, 
  Youtube, 
  Mail, 
  ExternalLink, 
  Video, 
  Camera, 
  Film,
  ArrowUp,
  Menu,
  X,
  Play,
  Award,
  Clock,
  Star,
  Zap,
  Eye,
  Download
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      id: 1,
      title: "Cinematic Wedding Film",
      description: "A breathtaking wedding documentary with emotional storytelling and stunning visuals",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      tech: ["Premiere Pro", "After Effects", "Color Grading", "4K"],
      demo: "#",
      duration: "8:30",
      views: "125K",
      category: "wedding"
    },
    {
      id: 2,
      title: "Corporate Brand Video",
      description: "Modern corporate video with dynamic motion graphics and professional presentation",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop",
      tech: ["Premiere Pro", "Motion Graphics", "Audio Mix", "Brand Identity"],
      demo: "#",
      duration: "3:45",
      views: "89K",
      category: "corporate"
    },
    {
      id: 3,
      title: "Music Video Production",
      description: "High-energy music video with creative cuts, effects, and rhythm synchronization",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      tech: ["Davinci Resolve", "Color Correction", "Beat Sync", "VFX"],
      demo: "#",
      duration: "4:12",
      views: "234K",
      category: "music"
    },
    {
      id: 4,
      title: "Documentary Series",
      description: "Compelling documentary series with investigative storytelling and cinematic quality",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      tech: ["Final Cut Pro", "Multicam Edit", "Audio Design", "Interviews"],
      demo: "#",
      duration: "25:00",
      views: "456K",
      category: "documentary"
    },
    {
      id: 5,
      title: "Social Media Campaign",
      description: "Viral social media content with trending effects and engaging storytelling",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      tech: ["CapCut", "Trending Effects", "Quick Cuts", "Mobile Optimized"],
      demo: "#",
      duration: "1:30",
      views: "1.2M",
      category: "social"
    },
    {
      id: 6,
      title: "Product Advertisement",
      description: "Sleek product showcase with macro shots and smooth transitions",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      tech: ["Premiere Pro", "Product Shots", "3D Animation", "Commercial"],
      demo: "#",
      duration: "2:15",
      views: "78K",
      category: "commercial"
    }
  ];

  const skills = [
    { name: "Adobe Premiere Pro", level: 98, icon: Video },
    { name: "Adobe After Effects", level: 95, icon: Zap },
    { name: "DaVinci Resolve", level: 90, icon: Eye },
    { name: "Final Cut Pro", level: 88, icon: Film },
    { name: "Color Grading", level: 92, icon: Camera },
    { name: "Motion Graphics", level: 85, icon: Star }
  ];

  const stats = [
    { label: "Projects Completed", value: "150+", icon: Award },
    { label: "Years Experience", value: "8+", icon: Clock },
    { label: "Happy Clients", value: "200+", icon: Star },
    { label: "Total Views", value: "5M+", icon: Eye }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent cursor-pointer"
            >
              PRAKASH RAJ
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'portfolio', 'skills', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`capitalize transition-all duration-300 relative group ${
                    activeSection === section 
                      ? 'text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text' 
                      : 'text-muted-foreground hover:text-white'
                  }`}
                >
                  {section}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-gradient-to-b from-background/95 to-background/90 backdrop-blur-xl border-t border-border/50"
            >
              <div className="px-4 py-2 space-y-1">
                {['home', 'about', 'portfolio', 'skills', 'contact'].map((section) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    whileHover={{ x: 10, backgroundColor: 'rgba(168, 85, 247, 0.1)' }}
                    className="block w-full text-left px-3 py-2 capitalize transition-colors rounded-md"
                  >
                    {section}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&h=1080&fit=crop"
            alt="Video editing setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-pink-900/30" />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                <Film className="w-16 h-16 text-white" />
              </div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
          >
            PRAKASH RAJ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            Professional Video Editor &amp; Cinematic Storyteller
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection('portfolio')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-8 py-3"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch My Work
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3"
              >
                Hire Me
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-background to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate video editor with over 8 years of experience in creating 
                compelling visual narratives. From cinematic wedding films to viral social media 
                content, I bring stories to life through the art of editing, color grading, and 
                motion graphics.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                My expertise spans across all major editing platforms, and I specialize in 
                creating content that not only looks stunning but also resonates emotionally 
                with audiences. Every frame tells a story, and I'm here to help you tell yours.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Badge variant="secondary" className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30">
                    <Video className="w-4 h-4 mr-2" />
                    Video Editor
                  </Badge>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Badge variant="secondary" className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30">
                    <Camera className="w-4 h-4 mr-2" />
                    Color Grader
                  </Badge>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Badge variant="secondary" className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30">
                    <Film className="w-4 h-4 mr-2" />
                    Storyteller
                  </Badge>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl" />
                <img
                  src={prakashProfile}
                  alt="Prakash Raj profile"
                  className="w-full h-96 object-cover rounded-2xl relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
                
                {/* Floating play button */}
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-900/5 to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              My Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my finest video editing work across different genres and styles
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
              <TabsTrigger value="all" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500">All</TabsTrigger>
              <TabsTrigger value="wedding" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500">Wedding</TabsTrigger>
              <TabsTrigger value="corporate" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500">Corporate</TabsTrigger>
              <TabsTrigger value="music" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500">Music</TabsTrigger>
              <TabsTrigger value="social" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500">Social</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                    whileHover={{ y: -10 }}
                  >
                    <Card className="overflow-hidden group bg-gradient-to-br from-card/50 to-card/80 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-500">
                      <div className="relative overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                          />
                        </motion.div>
                        
                        {/* Overlay */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-purple-600/80 via-pink-600/80 to-purple-800/80 flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="text-center text-white">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm cursor-pointer"
                            >
                              <Play className="w-8 h-8" />
                            </motion.div>
                            <div className="flex space-x-4 justify-center">
                              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  View
                                </Button>
                              </motion.div>
                              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30">
                                  <Download className="w-4 h-4 mr-2" />
                                  Download
                                </Button>
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Video stats */}
                        <div className="absolute top-4 left-4 flex space-x-2">
                          <Badge className="bg-black/50 text-white backdrop-blur-sm">
                            <Clock className="w-3 h-3 mr-1" />
                            {project.duration}
                          </Badge>
                          <Badge className="bg-black/50 text-white backdrop-blur-sm">
                            <Eye className="w-3 h-3 mr-1" />
                            {project.views}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <motion.div key={tech} whileHover={{ scale: 1.05 }}>
                              <Badge variant="outline" className="text-xs border-purple-500/30 hover:bg-purple-500/10">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            {['wedding', 'corporate', 'music', 'social'].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects
                    .filter(project => project.category === category)
                    .map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                      >
                        <Card className="overflow-hidden group bg-gradient-to-br from-card/50 to-card/80 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-500">
                          <div className="relative overflow-hidden">
                            <ImageWithFallback
                              src={project.image}
                              alt={project.title}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4 flex space-x-2">
                              <Badge className="bg-black/50 text-white backdrop-blur-sm">
                                <Clock className="w-3 h-3 mr-1" />
                                {project.duration}
                              </Badge>
                              <Badge className="bg-black/50 text-white backdrop-blur-sm">
                                <Eye className="w-3 h-3 mr-1" />
                                {project.views}
                              </Badge>
                            </div>
                          </div>
                          <CardContent className="p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                              {project.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs border-purple-500/30">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-pink-900/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Skills &amp; Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional tools and techniques I master to create stunning visual content
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="space-y-4 p-6 rounded-lg bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm border border-border/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                    >
                      <skill.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <span className="font-medium text-lg">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      animate={{ x: ['0%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-background to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Let's Create Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's discuss your next video project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Mail, title: "Email", info: "prakashraj@example.com", color: "from-blue-500 to-cyan-500" },
              { icon: Youtube, title: "YouTube", info: "youtube.com/prakashraj", color: "from-red-500 to-pink-500" },
              { icon: Instagram, title: "Instagram", info: "@prakashraj_editor", color: "from-purple-500 to-pink-500" }
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <Card className="p-8 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50`}
                  >
                    <contact.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    {contact.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {contact.info}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-12 py-4 text-lg rounded-full border-0"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900/20 via-background to-pink-900/20 py-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            &copy; 2025 PRAKASH RAJ. All rights reserved. | Crafted with passion for visual storytelling
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)' }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg z-50"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}