import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { SectionWrapper, SectionHeading } from "@/components/sections";
import { ShoppingCart, Briefcase, Cloud, Store, Headphones, ArrowRight, CheckCircle2 } from "lucide-react";

const industries = [
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-Commerce",
    description: "Automate order processing, inventory management, customer service, and personalized marketing.",
    useCases: [
      "Automated order fulfillment and tracking",
      "AI-powered product recommendations",
      "Chatbot for customer inquiries and returns",
      "Inventory prediction and restocking alerts",
      "Personalized email marketing automation",
    ],
    results: "45% increase in sales, 60% reduction in support tickets",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Service Businesses",
    description: "Streamline appointments, client communication, invoicing, and project management.",
    useCases: [
      "Automated scheduling and reminders",
      "Client onboarding automation",
      "Invoice generation and payment follow-ups",
      "Project status updates and reporting",
      "Lead capture and qualification",
    ],
    results: "30% more client capacity, 50% faster onboarding",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "SaaS Companies",
    description: "Improve user onboarding, reduce churn, and automate customer success workflows.",
    useCases: [
      "Automated user onboarding sequences",
      "Churn prediction and prevention",
      "Usage-based upsell triggers",
      "Support ticket classification and routing",
      "Product feedback collection and analysis",
    ],
    results: "40% reduction in churn, 25% increase in upsells",
  },
  {
    icon: <Store className="w-8 h-8" />,
    title: "Retail",
    description: "Enhance in-store and online experiences with intelligent automation and analytics.",
    useCases: [
      "Omnichannel customer engagement",
      "Dynamic pricing optimization",
      "Demand forecasting and planning",
      "Staff scheduling automation",
      "Customer loyalty program automation",
    ],
    results: "35% higher customer retention, 20% cost savings",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Customer Support Centers",
    description: "Transform support operations with AI-powered agents and intelligent routing.",
    useCases: [
      "AI-first customer service automation",
      "Intelligent ticket prioritization",
      "Agent assist and suggestions",
      "Quality monitoring and coaching",
      "Predictive staffing and scheduling",
    ],
    results: "70% faster resolution, 80% customer satisfaction",
  },
];

const Solutions = () => {
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
              Solutions by Industry
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              AI Solutions for <span className="gradient-text">Your Industry</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Discover how businesses in your industry are leveraging AI automation to gain competitive advantages.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <SectionWrapper withPattern>
        <div className="space-y-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 md:p-10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground mb-4">
                    {industry.icon}
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                    {industry.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{industry.description}</p>
                  <div className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium">
                    {industry.results}
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-foreground mb-4">Common Use Cases</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {industry.useCases.map((useCase) => (
                      <div key={useCase} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{useCase}</span>
                      </div>
                    ))}
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
            Don't See Your Industry?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            We build custom AI solutions for businesses across all industries. Let's discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get Custom Solution
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="hero-outline" size="xl">
                View All Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default Solutions;
