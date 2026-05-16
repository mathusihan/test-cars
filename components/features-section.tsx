import { Shield, Gauge, Wrench, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Uncompromising Safety",
    description:
      "Advanced navigation systems and a reinforced composite hull ensure maximum protection at sea without sacrificing performance.",
  },
  {
    icon: Gauge,
    title: "Ocean-Ready Performance",
    description:
      "Every vessel is engineered for open water, with hydrodynamics optimised through countless hours of tank testing.",
  },
  {
    icon: Wrench,
    title: "Bespoke Craftsmanship",
    description:
      "Hand-finished by master shipwrights, each yacht represents hundreds of hours of meticulous attention to detail.",
  },
  {
    icon: Clock,
    title: "24/7 Concierge Service",
    description:
      "Our dedicated crew provides round-the-clock support, from berthing arrangements to exclusive charter event access.",
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
            Built for the Open Sea
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every detail is designed with purpose. From the sound of the bow cutting through waves to the feel of teak underfoot, excellence is non-negotiable.
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
