import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, X, Monitor, Bot, Recycle } from "lucide-react";
import lmsImage from "@/assets/project-lms.jpg";
import chatbotImage from "@/assets/project-chatbot.jpg";
import wasteImage from "@/assets/project-waste.jpg";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Learning Management System (LMS)",
      description: "A comprehensive LMS platform enabling course creation, student enrollment, and progress tracking with secure authentication and role-based access control.",
      image: lmsImage,
      icon: <Monitor className="h-6 w-6" />,
      techStack: ["Next.js", "Node.js", "MongoDB", "HTML/CSS", "JavaScript"],
      features: [
        "Secure user authentication & role-based access",
        "Interactive dashboards for students and instructors", 
        "Course creation and enrollment system",
        "Progress tracking and analytics",
        "Responsive design for all devices"
      ],
      githubUrl: "https://github.com/maclare031",
      demoUrl: "#",
      color: "from-primary to-primary/70"
    },
    {
      id: 2,
      title: "AI Chatbot with Gemini API",
      description: "An intelligent AI-powered chatbot leveraging Google's Gemini API for natural language understanding and context-aware responses.",
      image: chatbotImage,
      icon: <Bot className="h-6 w-6" />,
      techStack: ["JavaScript", "Node.js", "Gemini API", "HTML/CSS"],
      features: [
        "Google Gemini API integration for intelligent responses",
        "Context-aware conversation handling",
        "Natural language understanding capabilities",
        "Clean and intuitive web interface",
        "Real-time chat functionality"
      ],
      githubUrl: "https://github.com/maclare031",
      demoUrl: "#",
      color: "from-accent to-accent/70"
    },
    {
      id: 3,
      title: "Waste Type Classifier",
      description: "A machine learning model that classifies waste into categories (organic, recyclable, hazardous) with real-time prediction capabilities.",
      image: wasteImage,
      icon: <Recycle className="h-6 w-6" />,
      techStack: ["Python", "TensorFlow/Keras", "OpenCV", "Flask"],
      features: [
        "ML model for waste classification",
        "Image preprocessing and data augmentation",
        "Real-time prediction web interface",
        "Multiple waste category support",
        "High accuracy classification results"
      ],
      githubUrl: "https://github.com/maclare031",
      demoUrl: "#",
      color: "from-primary to-accent"
    }
  ];

  const openProject = (id: number) => {
    setSelectedProject(id);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing technical expertise through innovative web applications and intelligent systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="project-card overflow-hidden cursor-pointer h-full group">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-70 transition-opacity duration-300`} />
                  <div className="absolute top-4 left-4 p-2 bg-background/90 rounded-lg backdrop-blur-sm">
                    <div className="text-primary">{project.icon}</div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.techStack.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="default"
                      onClick={() => openProject(project.id)}
                      className="flex-1 bg-primary hover:bg-primary/90"
                    >
                      View Details
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="px-3"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && closeProject()}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProjectData && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-primary">{selectedProjectData.icon}</div>
                    <DialogTitle className="text-2xl">{selectedProjectData.title}</DialogTitle>
                  </div>
                  <DialogDescription className="text-base">
                    {selectedProjectData.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={selectedProjectData.image} 
                      alt={selectedProjectData.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${selectedProjectData.color} opacity-20`} />
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {selectedProjectData.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectData.techStack.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      onClick={() => window.open(selectedProjectData.githubUrl, '_blank')}
                      className="flex-1"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => window.open(selectedProjectData.demoUrl, '_blank')}
                      className="flex-1"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;