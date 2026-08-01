import Image from "next/image";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="py-28 border-t border-line">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading index="01" title="About" />

        <div className="grid sm:grid-cols-[200px_1fr] gap-10 items-start">
          <Reveal>
            <Image
              src={profile.photo}
              alt={profile.name}
              width={200}
              height={200}
              className="rounded-2xl object-cover w-40 h-40 sm:w-[200px] sm:h-[200px] grayscale transition-[filter] duration-500 hover:grayscale-0"
            />
          </Reveal>

          <Reveal delay={0.1} className="space-y-4 max-w-2xl">
            {profile.about.map((line) => (
              <p key={line} className="text-lg text-muted leading-relaxed">
                {line}
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
