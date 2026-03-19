import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Car, CheckCircle, Truck } from "lucide-react";
import { motion } from "motion/react";
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

const oems = [
  {
    name: "Maruti Suzuki",
    status: "Active Partner",
    statusColor: "bg-green-100 text-green-700",
    desc: "Commercial supply agreement active for the K10 platform. Proven deployment with measurable emission reduction results.",
    platform: "K10 Platform",
    borderColor: "border-green-200",
    icon: "MS",
  },
  {
    name: "Tata Motors",
    status: "In Discussion",
    statusColor: "bg-blue-100 text-blue-700",
    desc: "Expansion conversations underway for commercial vehicle and passenger car segments. Strong alignment on BS-VI Stage II compliance.",
    platform: "Commercial & PV",
    borderColor: "border-blue-200",
    icon: "TM",
  },
  {
    name: "Hyundai India",
    status: "Prospective",
    statusColor: "bg-orange-100 text-orange-700",
    desc: "Engaged in technical evaluation discussions for their India-manufactured vehicle lineup targeting Euro-6 export markets.",
    platform: "India Manufactured",
    borderColor: "border-orange-200",
    icon: "HI",
  },
];

const propositions = [
  {
    icon: <Car className="w-6 h-6 text-primary" />,
    title: "Long-Term Supply Contracts",
    desc: "Structured multi-year agreements with guaranteed pricing and volume commitments, providing supply chain certainty for OEM production planning.",
  },
  {
    icon: <Truck className="w-6 h-6 text-accent" />,
    title: "Institutional Segments",
    desc: "Specialized solutions for public transport (city buses, metro feeder), government fleet vehicles, and commercial transport operators.",
  },
  {
    icon: <Building2 className="w-6 h-6 text-secondary" />,
    title: "Homologation Support",
    desc: "End-to-end technical support for vehicle type approval and homologation with ARAI/ICAT, accelerating time-to-market for OEM partners.",
  },
];

export default function Partnerships() {
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
              OEM & Institutional Partnerships
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              Built for India’s Auto Industry
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Carbonova partners directly with vehicle manufacturers and fleet
              operators, providing a certified, cost-competitive alternative to
              conventional catalytic converters.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Target OEM Partners
            </h2>
            <p className="text-muted-foreground">
              From proven commercial supply to active expansion across India’s
              largest automakers.
            </p>
          </AnimSection>
          <div className="grid md:grid-cols-3 gap-6">
            {oems.map((oem, i) => (
              <AnimSection key={oem.name} delay={i * 0.1}>
                <div
                  className={`bg-white rounded-2xl p-8 border-2 ${oem.borderColor} shadow-card hover:shadow-card-hover transition-shadow`}
                  data-ocid={`partnerships.item.${i + 1}`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-foreground text-white flex items-center justify-center text-lg font-extrabold">
                      {oem.icon}
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${oem.statusColor}`}
                    >
                      {oem.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {oem.name}
                  </h3>
                  <div className="text-xs text-muted-foreground mb-3 font-medium">
                    {oem.platform}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {oem.desc}
                  </p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimSection>
              <h2 className="text-3xl font-bold text-white mb-6">
                Proven Commercial Track Record
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Our partnership with Maruti Suzuki on the K10 platform is the
                first commercial deployment of perovskite-based catalytic
                converter technology in the Indian automotive market.
              </p>
              <ul className="space-y-3">
                {[
                  "Commercial supply agreement signed and operational",
                  "BS-VI Stage II compliance verified by ARAI",
                  "Zero reported field failures in commercial deployment",
                  "Cost saving of ₹6,000 per vehicle confirmed by OEM",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimSection>
            <AnimSection delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: "Active OEM Partner",
                    value: "1",
                    sub: "Maruti Suzuki",
                  },
                  {
                    label: "Units Deployed",
                    value: "10K+",
                    sub: "Commercial supply",
                  },
                  {
                    label: "Cost Saving / Vehicle",
                    value: "₹6,000",
                    sub: "Verified by OEM",
                  },
                  {
                    label: "Expansion Pipeline",
                    value: "2 OEMs",
                    sub: "In active discussion",
                  },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className="bg-white/10 rounded-xl p-5"
                    data-ocid={`partnerships.item.${i + 4}`}
                  >
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/60">{stat.label}</div>
                    <div className="text-xs text-primary font-medium mt-1">
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              B2B Value Proposition
            </h2>
            <p className="text-muted-foreground">
              Structured to support every stage of your procurement and
              compliance journey.
            </p>
          </AnimSection>
          <div className="grid md:grid-cols-3 gap-6">
            {propositions.map((p, i) => (
              <AnimSection key={p.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                    {p.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </AnimSection>
            ))}
          </div>
          <AnimSection className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-secondary transition-colors"
              data-ocid="partnerships.primary_button"
            >
              Start Partnership Discussion <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimSection>
        </div>
      </section>
    </main>
  );
}
