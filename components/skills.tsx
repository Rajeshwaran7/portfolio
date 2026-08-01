"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiAngular,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiNx,
  SiClaude,
  SiStripe,
  SiContentful,
  SiGooglemaps,
} from "react-icons/si";
import { TbBrandAws, TbBrandAzure, TbBrandOpenai } from "react-icons/tb";
import { Boxes, Layers, Bot, Share2, Flame, Code2, type LucideIcon } from "lucide-react";
import { skills } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

const iconMap: Record<string, IconType | LucideIcon> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "HTML/CSS": SiHtml5,
  React: SiReact,
  Angular: SiAngular,
  Redux: SiRedux,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  NestJS: SiNestjs,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  DynamoDB: TbBrandAws,
  CosmosDB: TbBrandAzure,
  Redis: SiRedis,
  "AWS (EC2, S3, Lambda, CI/CD)": TbBrandAws,
  "Azure (Blob, Service Bus, gRPC)": TbBrandAzure,
  Docker: SiDocker,
  Microservices: Boxes,
  Monolithic: Layers,
  "Nx Monorepo": SiNx,
  OpenAI: TbBrandOpenai,
  "Agentic AI": Bot,
  "Claude & other LLMs": SiClaude,
  Stripe: SiStripe,
  Segment: Share2,
  Braze: Flame,
  Contentful: SiContentful,
  "Google Maps": SiGooglemaps,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-line">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading index="02" title="Skills" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10"
        >
          {skills.map((group) => (
            <motion.div key={group.category} variants={item}>
              <h3 className="text-sm font-medium mb-3">{group.category}</h3>
              <ul className="space-y-2.5">
                {group.items.map((it) => {
                  const Icon = iconMap[it] ?? Code2;
                  return (
                    <li
                      key={it}
                      className="flex items-center gap-2.5 text-muted text-sm leading-snug transition-colors hover:text-ink cursor-default"
                    >
                      <Icon size={16} className="shrink-0" />
                      <span>{it}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
