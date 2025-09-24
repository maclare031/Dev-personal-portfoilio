import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Code, TrendingUp, Users, Target } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full Stack Development",
      description: "Building scalable applications with modern tech stack"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Business Strategy",
      description: "Driving revenue growth through strategic sales approaches"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client Relations",
      description: "Strengthening partnerships and maximizing client satisfaction"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Lead Generation",
      description: "Converting prospects into active clients via multiple channels"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A unique blend of technical expertise and business acumen
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-foreground max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm an ambitious and driven professional with a unique skill set spanning 
                <span className="text-primary font-semibold"> Full Stack Development</span> and 
                <span className="text-accent font-semibold"> Business Development</span>.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                My experience ranges from engineering scalable web applications with responsive 
                interfaces and robust backend systems to generating leads through strategic 
                outreach and converting prospects into active clients.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-card border border-border rounded-lg p-6 mt-8"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">Career Objective</h3>
                <p className="text-muted-foreground italic">
                  "Seeking opportunities where I can combine my technical knowledge with strategic 
                  sales and client engagement to deliver impactful business solutions."
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={aboutImage} 
                alt="Professional workspace" 
                className="w-full h-auto rounded-2xl shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
            >
              <Card className="p-6 h-full bg-gradient-card border-border/50 interactive-hover">
                <div className="text-primary mb-4">{highlight.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;