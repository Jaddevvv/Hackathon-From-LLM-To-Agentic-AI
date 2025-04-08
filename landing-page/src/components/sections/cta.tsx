import { Icons } from "@/components/icons";
import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CtaSection() {
  return (
    <Section
      id="cta"
      title="Stay Safe While Shopping Online"
      subtitle="Protect yourself from Social Engineering with 1 click"
      className="bg-primary/10 rounded-xl py-16"
    >
      <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
        <Link
          href="https://github.com/Jaddevvv/Hackathon-From-LLM-To-Agentic-AI"
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full sm:w-auto text-background flex gap-2"
          )}
        >
          <Icons.logo className="h-6 w-6" />
          Install Chrome Extension
        </Link>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-4">
        Free plan available. No credit card required.
      </p>
    </Section>
  );
}
