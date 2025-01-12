"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, BookOpen } from "lucide-react";
import { Header } from "./header";
import Link from "next/link";

export function Products() {
  const products = [
    {
      title: "MyCampusAdmin",
      description:
        "Comprehensive ERP system trusted by over multiple institutions",
      icon: Building2,
      features: [
        "Streamlined Student Management",
        "Efficient Academic Planning",
        "Smart Resource Allocation",
        "Insightful Performance Analytics",
      ],
      href: "https://www.mycampusadmin.com/",
    },
    {
      title: "Publications",
      description: "Professional research paper publishing service",
      icon: BookOpen,
      features: [
        "Expert Peer Review",
        "Rigorous Format Compliance",
        "Advanced Citation Management",
        "Global Research Distribution",
      ],
      href: "https://techmindresearch.org/",
    },
  ];

  return (
    <section id="products" className="w-[90%]">
      <div className="">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <Header header="Our Services" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >

              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 rounded-lg bg-primary/10 p-3">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">
                    <Link
                      href={`${product.href}`}
                      target="_blank"
                      className="underline-offset-4 transition-all duration-200 hover:text-primary hover:underline"
                    >
                      {product.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm sm:text-base">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 flex-shrink-0 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
