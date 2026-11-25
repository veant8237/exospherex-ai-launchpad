import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout";
import { SectionWrapper, SectionHeading } from "@/components/sections";
import { Mail, Phone, MapPin, Send, Calendar, MessageSquare, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase.from("contact_submissions").insert({
      name: formData.name,
      email: formData.email,
      company: formData.company || null,
      phone: formData.phone || null,
      message: formData.message,
    });

    if (error) {
      toast.error("Failed to send message. Please try again.");
      setIsSubmitting(false);
      return;
    }

    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: ""
    });
    setIsSubmitting(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 radial-glow" />
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-6">
              Contact Us
            </motion.span>

            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's <span className="gradient-text">Transform</span> Your Business
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to harness the power of AI? Get in touch and let's discuss how we can help.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="bg-muted border-border focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" required className="bg-muted border-border focus:border-primary" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" className="bg-muted border-border focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 (234) 567-890" className="bg-muted border-border focus:border-primary" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  How can we help? *
                </label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project, goals, and any challenges you're facing..." rows={5} required className="bg-muted border-border focus:border-primary resize-none" />
              </div>
              <Button variant="hero" size="xl" type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                {isSubmitting ? "Sending..." : <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:info@exospherexai.com" className="text-muted-foreground hover:text-primary transition-colors">exospherex.ai.com

                  </a>
                  </div>
                  </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">India</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Quick Actions
              </h3>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Book a Demo</p>
                    <p className="text-sm text-muted-foreground">Schedule a personalized demo</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a href="#" className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Live Chat</p>
                    <p className="text-sm text-muted-foreground">Chat with our team now</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            <div className="glass-card p-8 glow-sm">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Response Time
              </h3>
              <p className="text-muted-foreground">
                We typically respond within <span className="text-primary font-semibold">24 hours</span>. For urgent matters, call us directly or use our live chat.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </Layout>;
};
export default Contact;