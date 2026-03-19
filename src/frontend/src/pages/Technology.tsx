import { CheckCircle, Layers, TrendingUp, XCircle, Zap } from "lucide-react";
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

function CERDDiagram() {
  const cells = Array.from({ length: 96 }, (_, i) => {
    const row = Math.floor(i / 12);
    const col = i % 12;
    return { row, col, key: `cell-${row}-${col}` };
  });

  return (
    <svg
      viewBox="0 0 600 230"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="CERD Design Model 6.2 Diagram"
    >
      <title>CERD Design Model 6.2 — Streamlined Nozzle Configuration</title>
      <rect width="600" height="230" fill="#f9fafb" rx="12" />
      <text
        x="300"
        y="22"
        textAnchor="middle"
        fontSize="12"
        fontWeight="700"
        fill="#111827"
        fontFamily="Inter,sans-serif"
      >
        CERD Design Model 6.2 — Streamlined Nozzle Configuration
      </text>
      <line x1="40" y1="30" x2="560" y2="30" stroke="#E5E7EB" strokeWidth="1" />
      <polygon
        points="30,75 110,95 110,135 30,155"
        fill="#3E5F76"
        opacity="0.65"
      />
      <text
        x="50"
        y="172"
        fontSize="10"
        fill="#6B7280"
        fontFamily="Inter,sans-serif"
        textAnchor="middle"
      >
        Inlet
      </text>
      <text
        x="14"
        y="112"
        fontSize="10"
        fill="#1F6B4B"
        fontFamily="Inter,sans-serif"
      >
        →
      </text>
      <rect
        x="110"
        y="75"
        width="360"
        height="85"
        rx="3"
        fill="#1F6B4B"
        opacity="0.06"
        stroke="#1F6B4B"
        strokeWidth="1.5"
      />
      {cells.map(({ row, col, key }) => (
        <rect
          key={key}
          x={118 + col * 28}
          y={82 + row * 9}
          width={25}
          height={7}
          rx={1}
          fill="#1F6B4B"
          opacity={0.35 + col * 0.02}
        />
      ))}
      <polygon
        points="470,95 550,75 550,155 470,135"
        fill="#3E5F76"
        opacity="0.65"
      />
      <text
        x="510"
        y="172"
        fontSize="10"
        fill="#6B7280"
        fontFamily="Inter,sans-serif"
        textAnchor="middle"
      >
        Outlet
      </text>
      <text
        x="554"
        y="112"
        fontSize="10"
        fill="#1F6B4B"
        fontFamily="Inter,sans-serif"
      >
        →
      </text>
      <text
        x="554"
        y="125"
        fontSize="8"
        fill="#1F6B4B"
        fontFamily="Inter,sans-serif"
      >
        Clean
      </text>
      <rect
        x="110"
        y="162"
        width="360"
        height="8"
        rx="2"
        fill="#6B7280"
        opacity="0.25"
      />
      <text
        x="290"
        y="200"
        fontSize="10"
        fill="#6B7280"
        fontFamily="Inter,sans-serif"
        textAnchor="middle"
      >
        Ceramic Substrate (Lightweight)
      </text>
      <text
        x="290"
        y="218"
        fontSize="9"
        fill="#1F6B4B"
        fontFamily="Inter,sans-serif"
        textAnchor="middle"
      >
        Palladium-Doped Perovskite Catalyst Monolith
      </text>
    </svg>
  );
}

const features = [
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Palladium-Doped Perovskite Catalyst",
    desc: "Uses palladium only as a dopant in an abundant perovskite oxide matrix. Delivers superior low-temperature (cold-start) activity and exceptional thermal stability up to 900°C.",
  },
  {
    icon: <Layers className="w-6 h-6 text-accent" />,
    title: "Ceramic Substrate",
    desc: "Engineered ceramic monolith substrate reduces weight by 20% versus metallic alternatives while maintaining structural integrity under thermal cycling.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-secondary" />,
    title: "Higher Efficiency per Unit Volume",
    desc: "Optimized monolith cell geometry and streamlined nozzle design (Model 6.2) achieves higher conversion efficiency per cubic centimeter.",
  },
];

