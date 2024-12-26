"use client";
import React from "react";

interface HeaderProps {
  header: string;
}

export function Header({ header }: HeaderProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background">
      <h1 className="relative z-20 text-center text-3xl font-bold text-white md:text-6xl">
        {header}
      </h1>
      <div className="relative my-4 h-10 w-[40rem]">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-secondary to-transparent blur-sm" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-secondary to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-secondary to-transparent blur-sm" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      </div>
    </div>
  );
}
