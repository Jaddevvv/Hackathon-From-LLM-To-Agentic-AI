import { Icons } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Trustee",
  description: "Your AI-Powered Scam Detector for Online Marketplaces",
  url: "http://localhost:3000",
  keywords: ["Scam Detection", "AI", "Chrome Extension", "Online Safety", "Marketplace Protection"],
  links: {
    email: "support@trustee.ai",
    twitter: "https://twitter.com/trustee_ai",
    discord: "https://discord.gg/trustee",
    github: "https://github.com/trustee-ai",
    instagram: "https://instagram.com/trustee_ai/",
  },
  header: [
    {
      trigger: "Features",
      content: {
        main: {
          icon: <Icons.logo className="h-6 w-6" />,
          title: "AI-Powered Protection",
          description: "Stay safe while shopping online with real-time scam detection.",
          href: "#",
        },
        items: [
          {
            href: "#",
            title: "Real-time Analysis",
            description: "Instant scanning of listings and messages for suspicious patterns.",
          },
          {
            href: "#",
            title: "Trust Score System",
            description: "Comprehensive scoring of sellers and listings.",
          },
          {
            href: "#",
            title: "Smart Assistant",
            description: "AI-powered guidance during conversations with sellers.",
          },
        ],
      },
    },
    {
      trigger: "Solutions",
      content: {
        items: [
          {
            title: "For Leboncoin",
            href: "#",
            description: "Protection for France&apos;s largest marketplace.",
          },
          {
            title: "eBay Protection",
            href: "#",
            description: "Stay safe while shopping on eBay.",
          },
          {
            title: "Etsy Safety",
            href: "#",
            description: "Protection for handmade and vintage items.",
          },
          {
            title: "Vinted Guard",
            href: "#",
            description: "Safe shopping for fashion and accessories.",
          },
          {
            title: "Multi-platform",
            href: "#",
            description: "Works across all major marketplaces.",
          },
          {
            title: "Enterprise",
            href: "#",
            description: "Custom solutions for marketplace platforms.",
          },
        ],
      },
    },
  ],
  pricing: [
    {
      name: "FREE",
      href: "#",
      price: "$0",
      period: "forever",
      yearlyPrice: "$0",
      features: [
        "Basic Scam Detection",
        "Trust Score for Listings",
        "Message Analysis",
        "Chrome Extension",
        "Community Support",
      ],
      description: "Perfect for occasional online shoppers",
      buttonText: "Get Started",
      isPopular: false,
    },
    {
      name: "PRO",
      href: "#",
      price: "$4.99",
      period: "month",
      yearlyPrice: "$39.99",
      features: [
        "Advanced Scam Detection",
        "Real-time Chat Analysis",
        "Image Verification",
        "Price Analysis",
        "Priority Support",
        "Custom Alerts",
      ],
      description: "For frequent marketplace users",
      buttonText: "Upgrade to Pro",
      isPopular: true,
    },
    {
      name: "BUSINESS",
      href: "#",
      price: "$9.99",
      period: "month",
      yearlyPrice: "$79.99",
      features: [
        "All Pro Features",
        "Multiple Devices",
        "API Access",
        "Custom Rules",
        "24/7 Premium Support",
        "Team Management",
      ],
      description: "For businesses and power users",
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: "What is Trustee?",
      answer: (
        <span>
          Trustee is an AI-powered Chrome extension that protects you from scams on online marketplaces. It analyzes listings, messages, and images in real-time to detect potential fraud and provide trust scores.
        </span>
      ),
    },
    {
      question: "How does Trustee work?",
      answer: (
        <span>
          Trustee uses advanced AI models to analyze marketplace listings and messages. It detects suspicious patterns, verifies images, and provides trust scores to help you make safe purchasing decisions.
        </span>
      ),
    },
    {
      question: "Which marketplaces does Trustee support?",
      answer: (
        <span>
          Trustee works with major marketplaces including Leboncoin, eBay, Etsy, and Vinted. We&apos;re constantly adding support for more platforms to keep you protected wherever you shop.
        </span>
      ),
    },
    {
      question: "Is my data safe with Trustee?",
      answer: (
        <span>
          Yes, Trustee prioritizes your privacy and security. We only analyze the content you&apos;re actively viewing, and we never store your personal information or marketplace credentials.
        </span>
      ),
    },
    {
      question: "Can I try Trustee before subscribing?",
      answer: (
        <span>
          Yes, Trustee offers a free plan with basic scam detection features. You can upgrade to Pro or Business plans for advanced features and priority support.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Product",
      links: [
        { href: "#", text: "Features", icon: null },
        { href: "#", text: "Pricing", icon: null },
        { href: "#", text: "Documentation", icon: null },
        { href: "#", text: "API", icon: null },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#", text: "About Us", icon: null },
        { href: "#", text: "Careers", icon: null },
        { href: "#", text: "Blog", icon: null },
        { href: "#", text: "Press", icon: null },
        { href: "#", text: "Partners", icon: null },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "#", text: "Community", icon: null },
        { href: "#", text: "Contact", icon: null },
        { href: "#", text: "Support", icon: null },
        { href: "#", text: "Status", icon: null },
      ],
    },
    {
      title: "Social",
      links: [
        {
          href: "#",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "#",
          text: "Instagram",
          icon: <RiInstagramFill />,
        },
        {
          href: "#",
          text: "Youtube",
          icon: <FaYoutube />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
