import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { SectionWrapper, SectionHeading, StatCard } from "@/components/sections";
import { Target, Eye, Users, Award, Lightbulb, Shield, ArrowRight } from "lucide-react";

const values = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation First",
    description: "We stay ahead of the curve, constantly exploring new AI technologies to deliver cutting-edge solutions.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Results-Driven",
    description: "Every solution we build is designed to deliver measurable ROI and tangible business outcomes.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Client Partnership",
    description: "We work as an extension of your team, understanding your unique challenges and goals.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Trust & Security",
    description: "Your data security is our priority. We implement enterprise-grade security in every solution.",
  },
];

const stats = [
  { value: "2019", label: "Founded" },
  { value: "50+", label: "Team Members" },
  { value: "500+", label: "Projects Delivered" },
  { value: "12+", label: "Countries Served" },
];

const About = () => {
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
              About Us
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Pioneering the Future of{" "}
              <span className="gradient-text">Business Automation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              ExosphereX A.I was founded with a singular mission: to democratize AI automation and make it accessible to businesses of all sizes.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <SectionWrapper withPattern>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-10"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary-foreground" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses worldwide with intelligent AI automation solutions that eliminate inefficiencies, reduce costs, and unlock unprecedented growth potential. We believe every business deserves access to enterprise-grade AI capabilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-10"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary-foreground" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Vision
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To become the global leader in AI-driven business transformation, creating a world where intelligent automation frees humans to focus on creativity, strategy, and meaningful work. We envision AI as a partner, not a replacement.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper className="bg-surface-1">
        <div className="glass-card p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} {...stat} index={index} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Our Story */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            badge="Our Story"
            title="From Vision to Reality"
            subtitle="How we became a trusted partner for businesses worldwide"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg prose-invert mx-auto"
          >
            <div className="glass-card p-8 md:p-12 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                ExosphereX A.I was born from a simple observation: businesses were drowning in repetitive tasks while struggling to leverage the power of artificial intelligence. Our founders, veterans of the tech and AI industries, saw an opportunity to bridge this gap.
              </p>
              <p>
                Since our founding in 2019, we've helped over 500 businesses across 12 countries transform their operations with custom AI solutions. From startups to enterprises, we've built a reputation for delivering measurable results and exceptional client partnerships.
              </p>
              <p>
                Today, we're a team of 50+ AI specialists, developers, and strategists united by a common goal: to make AI automation accessible, practical, and impactful for every business we serve.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-surface-1" withGlow>
        <SectionHeading
          badge="Our Values"
          title="What Drives Us"
          subtitle="The principles that guide everything we do"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-primary">{value.icon}</div>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
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
            Ready to Work with Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how we can help transform your business with intelligent AI automation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Start a Conversation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="hero-outline" size="xl">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default About;
