"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="experience" className="py-28 border-t border-line">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading index="03" title="Experience" />

        <div className="space-y-12">
          {experience.map((job, i) => (
            <Reveal
              key={job.role + job.period}
              delay={i * 0.08}
              className="grid sm:grid-cols-[1fr_2fr] gap-4 sm:gap-10"
            >
              <div className="relative sm:pl-5">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 + 0.25 }}
                  className="hidden sm:block absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-ink"
                />
                <p className="font-medium">{job.role}</p>
                <p className="text-sm text-muted">{job.company}</p>
                <p className="text-sm text-muted">{job.period}</p>
              </div>
              <ul className="space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="text-muted leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 pt-8 border-t border-line">
          <p className="text-sm text-muted mb-1">Education</p>
          <p className="font-medium">{education.degree}</p>
          <p className="text-muted">
            {education.school} · {education.period}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
