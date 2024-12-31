"use client";

import { Header } from "./header";
import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function MyCampsAdmin() {
  return (
    <div className="my-10 mt-44 flex flex-col" id="mca">
      <Header header="MyCampusAdmin" link="https://www.mycampusadmin.com/" />
      <Features />
      <div className="hidden md:flex">
        <TabsDemo />
      </div>
      <div className="my-24 flex flex-col">
        <h1 className="text-center text-xl font-semibold md:text-3xl">
          Our Proud Partners
        </h1>
        <div className="my-5 flex flex-col items-center justify-center gap-16 md:flex-row">
          <Image
            src="/assets/sarhali.png"
            alt="Sarhali"
            width={170}
            height={170}
            className="grayscale transition-all duration-300 hover:grayscale-0"
          />
          <Image
            src="/assets/aimtec.png"
            alt="AIMETC"
            width={170}
            height={170}
            className="grayscale transition-all duration-300 hover:grayscale-0"
          />
          <Image
            src="/assets/asu.png"
            alt="ASU"
            width={170}
            height={170}
            className="grayscale transition-all duration-300 hover:grayscale-0"
          />
          <Image
            src="/assets/lkc-kpt.png"
            alt="LKC KPT"
            width={170}
            height={170}
            className="grayscale transition-all duration-300 hover:grayscale-0"
          />
        </div>
      </div>
    </div>
  );
}

export function TabsDemo() {
  const tabs = [
    {
      title: "Dashboard",
      value: "dashboard",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Dashboard</p>
          <Image
            src="/assets/mca/dashboard.png"
            alt="Dashboard"
            width={1000}
            height={1000}
            className="my-4 rounded-xl border-4 border-secondary"
          />
        </div>
      ),
    },
    {
      title: "Library",
      value: "library",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Library Module</p>
          <Image
            src="/assets/mca/library.png"
            alt="Dashboard"
            width={1000}
            height={1000}
            className="my-4 rounded-xl border-4 border-secondary"
          />
        </div>
      ),
    },
    {
      title: "Admission",
      value: "admission",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Admissions Module</p>
          <Image
            src="/assets/mca/admission.png"
            alt="Dashboard"
            width={1000}
            height={1000}
            className="my-4 rounded-xl border-4 border-secondary"
          />
        </div>
      ),
    },
    {
      title: "Finance",
      value: "finance",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Finance Module</p>
          <Image
            src="/assets/mca/fee.png"
            alt="Dashboard"
            width={1000}
            height={1000}
            className="my-4 rounded-xl border-4 border-secondary"
          />
        </div>
      ),
    },
    {
      title: "Employee",
      value: "employee",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Employee Profile</p>
          <Image
            src="/assets/mca/employee.png"
            alt="Dashboard"
            width={1000}
            height={1000}
            className="my-4 rounded-xl border-4 border-secondary"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="b relative mx-auto flex h-[20rem] w-full max-w-5xl flex-col items-start justify-start [perspective:1000px] md:h-[40rem]">
      <Tabs tabs={tabs} />
    </div>
  );
}

export function Features() {
  const features = [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
    {
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <IconHelp />,
    },
    {
      title: "Money back guarantee",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <IconHeart />,
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
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
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
  );
};
