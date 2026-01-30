import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { SectionWrapper, SectionHeading, ProcessStep } from "@/components/sections";
import { ArrowRight, Search, Lightbulb, Settings, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Discovery & Business Audit",
    description:
      "We start by understanding your business inside and out. Our team conducts a comprehensive audit of your current workflows, identifies bottlenecks, and uncovers automation opportunities that will deliver the highest ROI.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Strategy & Solution Design",
    description:
      "Based on our findings, we craft a custom AI automation strategy tailored to your specific needs. We design solutions that integrate seamlessly with your existing systems and scale with your growth.",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "AI Implementation & Integration",
    description:
      "Our expert team builds and implements your AI solutions using cutting-edge technology. We handle all technical aspects, from model training to system integration, ensuring minimal disruption to your operations.",
  },
  {
    icon: <TestTube className="w-6 h-6" />,
    title: "Testing & Optimization",
    description:
      "Before going live, we rigorously test every aspect of your AI systems. We fine-tune performance, optimize for accuracy, and ensure everything works flawlessly under real-world conditions.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Launch & Continuous Support",
    description:
      "Once everything is perfect, we launch your AI solutions. But our partnership doesn't end there—we provide ongoing support, monitoring, and optimization to ensure sustained success.",
  },
];

const timeline = [
  { week: "Week 1-2", phase: "Discovery", description: "Business audit and requirement gathering" },
  { week: "Week 2-3", phase: "Design", description: "Solution architecture and planning" },
  { week: "Week 3-6", phase: "Build", description: "Development and integration" },
  { week: "Week 6-7", phase: "Test", description: "Quality assurance and optimization" },
  { week: "Week 7-8", phase: "Launch", description: "Deployment and training" },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 radial-glow" />
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-6"
            >
              Our Process
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              How We <span className="gradient-text">Transform</span> Your Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Our proven 5-step process ensures seamless AI implementation with minimal disruption and maximum results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <SectionWrapper withPattern>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.title}
              step={index + 1}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper className="bg-surface-1">
        <SectionHeading
          badge="Timeline"
          title="Typical Implementation Timeline"
          subtitle="Most projects are completed within 6-8 weeks, depending on complexity."
        />

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max md:min-w-0 md:grid md:grid-cols-5">
            {timeline.map((item, index) => (
              <motion.div
                key={item.week}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-1 glass-card p-6 text-center relative group hover:border-primary/30 transition-all duration-300"
              >
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-primary to-transparent z-10" />
                )}
                <div className="text-sm text-primary font-semibold mb-2">{item.week}</div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.phase}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* What to Expect */}
      <SectionWrapper>
        <SectionHeading
          badge="What to Expect"
          title="A Partnership Built on Transparency"
          subtitle="We believe in clear communication and complete transparency throughout the entire process."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Weekly Updates",
              description: "Regular progress reports and check-ins to keep you informed every step of the way.",
            },
            {
              title: "Dedicated Team",
              description: "A dedicated project manager and technical team assigned to your project from start to finish.",
            },
            {
              title: "Full Documentation",
              description: "Comprehensive documentation and training materials to ensure your team can manage and optimize the systems.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-surface-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-16 text-center glow"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's begin your AI automation journey with a free consultation and business audit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/solutions">
              <Button variant="hero-outline" size="xl">
                View Solutions
              </Button>
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default HowItWorks;
