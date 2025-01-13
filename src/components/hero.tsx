import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="mb-10 mt-36 flex flex-col items-center justify-center space-y-8 md:mt-24">
      <h1 className="text-center text-3xl font-medium md:text-6xl">
        Innovating <br /> <span className="text-primary">Education</span> and{" "}
        <span className="text-secondary">Research</span>
      </h1>
      <p className="w-[80%] text-justify text-xs font-thin text-muted-foreground md:w-[60%] md:text-center md:text-base">
        Empowering educational institutions with advanced ERP solutions and
        facilitating groundbreaking research through professional paper
        publishing services.
      </p>
      {/* <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Link href="#mca">
          <Button effect="shine" size="lg">
            Upgrade to Smarter ERP
          </Button>
        </Link>
        <Link href="#products">
          <Button
            effect="expandIcon"
            size="lg"
            icon={ArrowRight}
            iconPlacement="right"
            variant="outline"
          >
            Empower Your Publications
          </Button>
        </Link>
      </div> */}
    </div>
  );
}
