import { Link } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  TrendingDown,
} from "lucide-react";
import { motion } from "motion/react";
import { useCountUp, useScrollAnimation } from "../hooks/useScrollAnimation";

function StatCard({
  icon,
  value,
  suffix,
  label,
  start,
}: {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const count = useCountUp(value, 2000, start);
  return (
    <div className="flex flex-col items-center text-center p-8">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="text-3xl font-bold text-foreground mb-1">
        {count.toLocaleString("en-IN")}
        {suffix}
      </div>
      <p className="text-sm text-muted-foreground max-w-xs">{label}</p>
    </div>
  );
}

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

export default function Home() {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2);

  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
                <CheckCircle className="w-3.5 h-3.5" /> DPIIT Recognized Startup
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-6">
                Innovation for <span className="text-primary">Cleaner Air</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Carbonova’s palladium-doped perovskite catalyst technology
                delivers next-generation emission control — using precious
                metals only as a dopant to dramatically reduce cost while
                exceeding BS-VI & Euro-6 standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/technology"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-secondary transition-colors"
                  data-ocid="home.primary_button"
                >
                  Explore Technology <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-foreground text-foreground font-semibold hover:bg-foreground hover:text-white transition-colors"
                  data-ocid="home.secondary_button"
                >
                  Partner With Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-border shadow-card-hover">
                <img
                  src="/assets/generated/hero-cerd-tech.dim_600x480.png"
                  alt="CERD Technology"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-card border border-border">
                <div className="text-2xl font-bold text-primary">₹6,000</div>
                <div className="text-xs text-muted-foreground">
                  Cost saving per vehicle
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-16 bg-muted"
        ref={statsRef as React.Ref<HTMLElement>}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
            <StatCard
              icon={<TrendingDown className="w-6 h-6 text-primary" />}
              value={6000}
              suffix=""
              label="₹6,000 cost saving per vehicle for OEMs"
              start={statsVisible}
            />
            <StatCard
              icon={<AlertCircle className="w-6 h-6 text-primary" />}
              value={97}
              suffix=".7%"
              label="Market concern regarding vehicular emissions"
              start={statsVisible}
            />
            <StatCard
              icon={<CheckCircle className="w-6 h-6 text-primary" />}
              value={1}
              suffix=" OEM"
              label="Successful commercial supply with Maruti Suzuki"
              start={statsVisible}
            />
          </div>
        </div>
      </section>

      {/* Section cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Explore Carbonova
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From our founding story to cutting-edge technology and strategic
              partnerships.
            </p>
          </AnimSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: "/about",
                title: "Our Story",
                desc: "Born from Delhi’s air pollution crisis, built by students with a vision for cleaner India.",
              },
              {
                href: "/technology",
                title: "The Technology",
                desc: "Palladium-doped perovskite catalyst with ceramic substrate — CERD Design Model 6.2.",
              },
              {
                href: "/partnerships",
                title: "OEM Partnerships",
                desc: "Proven deployment with Maruti Suzuki, expanding to Tata Motors and Hyundai India.",
              },
            ].map((card, i) => (
              <AnimSection key={card.href} delay={i * 0.1}>
                <Link
                  to={card.href}
                  className="block rounded-2xl p-8 border border-border hover:shadow-card-hover transition-all group bg-muted"
                  data-ocid={`home.item.${i + 1}`}
                >
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {card.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimSection>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-white/70 mb-8">
              Join India’s clean mobility revolution with Carbonova’s proven
              catalytic technology.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-secondary transition-colors"
              data-ocid="home.primary_button"
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimSection>
        </div>
      </section>
    </main>
  );
}
