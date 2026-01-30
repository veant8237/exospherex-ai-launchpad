import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(centered ? "text-center" : "", "mb-12 md:mb-16", className)}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  withPattern?: boolean;
  withGlow?: boolean;
}

export const SectionWrapper = ({
  children,
  className,
  id,
  withPattern = false,
  withGlow = false,
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn(
        "section-padding relative overflow-hidden",
        withPattern && "grid-pattern",
        className
      )}
    >
      {withGlow && (
        <div className="absolute inset-0 radial-glow pointer-events-none" />
      )}
      <div className="container-custom relative">{children}</div>
    </section>
  );
};

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}

export const FeatureCard = ({ icon, title, description, index = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 md:p-8 group hover:border-primary/30 transition-all duration-500"
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  index?: number;
}

export const StatCard = ({ value, label, index = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-6"
    >
      <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
        {value}
      </div>
      <p className="text-muted-foreground">{label}</p>
    </motion.div>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  index?: number;
}

export const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  index = 0,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card p-8 relative"
    >
      <div className="absolute top-6 left-6 text-6xl text-primary/20 font-serif">"</div>
      <p className="text-foreground/90 leading-relaxed mb-6 relative z-10 pl-4">
        {quote}
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role} at {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export const ProcessStep = ({ step, title, description, isLast = false }: ProcessStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: step * 0.1 }}
      className="flex gap-6"
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0 glow-sm">
          {step}
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent mt-4 min-h-[60px]" />
        )}
      </div>
      <div className="pb-12">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};
