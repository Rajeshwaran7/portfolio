"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const tags = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const tag = {
  hidden: { opacity: 0, y: 4 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

export function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-line">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading index="04" title="Projects" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="grid sm:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={card}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="border border-line rounded-2xl p-8 transition-[border-color,box-shadow] hover:border-ink hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4 mb-1">
                <p className="text-sm text-muted">{project.domain}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="group/link inline-flex items-center gap-1 text-sm text-muted shrink-0 hover:text-ink transition-colors"
                  >
                    Visit
                    <ExternalLink
                      size={13}
                      className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
              <p className="text-muted mb-4 leading-relaxed">{project.description}</p>

              <ul className="space-y-2 mb-5">
                {project.points.map((point) => (
                  <li key={point} className="text-sm text-muted leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>

              <motion.div variants={tags} className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={tag}
                    className="text-xs border border-line rounded-full px-3 py-1 text-muted"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
