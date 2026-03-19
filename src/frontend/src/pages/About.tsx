import { Award, Lightbulb, Star, Target, Users } from "lucide-react";
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

const awards = [
  {
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    title: "National Startup Awards 2021",
    body: "Winner in the Clean Technology category, recognized by the Government of India for innovation in automotive emission control.",
    badge: "🏆 Winner",
  },
  {
    icon: <Award className="w-6 h-6 text-primary" />,
    title: "Startup India Seed Fund",
    body: "Recipient of the Startup India Seed Fund Scheme (SISFS), supporting early-stage product development and market entry.",
    badge: "💰 Funded",
  },
  {
    icon: <Target className="w-6 h-6 text-accent" />,
    title: "DPIIT Recognized Startup",
    body: "Officially recognized by the Department for Promotion of Industry and Internal Trade under the Startup India initiative.",
    badge: "✅ Recognized",
  },
];

const timeline = [
  {
    year: "2019",
    event:
      "Founded by engineering students during Delhi's severe air quality crisis and odd-even vehicle rationing",
  },
  {
    year: "2020",
    event:
      "Developed first prototype of palladium-doped perovskite catalyst formulation",
  },
  {
    year: "2021",
    event:
      "Won National Startup Awards (Clean Tech), received DPIIT recognition",
  },
  {
    year: "2022",
    event:
      "ARAI-certified testing completed; Startup India Seed Fund (SISFS) awarded",
  },
  {
    year: "2023",
    event:
      "Commercial supply agreement signed and activated with Maruti Suzuki",
  },
  {
    year: "2024",
    event:
      "Scaling Okhla manufacturing unit; pipeline discussions with Tata Motors & Hyundai India",
  },
];

export default function About() {
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
              Our Story & Vision
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              Born from Delhi’s Air Crisis
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In 2019, a group of engineering students living through Delhi’s
              notorious smog seasons and the government’s odd-even vehicle
              rationing asked a simple question: why hasn’t automotive emission
              technology kept pace with the problem?
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimSection>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                The Founding Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Delhi’s Air Quality Index regularly crossed 400+ during
                  winters, forcing schools to close and commuters to choose
                  between health and livelihood. The government’s odd-even
                  traffic rationing was a band-aid on a systemic wound.
                </p>
                <p>
                  Our founders realized conventional catalytic converters hadn’t
                  seen meaningful innovation in decades. They relied on platinum
                  and rhodium: rare, expensive, and geopolitically constrained.
                </p>
                <p>
                  The breakthrough came with perovskite oxide compounds —
                  abundant, thermally stable, and capable of catalytic activity
                  at lower temperatures. By doping with trace palladium, they
                  achieved real-world automotive performance at a fraction of
                  the cost.
                </p>
              </div>
            </AnimSection>

            <AnimSection delay={0.15}>
              <div className="bg-muted rounded-2xl p-8 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Our Mission
                  </h3>
                </div>
                <blockquote className="text-lg text-foreground font-medium leading-relaxed italic border-l-4 border-primary pl-4">
                  “To contribute to automobile exhaust emission control through
                  compact and cost-effective technology that makes clean air
                  accessible to every Indian city.”
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center">
                    <Users className="w-4 h-4 text-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Founded by the Carbonova team, New Delhi
                  </span>
                </div>
              </div>
              <div className="bg-primary/5 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Our Vision</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A future where every vehicle on Indian roads is equipped with
                  affordable, high-efficiency emission control technology —
                  making clean air a right, not a privilege.
                </p>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Recognition & Awards
            </h2>
            <p className="text-muted-foreground">
              Validated by India’s most respected startup and innovation
              programs.
            </p>
          </AnimSection>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, i) => (
              <AnimSection key={award.title} delay={i * 0.1}>
                <div
                  className="bg-white rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover transition-shadow"
                  data-ocid={`about.item.${i + 1}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      {award.icon}
                    </div>
                    <span className="text-xs font-bold text-muted-foreground">
                      {award.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">
                    {award.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {award.body}
                  </p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground">
              From a college idea to a nationally recognized clean-tech startup.
            </p>
          </AnimSection>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <AnimSection
                  key={item.year}
                  delay={i * 0.08}
                  className="flex gap-6 relative"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0 relative z-10">
                    {item.year.slice(2)}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="text-xs text-primary font-semibold mb-1">
                      {item.year}
                    </div>
                    <p className="text-foreground">{item.event}</p>
                  </div>
                </AnimSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
