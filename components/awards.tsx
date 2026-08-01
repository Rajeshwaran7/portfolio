"use client";

import { motion } from "framer-motion";
import { awards } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Awards() {
  return (
    <section id="awards" className="py-28 border-t border-line">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading index="05" title="Awards & Recognition" />

        <ul className="space-y-4 max-w-2xl">
          {awards.map((award, i) => (
            <Reveal key={award} delay={i * 0.05}>
              <li className="relative pl-4 text-muted leading-relaxed">
                <motion.span
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 + 0.1 }}
                  style={{ originY: 0 }}
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-ink/30"
                />
                {award}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
