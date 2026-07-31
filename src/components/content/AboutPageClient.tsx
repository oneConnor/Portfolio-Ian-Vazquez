"use client";

import { useState } from "react";
import { CVDownloadButton } from "@/components/content/CVDownloadButton";
import { AboutSection } from "@/components/content/AboutSection";
import { Container } from "@/components/ui/Container";
import { aboutMe, aboutSections } from "@/lib/data/about";
import { cn } from "@/lib/utils";

type AboutTab = "about" | "history";

const tabs: Array<{ id: AboutTab; label: string }> = [
  { id: "about", label: "Acerca de mi" },
  { id: "history", label: "Historia" },
];

export function AboutPageClient() {
  const [activeTab, setActiveTab] = useState<AboutTab>("about");

  return (
    <Container className="py-20">
      <section className="max-w-3xl">
        <header>
          <p className="text-caption font-semibold uppercase tracking-wide text-foreground">
            About
          </p>
          <h1 className="mt-3 text-display text-foreground">
            Sobre Mí
          </h1>
        </header>

        <div
          role="tablist"
          aria-label="Secciones de Sobre Mí"
          className="mt-8 inline-flex flex-wrap gap-1 rounded-full border border-border bg-muted/40 p-1"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                activeTab === tab.id
                  ? "bg-accent text-slate-950 dark:text-white"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-12">
          {activeTab === "about" ? (
            <div
              id="panel-about"
              role="tabpanel"
              aria-labelledby="tab-about"
            >
              {aboutMe.paragraphs.map((paragraph, index) => (
                <p
                  key={`${aboutMe.id}-${index}`}
                  className="mb-4 text-body-lg text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <div
              id="panel-history"
              role="tabpanel"
              aria-labelledby="tab-history"
            >
              {aboutSections.map((section) => (
                <AboutSection
                  key={section.id}
                  id={section.id}
                  heading={section.heading}
                >
                  {section.content}
                </AboutSection>
              ))}
            </div>
          )}
        </div>

        <CVDownloadButton className="mt-10" />
      </section>
    </Container>
  );
}
