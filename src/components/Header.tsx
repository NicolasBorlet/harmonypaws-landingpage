import Image from "next/image";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header
      className="flex md:flex-row gap-y-6 md:gap-y-0 flex-col items-center pt-12 md:pr-24 md:pl-24 pr-8 pl-8"
      style={{
        justifyContent: "space-between",
      }}
    >
      <div>
        <Image
          src="/images/shared/logo.svg"
          alt="logo-harmonypaws"
          width={247}
          height={233}
        />
      </div>
      <nav className="sm:pl-0 sm:pr-0">
        <ul
          className="flex ul flex-wrap sm:flex-nowrap justify-center"
          style={{ gap: "2rem" }}
        >
          <li className="sm:text-lg text-xs uppercase font-RoundsBlack relative">
            <a className="cursor-pointer" href="#">
              {t("headerItem1")}
            </a>
            <div className="bar" style={{ backgroundColor: "#6B4796" }}></div>
          </li>
          <li className="sm:text-lg text-xs uppercase font-RoundsBlack relative">
            <a className="cursor-pointer" href="#concept">
              Concept
            </a>
            <div className="bar" style={{ backgroundColor: "#F49819" }}></div>
          </li>
          <li className="sm:text-lg text-xs uppercase font-RoundsBlack relative">
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
