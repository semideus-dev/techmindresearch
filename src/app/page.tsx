import Hero from "@/components/hero";
import { Journals } from "@/components/journals";
import { MyCampsAdmin } from "@/components/mca";
import Navbar from "@/components/navbar";
import { Products } from "@/components/products";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <Products />
      <Journals />
      <MyCampsAdmin />
    </main>
  );
}
