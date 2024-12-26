import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { Header } from "./header";

export function Products() {
  return (
    <div
      className="flex w-[70%] flex-col items-center justify-center md:w-full"
      id="solutions"
    >
      <Header header="Our Solutions" />
      <BentoGrid className="mx-auto max-w-4xl">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"></div>
);
const items = [
  {
    title: "Journal of English Language and Literature (JELL)",
    description: "Online, bi-monthly peer-reviewed journal inviting original research and reviews.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "International Journal of Management Excellence (IJME)",
    description: "Peer-reviewed management journal indexed in Thomson and Google Scholar.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Journal of Research in Marketing (JORM)",
    description:
      "Bi-monthly journal for empirical and theoretical marketing research.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "My Campus Admin ERP System (MCA)",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title:
      "International Journal of Research in Business and Technology (IJRBT)",
    description:
      "Double-blind e-journal promoting access to quality and well-designed research.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
