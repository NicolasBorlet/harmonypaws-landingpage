import Image from "next/image";

const Body = () => {
  return (
    <div className="mt-36 overflow-hidden">
      <div className=" flex flex-row h-fit w-full items-center">
        <div className="w-[30%]">
          <div className="flex flex-col gap-3 mb-3">
            <h1 className="max-w-[341px] text-2xl font-Montserrat font-semibold text-start">
              L’app qui crée des{" "}
              <span className="relative span-title">liens</span> en unissant les{" "}
              <span className="relative span-title">pattes</span>
            </h1>
            <p className="max-w-[341px] text-sm font-Montserrat text-start">
              Rencontrez les propriétaires autour de vous pour socialiser votre
              chien.
            </p>
          </div>
          <div className="flex gap-[14px]">
            <a className="py-3 px-3 bg-black flex items-center justify-center rounded-2xl gap-2 cursor-pointer">
              <div>
                <Image
                  src="/images/body/play-logo.png"
                  alt="logo-harmonypaws"
                  width={23}
                  height={25}
                />
              </div>
              <div>
                <p className="text-[10px] font-Montserrat text-start text-white">
                  Télécharger sur{" "}
                </p>
                <p className="text-[14px] font-Montserrat font-bold text-start text-white">
                  Google Play
                </p>
              </div>
            </a>
            <a className="py-3 px-3 bg-black flex items-center justify-center rounded-2xl gap-2 cursor-pointer">
              <div>
                <Image
                  src="/images/body/apple-logo.png"
                  alt="logo-harmonypaws"
                  width={23}
                  height={25}
                />
              </div>
              <div>
                <p className="text-[10px] font-Montserrat text-start text-white">
                  Télécharger sur{" "}
                </p>
                <p className="text-[14px] font-Montserrat font-bold text-start text-white">
                  Google Play
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="w-[70%] flex justify-end body-illustration relative">
          <Image
            src="/images/body/illustration.png"
            alt="logo-harmonypaws"
            width={900}
            height={550}
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 -z-10">
        <img src="/images/shared/paws-1.svg" alt="paws" />
      </div>
      <div className="absolute top-0 right-0 -z-10">
        <img src="/images/shared/paws-2.svg" alt="paws" />
      </div>
    </div>
  );
};

export default Body;
