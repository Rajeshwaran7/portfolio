"use client";

import { motion } from "framer-motion";

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-12 overflow-hidden">
      <motion.span
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="text-sm text-muted tabular-nums"
      >
        {index}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="text-3xl sm:text-4xl font-semibold tracking-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}
