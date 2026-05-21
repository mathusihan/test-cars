import { Shield, Gauge, Wrench, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Uncompromising Safety",
    description:
      "Advanced navigation systems and reinforced hull construction ensure maximum protection without sacrificing performance on the water.",
  },
  {
    icon: Gauge,
    title: "Ocean-Ready Performance",
    description:
      "Every yacht is engineered for open waters, with hull designs optimized through countless hours of hydrodynamic testing.",
  },
  {
    icon: Wrench,
    title: "Bespoke Craftsmanship",
    description:
      "Hand-assembled by master shipwrights, each yacht represents thousands of hours of meticulous attention to detail.",
  },
  {
    icon: Clock,
    title: "24/7 Concierge Service",
    description:
      "Our dedicated team provides round-the-clock support, from maintenance scheduling to exclusive marina access.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest text-sm mb-3">
            WHY CHOOSE APEX
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Engineered for Excellence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every detail is designed with purpose. From the power of the engines to the feel of the teak deck, excellence is non-negotiable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
