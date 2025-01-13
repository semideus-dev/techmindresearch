import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { MyCampsAdmin } from "@/components/mca";
import Navbar from "@/components/navbar";
import { Products } from "@/components/products";
import { Publications } from "@/components/publications";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <Products />
      <Publications />
      <MyCampsAdmin />
      <div className="my-24 flex flex-col">
        <h1 className="text-center text-xl font-semibold md:text-3xl">
          Our Clients
        </h1>
        <div className="my-5 flex flex-col items-center justify-center gap-16 md:flex-row">
          <img
            src="/assets/sarhali.png"
            alt="Sarhali"
            width={180}
            height={180}
            className="grayscale transition-all duration-300 hover:grayscale-0"
          />
          <img
            src="/assets/aimtec.png"
            alt="AIMETC"
            width={170}
            height={170}
            className="grayscale transition-all duration-300 hover:grayscale-0"
          />
          <img
            src="/assets/asu.png"
            alt="ASU"
            width={170}
            height={170}
            className="grayscale transition-all duration-300 hover:grayscale-0"
          />
          <img
            src="/assets/lkc-kpt.png"
            alt="LKC KPT"
            width={160}
            height={160}
            className="grayscale transition-all duration-300 hover:grayscale-0"
          />
          <img
            src="/assets/kcl-law.png"
            alt="KCL law"
            width={190}
            height={190}
            className="grayscale transition-all duration-300 hover:grayscale-0"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
