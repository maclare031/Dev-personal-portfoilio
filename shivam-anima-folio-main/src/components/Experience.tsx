import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, TrendingUp, Users, Code, Target } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const responsibilities = [
    {
      icon: <Code className="h-5 w-5" />,
      title: "Full Stack Development",
      description: "Engineered scalable full-stack applications with responsive interfaces and robust backend systems",
      color: "text-primary"
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Solution Architecture",
      description: "Recommended solutions highlighting the product's unique selling proposition (USP)",
      color: "text-accent"
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Lead Generation",
      description: "Generated leads via LinkedIn, calls, and referrals, converting prospects into active clients",
      color: "text-primary"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Client Relations",
      description: "Strengthened strategic client relationships, boosting upselling and cross-selling opportunities",
      color: "text-accent"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience combining technical development with business growth
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent opacity-30 hidden lg:block" />

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background z-10 hidden lg:block" />
            
            <div className="lg:w-1/2 lg:pr-12 lg:ml-auto">
              <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-hover transition-all duration-500 interactive-hover">
                {/* Company Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Algoforge Studios</h3>
                      <p className="text-lg font-semibold text-primary">Full Stack Developer Intern</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                    Internship
                  </Badge>
                </div>

                {/* Duration and Location */}
                <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>July 2024 – September 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Remote</span>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold text-foreground">Key Responsibilities & Achievements</h4>
                  <div className="grid gap-4">
                    {responsibilities.map((responsibility, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/30"
                      >
                        <div className={`${responsibility.color} flex-shrink-0 mt-1`}>
                          {responsibility.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">{responsibility.title}</h5>
                          <p className="text-muted-foreground text-sm">{responsibility.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Impact Statement */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="bg-primary/5 border border-primary/20 rounded-lg p-4"
                >
                  <p className="text-sm text-muted-foreground italic">
                    "Collaborated with the development team to enhance customer satisfaction and engagement 
                    while successfully bridging the gap between technical implementation and business objectives."
                  </p>
                </motion.div>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Skills Gained */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-6 text-foreground">Skills Gained & Enhanced</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Full Stack Development",
              "Client Relationship Management", 
              "Lead Generation",
              "Sales Strategy",
              "Team Collaboration",
              "Product USP Development",
              "Customer Satisfaction",
              "Cross-functional Communication"
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                className="px-3 py-2 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-medium border border-border/50 hover:bg-secondary/70 transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;