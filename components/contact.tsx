"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Rss, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const links = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "Medium", href: profile.medium, icon: Rss },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const pill = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-line">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading index="07" title="Contact" />

        <Reveal className="max-w-2xl">
          <p className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10">
            Open to new full-stack and Generative AI roles — let&apos;s talk.
          </p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={container}
            className="flex flex-wrap gap-4"
          >
            {links.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                variants={pill}
                whileHover={{ y: -2 }}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm transition-colors hover:border-ink"
              >
                <Icon size={16} />
                {label}
              </motion.a>
            ))}
          </motion.div>

          <a
            href={`mailto:${profile.email}`}
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Say hello
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
