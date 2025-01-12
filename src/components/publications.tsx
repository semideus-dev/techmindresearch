"use client";

import { Header } from "./header";
import { cn } from "@/lib/utils";
import {
  ALargeSmall,
  Briefcase,
  ChartNoAxesCombined,
  Cpu,

} from "lucide-react";
import Link from "next/link";

export function Publications() {
  return (
    <div className="my-10 mt-44 flex w-[90%] flex-col" id="publications">
      <Header header="Publications" link="https://techmindresearch.org/" />
      <Features />
    </div>
  );
}

export function Features() {
  const features = [
    {
      title: "English Literature",
      description:
        "A bimonthly, peer-reviewed journal offers free access to research and book reviews.",
      icon: <ALargeSmall />,
      link: "https://techmindresearch.org/index.php/jell",
    },
    {
      title: "Management Excellence",
      description:
        "A peer-reviewed, bi-monthly management journal indexed in top global databases.",
      icon: <Briefcase />,
      link: "https://techmindresearch.org/index.php/ijme",
    },
    {
      title: "Research in Marketing",
      description:
        "Optimize library operations: manage inventory, loans, fees, and a user-friendly catalog.",
      icon: <ChartNoAxesCombined />,
      link: "https://techmindresearch.org/index.php/jorm",
    },
    {
      title: "Business & Technology",
      description:
        "Share updates and events via a digital notice board on web or mobile for timely access.",
      icon: <Cpu />,
      link: "https://techmindresearch.org/index.php/ijrbt",
    },
  ];
  return (
    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  link,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  link: string;
}) => {
  return (
    <Link href={link} target="_blank" className="m-0 p-0">
      <div
        className={cn(
          "group/feature relative flex flex-col py-10 dark:border-neutral-800 lg:border-r",
          (index === 0 || index === 4) && "dark:border-neutral-800 lg:border-l",
          index < 4 && "dark:border-neutral-800 lg:border-b",
        )}
      >
        {index < 4 && (
          <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
        )}
        {index >= 4 && (
          <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
        )}
        <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
          {icon}
        </div>
        <div className="relative z-10 mb-2 px-10 text-lg font-bold">
          <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary dark:bg-neutral-700" />
          <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
            {title}
          </span>
        </div>
        <p className="relative z-10 max-w-xs px-10 text-sm text-neutral-600 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};
