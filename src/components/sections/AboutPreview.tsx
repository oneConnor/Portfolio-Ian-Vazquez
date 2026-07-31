import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { personal } from "@/lib/data/personal";
import { aboutMe } from "@/lib/data/about";

export function AboutPreview() {
  return (
    <Section aria-labelledby="about-preview-heading" className="bg-muted/30">
      <Container>
        <AnimatedSection variant="fadeIn">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex flex-col gap-6 lg:max-w-xl">
              <h2 id="about-preview-heading" className="text-h1 text-foreground">
                Sobre mí
              </h2>
              <p className="text-body-lg text-muted-foreground">
                {aboutMe.paragraphs[0]}
              </p>
              <div>
                <Button as="a" href="/about" variant="secondary">
                  Saber más
                </Button>
              </div>
            </div>
            <div className="relative w-80 shrink-0">
              <Image
                src="/about-image.png"
                alt={personal.displayName}
                width={320}
                height={427}
                className="h-auto w-full rounded-2xl object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
