import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { SectionWrapper, SectionHeading } from "@/components/sections";
import { Brain, Target, Gauge, Rocket, Headphones, Shield, ArrowRight, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Deep AI Expertise",
    description: "Our team consists of AI specialists, data scientists, and automation experts with decades of combined experience.",
    points: [
      "PhD-level AI researchers on staff",
      "Certified in all major AI platforms",
      "Continuous learning and innovation",
      "Industry-leading methodologies",
    ],
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Tailored Solutions",
    description: "No cookie-cutter approaches. Every solution is custom-built to address your unique business challenges.",
    points: [
      "In-depth business analysis",
      "Custom AI model development",
      "Flexible architecture design",
      "Industry-specific optimization",
    ],
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "Measurable ROI",
    description: "We focus on delivering tangible, measurable results that directly impact your bottom line.",
    points: [
      "Clear success metrics defined upfront",
      "Regular performance reporting",
      "ROI tracking and optimization",
      "Cost-benefit transparency",
    ],
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Rapid Deployment",
    description: "Our proven methodology enables fast implementation without sacrificing quality or reliability.",
    points: [
      "Agile development approach",
      "Phased rollout strategy",
      "Minimal business disruption",
      "Quick time-to-value",
    ],
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Continuous Support",
    description: "Our partnership doesn't end at launch. We provide ongoing support to ensure sustained success.",
    points: [
      "24/7 technical support",
      "Regular system updates",
      "Performance optimization",
      "Dedicated success manager",
    ],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "Your data security is paramount. We implement bank-level security in every solution we build.",
    points: [
      "SOC 2 compliant infrastructure",
      "End-to-end encryption",
      "Regular security audits",
      "GDPR and CCPA compliant",
    ],
  },
];

const WhyUs = () => {
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
              Why Choose Us
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              The <span className="gradient-text">ExosphereX</span> Advantage
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Discover why hundreds of businesses trust ExosphereX A.I to power their AI automation journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <SectionWrapper withPattern>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground mb-6">{reason.description}</p>
              <ul className="space-y-2">
                {reason.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Comparison */}
      <SectionWrapper className="bg-surface-1">
        <SectionHeading
          badge="The Difference"
          title="Traditional vs ExosphereX Approach"
          subtitle="See how our approach compares to traditional automation providers"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 border-destructive/20"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-6">Traditional Providers</h3>
            <ul className="space-y-4">
              {[
                "Generic, one-size-fits-all solutions",
                "Long implementation timelines",
                "Limited customization options",
                "Basic support and maintenance",
                "Hidden costs and fees",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-destructive">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 border-primary/30 glow-sm"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-6">ExosphereX A.I</h3>
            <ul className="space-y-4">
              {[
                "Custom-built solutions for your needs",
                "Rapid 6-8 week deployment",
                "Fully customizable architecture",
                "24/7 dedicated support team",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-16 text-center glow"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Join hundreds of businesses that have transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default WhyUs;
