"use client";

import { ExternalLink } from "lucide-react";
import { TbBrandAzure } from "react-icons/tb";
import { certifications } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Certifications() {
  return (
    <section id="certifications" className="py-28 border-t border-line">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading index="06" title="Certifications" />

        <div className="flex flex-col gap-4 max-w-2xl">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.05}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border border-line rounded-2xl px-6 py-5 transition-colors hover:border-ink"
              >
                <div className="flex items-center gap-4">
                  <TbBrandAzure size={24} className="shrink-0 text-muted" />
                  <div>
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-sm text-muted">{cert.issuer}</p>
                  </div>
                </div>
                <ExternalLink
                  size={16}
                  className="shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