const comparison = [
  { metric: "Cost per Unit", cerd: "~₹4,500", conventional: "~₹10,500+" },
  {
    metric: "Precious Metal Use",
    cerd: "Trace dopant only",
    conventional: "High loading (Pt, Rh)",
  },
  {
    metric: "Cold Start Performance",
    cerd: "Active <150°C",
    conventional: "Active >300°C",
  },
  {
    metric: "Thermal Stability",
    cerd: "Up to 900°C",
    conventional: "Up to 800°C",
  },
  {
    metric: "Weight",
    cerd: "Lightweight ceramic",
    conventional: "Heavier metallic",
  },
  {
    metric: "Efficiency per Volume",
    cerd: "15-20% higher",
    conventional: "Baseline",
  },
];

export default function Technology() {
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
              The Carbonova Advantage
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              Product & Technology
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Carbonova Emission Reduction Device (CERD) represents a
              fundamental rethink of catalytic converter design — achieving
              regulatory compliance at a fraction of the cost.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              The Problem with Conventional Catalytic Converters
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The automotive industry has been constrained by a technology
              unchanged in its fundamentals for 50 years.
            </p>
          </AnimSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "High Cost",
                desc: "Platinum and rhodium loadings can account for 70–80% of the converter’s total cost, directly impacting vehicle prices.",
              },
              {
                title: "Scarce Precious Metals",
                desc: "Platinum and rhodium are among the rarest elements, with supply dominated by South Africa and Russia — creating geopolitical risk.",
              },
              {
                title: "Poor Cold Start",
                desc: "Conventional catalysts don’t activate until ~300°C, meaning the first minutes of engine operation emit nearly uncontrolled pollutants.",
              },
            ].map((p, i) => (
              <AnimSection key={p.title} delay={i * 0.1}>
                <div
                  className="bg-red-50 border border-red-100 rounded-2xl p-6"
                  data-ocid={`tech.item.${i + 1}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <h3 className="font-bold text-foreground">{p.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
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
              The CERD Solution
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three interlocking innovations delivering breakthrough performance
              at breakthrough cost.
            </p>
          </AnimSection>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimSection key={f.title} delay={i * 0.1}>
                <div
                  className="bg-white rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover transition-shadow"
                  data-ocid={`tech.item.${i + 4}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-3">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              CERD Design Model 6.2
            </h2>
            <p className="text-muted-foreground">
              Streamlined nozzle geometry with optimized monolith packing for
              maximum conversion efficiency.
            </p>
          </AnimSection>
          <AnimSection>
            <div className="bg-muted rounded-2xl p-6 border border-border">
              <CERDDiagram />
            </div>
          </AnimSection>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              CERD vs Conventional Catalytic Converter
            </h2>
            <p className="text-muted-foreground">
              A head-to-head comparison across key performance metrics.
            </p>
          </AnimSection>
          <AnimSection>
            <div
              className="bg-white rounded-2xl border border-border overflow-hidden shadow-card"
              data-ocid="tech.table"
            >
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground">
                      Metric
                    </th>
                    <th className="p-4 text-sm font-semibold text-white bg-primary text-center">
                      CERD (Carbonova)
                    </th>
                    <th className="text-center p-4 text-sm font-semibold text-muted-foreground">
                      Conventional
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={row.metric}
                      className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-muted/50"}`}
                    >
                      <td className="p-4 text-sm font-medium text-foreground">
                        {row.metric}
                      </td>
                      <td className="p-4 text-center bg-primary/5">
                        <span className="flex items-center justify-center gap-1.5 text-sm font-semibold text-primary">
                          <CheckCircle className="w-4 h-4" /> {row.cerd}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-sm text-muted-foreground">
                          {row.conventional}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimSection>
        </div>
      </section>
    </main>
  );
}
