import { Building2, CheckCircle, Loader2, Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { Subject, useSubmitContact } from "../hooks/useQueries";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function AnimSection({
  children,
  className = "",
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    subject: Subject.general,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const mutation = useSubmitContact();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync(form);
      setSubmitted(true);
      toast.success("Message sent! We’ll be in touch shortly.");
    } catch {
      toast.error("Failed to send. Please email us directly.");
    }
  };

  return (
    <main className="pt-16">
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              Contact Carbonova
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you’re an OEM, investor, government agency, or media
              contact — we’d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimSection>
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Send Us a Message
              </h2>
              {submitted ? (
                <div
                  className="bg-primary/5 rounded-2xl p-10 text-center"
                  data-ocid="contact.success_state"
                >
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. Our team will respond within 1–2
                    business days.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-ocid="contact.modal"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
                        placeholder="Rajesh Kumar"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="org"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Organization
                      </label>
                      <input
                        id="org"
                        type="text"
                        value={form.organization}
                        onChange={(e) =>
                          setForm((f) => ({
                            ...f,
                            organization: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
                        placeholder="Tata Motors Ltd."
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      required
                      value={form.subject}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          subject: e.target.value as Subject,
                        }))
                      }
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      data-ocid="contact.select"
                    >
                      <option value={Subject.partnership}>Partnership</option>
                      <option value={Subject.investment}>Investment</option>
                      <option value={Subject.media}>Media</option>
                      <option value={Subject.general}>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground resize-none"
                      placeholder="Tell us about your interest or inquiry..."
                      data-ocid="contact.textarea"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-secondary transition-colors disabled:opacity-60"
                    data-ocid="contact.submit_button"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                  {mutation.isError && (
                    <p
                      className="text-sm text-destructive"
                      data-ocid="contact.error_state"
                    >
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              )}
            </AnimSection>

            <AnimSection delay={0.15}>
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Our Offices
              </h2>
              <div className="space-y-4">
                <div className="bg-muted rounded-2xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">
                        Headquarters
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        Jai Singh Road, New Delhi – 110 001
                      </p>
                      <span className="text-xs text-primary font-medium">
                        Corporate Office
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-muted rounded-2xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">
                        Manufacturing Unit
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        Okhla Industrial Area, Phase II, New Delhi – 110 020
                      </p>
                      <span className="text-xs text-accent font-medium">
                        Production Facility
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-muted rounded-2xl p-6 border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:Compliance@carbonova.in"
                        className="text-sm text-primary hover:underline"
                      >
                        Compliance@carbonova.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-2xl overflow-hidden border border-border">
                <div className="bg-muted h-48 flex flex-col items-center justify-center gap-2">
                  <MapPin className="w-8 h-8 text-primary" />
                  <div className="text-sm font-semibold text-foreground">
                    Okhla Industrial Area, New Delhi
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Phase II, New Delhi – 110 020
                  </div>
                  <a
                    href="https://maps.google.com/?q=Okhla+Industrial+Area+Phase+II+New+Delhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-xs text-primary font-medium underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>
    </main>
  );
}
