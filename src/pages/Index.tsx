import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import {
  SectionWrapper,
  SectionHeading,
  FeatureCard,
  StatCard,
  TestimonialCard,
} from "@/components/sections";
import {
  Zap,
  Bot,
  Users,
  BarChart3,
  Headphones,
  Puzzle,
  Database,
  Settings,
  ArrowRight,
  CheckCircle2,
  Play,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "AI Workflow Automation",
    description:
      "Automate repetitive tasks and streamline operations with intelligent AI-powered workflows that adapt to your business needs.",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Intelligent Chatbots",
    description:
      "Deploy 24/7 AI assistants that handle customer inquiries, qualify leads, and provide instant support across all channels.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "CRM & Lead Automation",
    description:
      "Never miss a lead with automated nurturing sequences, smart scoring, and seamless CRM integrations.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "AI Customer Support",
    description:
      "Reduce response times by 80% with AI-powered support systems that resolve issues instantly.",
  },
  {
    icon: <Puzzle className="w-6 h-6" />,
    title: "AI Tool Integrations",
    description:
      "Connect your favorite tools with custom AI integrations that work seamlessly with your existing stack.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data Analytics AI",
    description:
      "Transform raw data into actionable insights with AI-powered analytics and automated reporting.",
  },
];

const stats = [
  { value: "500+", label: "Businesses Transformed" },
  { value: "10M+", label: "Tasks Automated" },
  { value: "85%", label: "Cost Reduction" },
  { value: "24/7", label: "AI Support" },
];

const testimonials = [
  {
    quote:
      "ExosphereX A.I transformed our customer service. We now handle 3x more inquiries with half the team. The ROI was visible within the first month.",
    author: "Sarah Chen",
    role: "COO",
    company: "TechFlow Inc.",
  },
  {
    quote:
      "The lead automation system they built for us has increased our conversion rate by 150%. It's like having a sales team that never sleeps.",
    author: "Marcus Johnson",
    role: "Head of Sales",
    company: "GrowthMaster",
  },
  {
    quote:
      "Implementation was seamless, and the team's expertise in AI is unmatched. Our operational efficiency has improved dramatically.",
    author: "Emily Rodriguez",
    role: "CEO",
    company: "Innovate Labs",
  },
];

const benefits = [
  "Save 20+ hours weekly on manual tasks",
  "Reduce operational costs by up to 85%",
  "Scale without adding headcount",
  "24/7 automated customer engagement",
  "Real-time insights and analytics",
  "Seamless integration with your tools",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 radial-glow" />
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="container-custom relative z-10 pt-24 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-6">
                AI Automation for Modern Business
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              Scale Your Business with{" "}
              <span className="gradient-text text-glow">Intelligent AI</span> Automation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Automate workflows, increase efficiency, and accelerate growth with
              enterprise-grade AI solutions designed for modern businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="hero-outline" size="xl">
                  <Play className="w-5 h-5 mr-2" />
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 glass-card p-4 md:p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {stats.map((stat, index) => (
                <StatCard key={stat.label} {...stat} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <SectionWrapper withPattern withGlow>
        <SectionHeading
          badge="Our Services"
          title="AI Solutions That Drive Results"
          subtitle="From workflow automation to intelligent chatbots, we provide end-to-end AI solutions tailored to your business needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FeatureCard key={service.title} {...service} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="hero-outline" size="lg">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </SectionWrapper>

      {/* Benefits Section */}
      <SectionWrapper className="bg-surface-1">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionHeading
              badge="Why AI Automation"
              title="Work Smarter, Not Harder"
              subtitle="Stop wasting time on repetitive tasks. Let AI handle the heavy lifting while you focus on strategic growth."
              centered={false}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/why-us">
                <Button variant="hero" size="lg">
                  See Why Businesses Choose Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-card p-8 md:p-12 glow">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Settings className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-semibold text-foreground">
                      Custom AI Solutions
                    </h4>
                    <p className="text-muted-foreground">Tailored to your needs</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-3 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">95% Automation Rate</p>
                </div>
                <div className="space-y-4">
                  <div className="h-3 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">85% Cost Reduction</p>
                </div>
                <div className="space-y-4">
                  <div className="h-3 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">24/7 Availability</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper withGlow>
        <SectionHeading
          badge="Testimonials"
          title="Trusted by Industry Leaders"
          subtitle="See how businesses like yours have transformed their operations with our AI automation solutions."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.author} {...testimonial} index={index} />
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-surface-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-16 text-center relative overflow-hidden glow"
        >
          <div className="absolute inset-0 radial-glow" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discover how AI automation can
              revolutionize your operations and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="hero-outline" size="xl">
                  Learn How It Works
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default Index;
