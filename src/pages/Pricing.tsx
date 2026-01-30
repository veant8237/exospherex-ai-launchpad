import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { SectionWrapper, SectionHeading } from "@/components/sections";
import { CheckCircle2, ArrowRight, Zap, Star, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: <Zap className="w-6 h-6" />,
    description: "Perfect for small businesses starting their AI journey",
    price: "2,499",
    period: "/month",
    popular: false,
    features: [
      "1 AI automation workflow",
      "Basic chatbot integration",
      "Email support",
      "Monthly performance reports",
      "5 hours consulting/month",
      "Standard integrations",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    icon: <Star className="w-6 h-6" />,
    description: "For growing businesses ready to scale with AI",
    price: "4,999",
    period: "/month",
    popular: true,
    features: [
      "Up to 5 AI automation workflows",
      "Advanced chatbot with NLP",
      "Priority support (24/7)",
      "Weekly performance reports",
      "15 hours consulting/month",
      "Custom integrations",
      "CRM automation included",
      "Lead scoring & nurturing",
    ],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    icon: <Crown className="w-6 h-6" />,
    description: "Custom solutions for large-scale operations",
    price: "Custom",
    period: "",
    popular: false,
    features: [
      "Unlimited AI workflows",
      "Custom AI model development",
      "Dedicated success manager",
      "Real-time analytics dashboard",
      "Unlimited consulting hours",
      "Enterprise integrations",
      "On-premise deployment option",
      "SLA guarantee (99.9% uptime)",
      "Security & compliance audit",
    ],
    cta: "Contact Sales",
  },
];

const faqs = [
  {
    question: "What's included in the setup?",
    answer: "All plans include a comprehensive business audit, solution design, implementation, testing, and training. We handle everything from start to finish.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely! You can upgrade at any time. We'll migrate your workflows and ensure a seamless transition to your new plan.",
  },
  {
    question: "Is there a minimum contract period?",
    answer: "We offer month-to-month contracts for Starter and Professional plans. Enterprise plans typically have annual agreements for the best value.",
  },
  {
    question: "What if I need custom features?",
    answer: "Contact us for custom solutions. We can build bespoke AI features tailored to your specific needs at competitive rates.",
  },
];

const Pricing = () => {
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
              Pricing
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Choose the plan that fits your needs. All plans include implementation, training, and ongoing support.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <SectionWrapper withPattern>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-8 relative ${
                plan.popular ? "border-primary/50 glow" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary mx-auto mb-4">
                  {plan.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  {plan.price !== "Custom" && (
                    <span className="text-2xl text-muted-foreground">$</span>
                  )}
                  <span className="font-display text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="block">
                <Button
                  variant={plan.popular ? "hero" : "hero-outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQs */}
      <SectionWrapper className="bg-surface-1">
        <SectionHeading
          badge="FAQs"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our pricing and plans"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <h4 className="font-display text-lg font-semibold text-foreground mb-3">
                {faq.question}
              </h4>
              <p className="text-muted-foreground">{faq.answer}</p>
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
            Not Sure Which Plan is Right for You?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss your needs and find the perfect solution for your business.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </SectionWrapper>
    </Layout>
  );
};

export default Pricing;
