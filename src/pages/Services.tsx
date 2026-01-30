import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { SectionWrapper, SectionHeading } from "@/components/sections";
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
} from "lucide-react";

const services = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "AI Business Workflow Automation",
    description: "Streamline your entire operation with intelligent automation that learns and adapts to your business processes.",
    features: [
      "End-to-end process automation",
      "Smart task routing and prioritization",
      "Automated data entry and validation",
      "Cross-platform workflow integration",
    ],
    outcomes: ["60% reduction in manual tasks", "3x faster processing times", "99.9% accuracy rate"],
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Intelligent Chatbots & AI Assistants",
    description: "Deploy sophisticated conversational AI that handles customer inquiries, qualifies leads, and provides 24/7 support.",
    features: [
      "Natural language understanding",
      "Multi-channel deployment (web, SMS, social)",
      "Lead qualification and routing",
      "Seamless human handoff",
    ],
    outcomes: ["90% query resolution rate", "24/7 availability", "50% reduction in support costs"],
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "CRM & Lead Automation",
    description: "Never miss an opportunity with automated lead nurturing, smart scoring, and seamless CRM integrations.",
    features: [
      "Automated lead scoring and segmentation",
      "Personalized nurturing sequences",
      "CRM sync and enrichment",
      "Predictive lead prioritization",
    ],
    outcomes: ["150% increase in qualified leads", "40% higher conversion rates", "Automated follow-ups"],
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Automated Customer Support",
    description: "Reduce response times dramatically with AI-powered support systems that resolve issues instantly.",
    features: [
      "AI ticket classification and routing",
      "Automated response suggestions",
      "Self-service knowledge bases",
      "Sentiment analysis and escalation",
    ],
    outcomes: ["80% faster response times", "60% ticket deflection", "Higher customer satisfaction"],
  },
  {
    icon: <Puzzle className="w-8 h-8" />,
    title: "AI Integrations with Tools",
    description: "Connect your favorite tools with custom AI integrations that work seamlessly with your existing stack.",
    features: [
      "500+ pre-built integrations",
      "Custom API development",
      "Real-time data synchronization",
      "Unified workflow orchestration",
    ],
    outcomes: ["Eliminate data silos", "Unified operations", "Seamless tool ecosystem"],
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data & Analytics Automation",
    description: "Transform raw data into actionable insights with AI-powered analytics and automated reporting.",
    features: [
      "Automated data collection and cleaning",
      "Predictive analytics and forecasting",
      "Real-time dashboards and alerts",
      "Custom report generation",
    ],
    outcomes: ["Data-driven decisions", "Predictive insights", "Automated reporting"],
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Custom AI Solutions",
    description: "Need something unique? Our team builds bespoke AI solutions tailored to your specific business challenges.",
    features: [
      "Custom AI model development",
      "Industry-specific solutions",
      "Enterprise-grade architecture",
      "Scalable and secure deployment",
    ],
    outcomes: ["Tailored to your needs", "Competitive advantage", "Scalable infrastructure"],
  },
];

const Services = () => {
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
              Our Services
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              <span className="gradient-text">AI Solutions</span> for Every Business Need
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              From workflow automation to intelligent chatbots, we provide comprehensive AI solutions that drive real results for your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get a Custom Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <SectionWrapper withPattern>
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`glass-card p-8 md:p-12 ${index % 2 === 0 ? "" : ""}`}
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground mb-6">
                    {service.icon}
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link to="/contact">
                    <Button variant="hero-outline">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Expected Outcomes</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.outcomes.map((outcome) => (
                        <span
                          key={outcome}
                          className="px-3 py-1.5 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
                        >
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
            Not Sure Which Service is Right for You?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Book a free consultation and we'll help you identify the best AI solutions for your specific business needs.
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
                See How It Works
              </Button>
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default Services;
