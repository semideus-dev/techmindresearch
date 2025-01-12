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
import { Book, Calendar, CreditCard, DollarSign, GraduationCap, School, User } from "lucide-react";

export function MyCampsAdmin() {
  return (
    <div className="my-10 mt-44 flex flex-col" id="mca">
      <Header header="MyCampusAdmin" link="https://www.mycampusadmin.com/" />
      <Features />
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


export function Features() {
  const features = [
    {
      title: "Admission & Student Profile Module",
      description:
        "Oversee admissions and maintain detailed, real-time student profiles from start to finish.",
      icon: <User />,
    },
    {
      title: "Attendance Management System",
      description:
        "Track student and faculty attendance, generate reports, and manage leave approvals.",
      icon: <Calendar />,
    },
    {
      title: "Library Management System",
      description:
        "Optimize library operations: manage inventory, loans, fees, and a user-friendly catalog.",
      icon: <Book />,
    },
    {
      title: "Digital Notice Board",
      description:
        "Share updates and events via a digital notice board on web or mobile for timely access.",
      icon: <IconCloud />,
    },
    {
      title: "Auto ID Card Generation",
      description:
        "YAutomate personalized ID cards with photos, barcodes, and QR codes from profiles.",
      icon: <CreditCard />,
    },
    {
      title: "Fee Management System",
      description:
        "Streamline fee collection with online payments, receipts, reminders, and real-time tracking.",
      icon: <DollarSign />,
    },
    {
      title: "eLearning System",
      description:
        "Centralize online learning with courses, assignments, quizzes, and progress tracking.",
      icon: <School />,
    },
    {
      title: "Examination Module",
      description:
        "Automate exams end-to-end: papers, scheduling, evaluations, results, and reports.",
      icon: <GraduationCap />,
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
