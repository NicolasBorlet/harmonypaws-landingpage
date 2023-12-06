import Image from "next/image";

const Header = () => {
  return (
    <header
      className="flex flex-row items-center"
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
        <ul
          className="flex"
          style={{
            gap: "2rem",
          }}
        >
          <li className="text-lg uppercase font-RoundsBlack">Telecharger</li>
          <li className="text-lg uppercase font-RoundsBlack">Concept</li>
          <li className="text-lg uppercase font-RoundsBlack">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
