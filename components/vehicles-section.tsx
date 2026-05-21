"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Gauge, Zap, Plane } from "lucide-react";

const vehicles = [
  {
    id: 1,
    name: "Shadow Light",
    category: "Light Jet",
    image: "/images/aircraft-1.jpg",
    price: "$12,500,000",
    specs: {
      power: "7,000 lbf",
      speed: "Mach 0.80",
      range: "2,100 nm",
    },
  },
  {
    id: 2,
    name: "Inferno Ultra",
    category: "Ultra Long Range",
    image: "/images/aircraft-2.jpg",
    price: "$65,000,000",
    specs: {
      power: "15,400 lbf",
      speed: "Mach 0.90",
      range: "7,500 nm",
    },
  },
  {
    id: 3,
    name: "Volt Business",
    category: "Large Cabin",
    image: "/images/aircraft-3.jpg",
    price: "$45,000,000",
    specs: {
      power: "13,500 lbf",
      speed: "Mach 0.85",
      range: "5,950 nm",
    },
  },
];

export function VehiclesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="vehicles" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <p className="text-primary font-medium tracking-widest text-sm mb-3">
              01 / 06
            </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Featured Aircraft
          </h2>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary/80 gap-2 self-start md:self-auto">
            View All Models
            <ArrowRight size={18} />
          </Button>
        </div>

        {/* Vehicles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {vehicles.map((vehicle) => (
            <Card
              key={vehicle.id}
              className="bg-card border-border overflow-hidden group cursor-pointer transition-all duration-300 hover:border-primary/50"
              onMouseEnter={() => setHoveredId(vehicle.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-secondary/80 backdrop-blur-sm text-xs font-medium text-foreground rounded-full">
                    {vehicle.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {vehicle.name}
                    </h3>
                    <p className="text-primary font-semibold">{vehicle.price}</p>
                  </div>
                </div>

                {/* Specs */}
                <div
                  className={`grid grid-cols-3 gap-4 pt-4 border-t border-border transition-opacity duration-300 ${
                    hoveredId === vehicle.id ? "opacity-100" : "opacity-70"
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <Zap size={18} className="text-primary mb-1" />
                    <p className="text-xs text-muted-foreground">{vehicle.specs.power}</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Gauge size={18} className="text-primary mb-1" />
                    <p className="text-xs text-muted-foreground">{vehicle.specs.speed}</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Plane size={18} className="text-primary mb-1" />
                    <p className="text-xs text-muted-foreground truncate w-full">{vehicle.specs.range}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
