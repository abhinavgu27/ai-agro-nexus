import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Cpu, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Registered Farmers",
      description: "Active users on our platform"
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Accuracy Rate",
      description: "AI prediction accuracy"
    },
    {
      icon: Cpu,
      value: "1M+",
      label: "Predictions Made",
      description: "Total yield predictions"
    },
    {
      icon: Award,
      value: "₹500Cr",
      label: "Value Generated",
      description: "Estimated farmer benefits"
    }
  ];

  return (
    <section id="stats" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Platform Impact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform has revolutionized agricultural planning across India
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-elegant transition-smooth group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow transition-smooth">
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-primary mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;