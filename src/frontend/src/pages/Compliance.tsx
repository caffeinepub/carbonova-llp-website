import { Award, CheckCircle, FileCheck, ShieldCheck } from "lucide-react";
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

function ComplianceBadge({
  label,
  sublabel,
  color,
}: { label: string; sublabel: string; color: string }) {
  return (
    <svg
      viewBox="0 0 120 130"
      className="w-28 h-32"
      role="img"
      aria-label={`${label} compliance badge`}
    >
      <title>
        {label} {sublabel} Compliant
      </title>
      <polygon
        points="60,8 108,34 108,88 60,114 12,88 12,34"
        fill={color}
        opacity="0.1"
        stroke={color}
        strokeWidth="2"
      />
      <polygon
        points="60,15 101,38 101,84 60,107 19,84 19,38"
        fill={color}
        opacity="0.06"
      />
      <text
        x="60"
        y="54"
        textAnchor="middle"
        fontSize="13"
        fontWeight="800"
        fill={color}
        fontFamily="Inter,sans-serif"
      >
        {label}
      </text>
      <text
        x="60"
        y="70"
        textAnchor="middle"
        fontSize="9"
        fill={color}
        opacity="0.8"
        fontFamily="Inter,sans-serif"
      >
        {sublabel}
      </text>
      <text
        x="60"
        y="84"
        textAnchor="middle"
        fontSize="7"
        fill={color}
        opacity="0.6"
        fontFamily="Inter,sans-serif"
      >
        COMPLIANT
      </text>
      <circle cx="60" cy="118" r="9" fill={color} opacity="0.9" />
      <path
        d="M56 118 L59 121 L64 115"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const standards = [
  {
    label: "BS-VI",
    sublabel: "Stage II",
    color: "#1F6B4B",
    title: "Bharat Stage VI Stage II",
    desc: "Full compliance with India’s most stringent emission standards, equivalent to Euro-6. Verified through ARAI-authorized testing protocols with official certification.",
  },
  {
    label: "Euro-6",
    sublabel: "Compatible",
    color: "#3E5F76",
    title: "Euro-6 Emission Norms",
    desc: "CERD technology meets Euro-6 standards, enabling OEM partners to export vehicles to European markets without additional emission control modifications.",
  },
];

const testingBodies = [
  {
    abbr: "ARAI",
    name: "Automotive Research Association of India",
    role: "Primary testing and certification authority",
    desc: "CERD has undergone comprehensive vehicle-level emission testing at ARAI’s Pune facility, the gold standard for automotive certification in India.",
    location: "Pune, Maharashtra",
  },
  {
    abbr: "ICAT",
    name: "International Centre for Automotive Technology",
    role: "Validation and homologation support",
    desc: "ICAT validation testing provides additional certification credibility and supports OEM homologation applications for vehicle type approval.",
    location: "Manesar, Haryana",
  },
];

const credentials = [
  {
    icon: <Award className="w-5 h-5 text-yellow-600" />,
    title: "National Startup Awards 2021 Winner",
    desc: "Clean Technology category winner",
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-primary" />,
    title: "DPIIT Recognized Startup",
    desc: "Startup India registration active",
  },
  {
    icon: <FileCheck className="w-5 h-5 text-accent" />,
    title: "Formal Supply Agreements",
    desc: "Signed OEM supply contracts",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-secondary" />,
    title: "SISFS Fund Recipient",
    desc: "Startup India Seed Fund Scheme",
  },
];

export default function Compliance() {
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
              Compliance & Safety
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              Certified. Tested. Trusted.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Carbonova’s CERD technology has been validated through India’s
              most rigorous automotive testing and certification processes,
              meeting both domestic and international emission standards.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Emission Standards Compliance
            </h2>
            <p className="text-muted-foreground">
              Dual certification for India’s domestic market and international
              export readiness.
            </p>
          </AnimSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {standards.map((s, i) => (
              <AnimSection key={s.label} delay={i * 0.1}>
                <div
                  className="bg-white rounded-2xl p-8 border-2 border-border shadow-card hover:shadow-card-hover transition-shadow flex gap-6 items-start"
                  data-ocid={`compliance.item.${i + 1}`}
                >
                  <div className="shrink-0">
                    <ComplianceBadge
                      label={s.label}
                      sublabel={s.sublabel}
                      color={s.color}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Authorized Testing Validation
            </h2>
            <p className="text-muted-foreground">
              Tested and validated by India’s premier automotive testing
              organizations.
            </p>
          </AnimSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testingBodies.map((body, i) => (
              <AnimSection key={body.abbr} delay={i * 0.1}>
                <div
                  className="bg-white rounded-2xl p-8 border border-border shadow-card"
                  data-ocid={`compliance.item.${i + 3}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary text-white flex items-center justify-center text-sm font-extrabold">
                      {body.abbr}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{body.name}</h3>
                      <p className="text-xs text-primary font-medium">
                        {body.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {body.desc}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    📍 {body.location}
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Credentials & Recognition
            </h2>
          </AnimSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {credentials.map((c, i) => (
              <AnimSection key={c.title} delay={i * 0.08}>
                <div
                  className="bg-muted rounded-xl p-6 border border-border"
                  data-ocid={`compliance.item.${i + 5}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-3 shadow-xs">
                    {c.icon}
                  </div>
                  <h4 className="text-sm font-bold text-foreground mb-1">
                    {c.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">{c.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
