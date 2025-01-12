export default function Navbar() {
  return (
    <div className="w-full flex-1 items-center">
      <nav className="z-50 flex w-full items-center justify-center p-4 pt-10 backdrop-blur-md">
        <img
          src="/assets/alt-logo.png"
          alt="Techmind Logo"
          width={150}
          height={50}
        />
      </nav>
    </div>
  );
}
