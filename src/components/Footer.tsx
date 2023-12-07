import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="py-24 pl-8 pr-8 flex lg:gap-32 md:gap-16 gap-10 justify-between items-center md:items-start flex-col md:flex-row"
      id="contact"
    >
      <div>
        <div>
          <Image
            src="/images/shared/logo.png"
            alt="logo-harmonypaws"
            width={247}
            height={85}
          />
        </div>
        <div className="flex gap-11 justify-center mt-7">
          <Image
            src="/images/footer/play-logo-yellow.png"
            alt="Google Play Logo"
            width={40}
            height={45}
          />
          <Image
            src="/images/footer/apple-logo-yellow.png"
            alt="Apple Logo"
            width={40}
            height={45}
          />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-RoundsBlack text-[#6B4796] uppercase">
          Informations
          <ul className="font-Montserrat text-base font-semibold normal-case mt-12">
            <li>Mentions légales</li>
            <li>CGU</li>
            <li>Plan du site</li>
          </ul>
        </h3>
      </div>
      <div>
        {" "}
        <h3 className="text-2xl font-RoundsBlack text-[#6B4796] uppercase">
          Retrouvez-nous
        </h3>
        <div className="grid gap-10 mt-12 items-center sm:items-start sm:grid-cols-4 grid-cols-2">
          <Image
            src="/images/footer/logo-insta.svg"
            alt="Instagram Logo"
            width={32}
            height={32}
          />
          <Image
            src="/images/footer/logo-tiktok.svg"
            alt="Instagram Logo"
            width={32}
            height={32}
          />
          <Image
            src="/images/footer/logo-facebook.svg"
            alt="Instagram Logo"
            width={18}
            height={32}
          />
          <Image
            src="/images/footer/logo-linkedin.svg"
            alt="Instagram Logo"
            width={32}
            height={32}
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
