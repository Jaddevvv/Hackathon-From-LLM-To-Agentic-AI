import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Shield, MessageSquare, Brain } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Install the Extension",
    content:
      "Add Trustee to Chrome with one click. Works across major marketplaces like Leboncoin, eBay, Etsy, and Vinted.",
    image: "chrome-store.png",
    icon: <Shield className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Automatic Analysis",
    content:
      "AI scans listings and messages to detect potential risks using scam patterns, language analysis, and image verification.",
    image: "trust-score.png",
    icon: <Brain className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Real-time Protection",
    content:
      "Get instant trust scores and warnings as you browse. Our AI continuously learns to keep you protected.",
    image: "ebay-screen.png",
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="How it works" subtitle="Protection in three simple steps">
      <Features data={data} />
    </Section>
  );
}
