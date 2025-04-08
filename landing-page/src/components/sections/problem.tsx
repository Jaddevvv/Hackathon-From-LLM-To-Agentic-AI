import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, MessageSquare, Shield } from "lucide-react";

const problems = [
  {
    title: "Fake Listings Everywhere",
    description:
      "Online marketplaces are filled with fake listings and fraudulent sellers, making it hard to find legitimate opportunities.",
    icon: AlertTriangle,
  },
  {
    title: "Sophisticated Scam Tactics",
    description:
      "Scammers use sophisticated tactics that are difficult to detect, especially for new or vulnerable users.",
    icon: MessageSquare,
  },
  {
    title: "Inadequate Platform Protection",
    description:
      "Platforms offer basic safety features but can't protect users during private conversations where most fraud occurs.",
    icon: Shield,
  },
];

export default function Component() {
  return (
    <Section
      title="The Problem"
      subtitle="Marketplaces are becoming increasingly risky for buyers."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
