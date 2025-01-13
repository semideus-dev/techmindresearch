"use client";

import { Header } from "./header";
import { cn } from "@/lib/utils";
import { IconCloud } from "@tabler/icons-react";
import {
  Award,
  Book,
  Calendar,
  CreditCard,
  DollarSign,
  GraduationCap,
  LayoutDashboard,
  School,
  User,
  User2,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function MyCampsAdmin() {
  return (
    <div className="my-10 mt-44 flex w-[90%] flex-col" id="mca">
      <Header header="MyCampusAdmin" link="https://www.mycampusadmin.com/" />
      <Features />
      <Stats />
      
    </div>
  );
}

export function Stats() {
  return (
    <div className="my-10 flex flex-col items-center justify-center space-y-6">
      <div className="space-y-2">
        <h1 className="text-center text-xl font-semibold md:text-3xl">
          Trusted by Leading Institutions
        </h1>
        <p className="text-center text-xs text-muted-foreground md:text-sm">
          Join the growing number of institutions that trust Techmind Research
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-4">
        <div className="flex flex-col items-center space-y-6 rounded-xl border p-5 text-xl">
          <Button size="icon" className="rounded-full">
            <School />
          </Button>
          <h1 className="text-3xl font-black md:text-5xl">5+</h1>
          <span>Institutions</span>
        </div>
        <div className="flex flex-col items-center space-y-6 rounded-xl border p-5 text-xl">
          <Button size="icon" className="rounded-full">
            <User2 />
          </Button>
          <h1 className="text-3xl font-black md:text-5xl">7000+</h1>
          <span>Students Managed</span>
        </div>
        <div className="flex flex-col items-center space-y-6 rounded-xl border p-5 text-xl">
          <Button size="icon" className="rounded-full">
            <Award />
          </Button>
          <h1 className="text-3xl font-black md:text-5xl">5+</h1>
          <span>Yrs of Expierence</span>
        </div>
        <div className="flex flex-col items-center space-y-6 rounded-xl border p-5 text-xl">
          <Button size="icon" className="rounded-full">
            <LayoutDashboard />
          </Button>
          <h1 className="text-3xl font-black md:text-5xl">100%</h1>
          <span>Customization</span>
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
      link: "https://www.mycampusadmin.com/features/Admission.html",
    },
    {
      title: "Attendance Management System",
      description:
        "Track student and faculty attendance, generate reports, and manage leave approvals.",
      icon: <Calendar />,
      link: "https://www.mycampusadmin.com/features/Attendance.html",
    },
    {
      title: "Library Management System",
      description:
        "Optimize library operations: manage inventory, loans, fees, and a user-friendly catalog.",
      icon: <Book />,
      link: "https://www.mycampusadmin.com/features/Library.html",
    },
    {
      title: "Digital Notice Board",
      description:
        "Share updates and events via a digital notice board on web or mobile for timely access.",
      icon: <IconCloud />,
      link: "https://www.mycampusadmin.com/features/Activity.html",
    },
    {
      title: "Auto ID Card Generation",
      description:
        "Automate personalized ID cards with photos, barcodes, and QR codes from profiles.",
      icon: <CreditCard />,
      link: "https://www.mycampusadmin.com/features/Admission.html",
    },
    {
      title: "Fee Management System",
      description:
        "Streamline fee collection with online payments, receipts, reminders, and real-time tracking.",
      icon: <DollarSign />,
      link: "https://www.mycampusadmin.com/features/Attendance.html",
    },
    {
      title: "eLearning System",
      description:
        "Centralize online learning with courses, assignments, quizzes, and progress tracking.",
      icon: <School />,
      link: "https://www.mycampusadmin.com/features/Mentoring.html",
    },
    {
      title: "Examination Module",
      description:
        "Automate exams end-to-end: papers, scheduling, evaluations, results, and reports.",
      icon: <GraduationCap />,
      link: "https://www.mycampusadmin.com/features/Examination.html",
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
  link,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  link: string;
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
        <Link href={link} className="underline underline-offset-2 transition-all duration-300" target="_blank">
          <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
            {title}
          </span>
        </Link>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-sm text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </div>
  );
};
