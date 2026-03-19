import { Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Target, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
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

const revenueData = [
  { year: "Year 1", revenue: 20.25, units: 15 },
  { year: "Year 2", revenue: 52, units: 38 },
  { year: "Year 3", revenue: 87, units: 65 },
  { year: "Year 4", revenue: 124, units: 93 },
  { year: "Year 5", revenue: 162, units: 125 },
];

const highlights = [
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: "8× Revenue Growth",
    desc: "Projected ₹20.25 Cr in Year 1 scaling to ₹162 Cr by Year 5, driven by OEM expansion and institutional segments.",
  },
  {
    icon: <Target className="w-6 h-6 text-accent" />,
    title: "Break-Even at 41,371 Units",
    desc: "Clear, achievable break-even milestone achievable within Year 2 of commercial scale-up, based on current OEM pipeline.",
  },
  {
    icon: <Shield className="w-6 h-6 text-secondary" />,
    title: "Protected Technology Moat",
    desc: "Patent-pending perovskite catalyst formulation with palladium doping creates a defensible technical advantage over incumbents.",
  },
];

export default function Investors() {
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
              Financial Highlights
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              Investor Relations
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Carbonova is building India’s leading independent catalytic
              converter company. We seek strategic investors aligned with clean
              mobility and sustainable technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Revenue Growth Projection
            </h2>
            <p className="text-muted-foreground">
              ₹20.25 Crore (Year 1) to ₹162 Crore (Year 5) — 8× growth in 5
              years.
            </p>
          </AnimSection>
          <AnimSection>
            <div
              className="bg-white rounded-2xl border border-border shadow-card p-6"
              data-ocid="investors.panel"
            >
              <ResponsiveContainer width="100%" height={320}>
                <ComposedChart
                  data={revenueData}
                  margin={{ top: 16, right: 32, bottom: 8, left: 8 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="year"
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                  />
                  <YAxis
                    yAxisId="left"
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                    label={{
                      value: "₹ Crore",
                      angle: -90,
                      position: "insideLeft",
                      offset: 12,
                      style: { fontSize: 11, fill: "#6B7280" },
                    }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                    label={{
                      value: "Units (K)",
                      angle: 90,
                      position: "insideRight",
                      offset: 0,
                      style: { fontSize: 11, fill: "#6B7280" },
                    }}
                  />
                  <Tooltip
                    formatter={(value: number, name: string) => [
                      name === "revenue" ? `₹${value} Cr` : `${value}K units`,
                      name === "revenue" ? "Revenue" : "Units",
                    ]}
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid #E5E7EB",
                      fontSize: 12,
                    }}
                  />
                  <Bar
                    yAxisId="left"
                    dataKey="revenue"
                    name="revenue"
                    fill="#1F6B4B"
                    radius={[4, 4, 0, 0]}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="units"
                    name="units"
                    stroke="#3E5F76"
                    strokeWidth={2}
                    dot={{ r: 4, fill: "#3E5F76" }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </AnimSection>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Key Investment Highlights
            </h2>
          </AnimSection>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <AnimSection key={h.title} delay={i * 0.1}>
                <div
                  className="bg-white rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover transition-shadow"
                  data-ocid={`investors.item.${i + 1}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                    {h.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-3">{h.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimSection>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Funding Structure
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Built on disciplined capital allocation — founder investment
                demonstrating skin-in-the-game, complemented by structured
                venture debt that preserves equity while funding growth.
              </p>
              <div className="space-y-4">
                {[
                  {
                    label: "Founder Investment",
                    tag: "Seed",
                    desc: "Initial R&D, prototype development, and ARAI testing funded by founding team.",
                    color: "bg-primary",
                    w: "w-1/3",
                  },
                  {
                    label: "Startup India Seed Fund (SISFS)",
                    tag: "Grant",
                    desc: "Government grant supporting prototype-to-pilot transition and market entry.",
                    color: "bg-accent",
                    w: "w-1/2",
                  },
                  {
                    label: "Structured Venture Debt",
                    tag: "Series A",
                    desc: "Non-dilutive debt financing for manufacturing scale-up and OEM expansion.",
                    color: "bg-secondary",
                    w: "w-2/3",
                  },
                ].map((item) => (
                  <div key={item.label} className="bg-muted rounded-xl p-5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-foreground">
                        {item.label}
                      </span>
                      <span className="text-primary font-bold text-sm">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.desc}
                    </p>
                    <div className="h-2 rounded-full bg-primary/20">
                      <div
                        className={`h-2 rounded-full ${item.color} ${item.w}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </AnimSection>

            <AnimSection delay={0.15}>
              <div className="bg-foreground rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Financial Milestones</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-white/70 mb-1">
                      Break-Even Threshold
                    </div>
                    <div className="text-2xl font-bold">41,371 units</div>
                    <div className="text-xs text-white/50 mt-1">
                      Achievable in Year 2 based on OEM pipeline
                    </div>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    {[
                      { label: "Year 1 Revenue", value: "₹20.25 Cr" },
                      { label: "Year 3 Revenue", value: "₹87 Cr" },
                      { label: "Year 5 Revenue", value: "₹162 Cr" },
                      { label: "Market Size (TAM)", value: "₹4,200+ Cr" },
                    ].map((m) => (
                      <div
                        key={m.label}
                        className="flex justify-between py-2.5 border-b border-white/10 last:border-0"
                      >
                        <span className="text-sm text-white/70">{m.label}</span>
                        <span className="text-sm font-bold">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimSection>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Interested in Investing?
            </h2>
            <p className="text-muted-foreground mb-8">
              We welcome conversations with investors who share our vision for
              clean mobility in India. Reach out for a detailed investor deck
              and financial model.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-secondary transition-colors"
              data-ocid="investors.primary_button"
            >
              Contact Investor Relations <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimSection>
        </div>
      </section>
    </main>
  );
}
