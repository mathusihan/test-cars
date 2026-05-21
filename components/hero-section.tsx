"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-aircraft.jpg"
          alt="Luxury private jet"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <p className="text-primary font-medium tracking-widest text-sm mb-4">
            PREMIUM PERFORMANCE
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-foreground mb-6 text-balance">
            Power. Precision.{" "}
            <span className="text-primary">Perfection.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Experience the pinnacle of aerospace engineering. Where elegance meets the open skies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              Explore Collection
              <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
              Watch Film
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown size={32} className="text-muted-foreground" />
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-secondary/50 backdrop-blur-sm border-t border-border z-10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary">7,000nm</p>
              <p className="text-sm text-muted-foreground">Range</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-foreground">Mach<span className="text-primary"> 0.92</span></p>
              <p className="text-sm text-muted-foreground">Max Speed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-foreground">51,000<span className="text-primary">ft</span></p>
              <p className="text-sm text-muted-foreground">Ceiling</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-foreground">19<span className="text-primary"></span></p>
              <p className="text-sm text-muted-foreground">Passengers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
