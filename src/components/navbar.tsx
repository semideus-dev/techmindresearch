import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex-1 items-center">
      <nav className="fixed z-50 flex w-full flex-col items-center py-4 justify-center gap-4 md:justify-between md:flex-row md:gap-0 md:py-6 md:px-10 backdrop-blur-md">
        <img
          src="/assets/alt-logo.png"
          alt="Techmind Logo"
          width={100}
          height={50}
        />
        <div className="flex items-center justify-center gap-5 text-sm md:text-base">
          <Link href="https://techmindresearch.org/" target="_blank">
            Publications
          </Link>
          <Link href="https://www.mycampusadmin.com/" target="_blank">
            MyCampusAdmin
          </Link>
        </div>
      </nav>
    </div>
  );
}
