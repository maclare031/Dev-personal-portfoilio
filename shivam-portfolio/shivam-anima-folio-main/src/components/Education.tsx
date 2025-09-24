import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, BookOpen, Award } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "BBD Engineering College, Lucknow",
      period: "2022 - 2026 (Expected)",
      status: "In Progress",
      description: "Focused on software engineering, algorithms, data structures, and modern development practices.",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "primary",
      achievements: [
        "Strong foundation in programming and software engineering",
        "Completed multiple full-stack development projects",
        "Active participation in technical workshops and seminars"
      ]
    },
    {
      id: 2,
      degree: "Intermediate",
      field: "Science Stream",
      institution: "RPM Children's Academy",
      period: "2020 - 2022",
      status: "Completed",
      grade: "65%",
      description: "Completed intermediate education with focus on mathematics, physics, and chemistry.",
      icon: <BookOpen className="h-6 w-6" />,
      color: "accent",
      achievements: [
        "Solid foundation in mathematics and analytical thinking",
        "Developed problem-solving and logical reasoning skills"
      ]
    },
    {
      id: 3,
      degree: "High School",
      field: "General Studies",
      institution: "RPM Children's Academy",
      period: "2018 - 2020",
      status: "Completed",
      grade: "77%",
      description: "Completed secondary education with strong academic performance.",
      icon: <Award className="h-6 w-6" />,
      color: "primary",
      achievements: [
        "Achieved 77% marks demonstrating consistent academic performance",
        "Built strong foundation for higher education"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic journey building the foundation for technical and analytical excellence
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

          <div className="space-y-12">
            {educationData.map((education, index) => (
              <motion.div
                key={education.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-background rounded-full" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-hover transition-all duration-500 interactive-hover">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-${education.color}/10 rounded-lg`}>
                          <div className={`text-${education.color}`}>{education.icon}</div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{education.degree}</h3>
                          <p className="text-sm text-muted-foreground">{education.field}</p>
                        </div>
                      </div>
                      <Badge 
                        variant={education.status === "In Progress" ? "default" : "secondary"}
                        className={education.status === "In Progress" ? "bg-primary/10 text-primary" : ""}
                      >
                        {education.status}
                      </Badge>
                    </div>

                    {/* Institution and Period */}
                    <div className="space-y-2 mb-4">
                      <p className="font-semibold text-foreground">{education.institution}</p>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{education.period}</span>
                        {education.grade && (
                          <>
                            <span className="mx-2">•</span>
                            <span className="font-medium">Grade: {education.grade}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4">{education.description}</p>

                    {/* Achievements */}
                    {education.achievements && (
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-foreground">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {education.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <div className={`w-1.5 h-1.5 bg-${education.color} rounded-full flex-shrink-0 mt-1.5`} />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-card border-border/50 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-primary">Academic Focus Areas</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">2026</div>
                <p className="text-sm text-muted-foreground">Expected Graduation</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">CSE</div>
                <p className="text-sm text-muted-foreground">Computer Science & Engineering</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">4+</div>
                <p className="text-sm text-muted-foreground">Years of Technical Study</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;