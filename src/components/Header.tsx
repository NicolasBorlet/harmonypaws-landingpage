import Image from "next/image";

const Header = () => {
  return (
    <header
      className="flex flex-row items-center pt-12"
      style={{
        justifyContent: "space-between",
      }}
    >
      <div>
        <Image
          src="/images/shared/logo.png"
          alt="logo-harmonypaws"
          width={247}
          height={233}
        />
      </div>
      <nav>
        <ul className="flex ul" style={{ gap: "2rem" }}>
          <li className="text-lg uppercase font-RoundsBlack relative">
            <a className="cursor-pointer">Telecharger</a>
            <div className="bar" style={{ backgroundColor: "#6B4796" }}></div>
          </li>
          <li className="text-lg uppercase font-RoundsBlack relative">
            <a className="cursor-pointer" href="#concept">
              Concept
            </a>
            <div className="bar" style={{ backgroundColor: "#F49819" }}></div>
          </li>
          <li className="text-lg uppercase font-RoundsBlack relative">
            <a className="cursor-pointer" href="#contact">
              Contact
            </a>
            <div className="bar" style={{ backgroundColor: "#00A453" }}></div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
