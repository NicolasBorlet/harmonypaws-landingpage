"use client";

import Image from "next/image";
import { useState } from "react";

const Body = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="md:mt-36 sm:mt-24 mt-8">
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-[100]" onClick={()=>{setShowPopup(false)}}>
          <div className="bg-white rounded-2xl p-10 flex flex-col items-center gap-10 max-w-[450px]">
            <div>
              <p className="text-center">
                L`application est en cours de développement. Elle sera bientôt disponible sur Google Play et Apple Store.
              </p>
            </div>
            <button className="flex items-center gap-5 px-4 py-2 border rounded-lg" onClick={()=>{setShowPopup(false)}}>
              Fermer
            </button>
          </div>
        </div>
      )}
      <div className=" flex sm:flex-row flex-col gap-10 sm:gap-0 h-fit w-full items-center">
        <div className="md:w-[30%] w-full">
          <div className="flex flex-col gap-3 mb-10 md:mb-5">
            <h1 className="max-w-[341px] md:text-2xl text-lg font-Montserrat font-semibold text-start">
              L’app qui crée des{" "}
              <span className="relative span-title">liens</span> en unissant les{" "}
              <span className="relative span-title">pattes</span>
            </h1>
            <p className="max-w-[341px] md:text-sm text-xs font-Montserrat text-start">
              Rencontrez les propriétaires autour de vous pour socialiser votre
              chien.
            </p>
          </div>
          <div className="flex gap-[14px] justify-center md:justify-start">
            <a
              href="#"
              className="py-3 px-3 bg-black flex items-center justify-center rounded-2xl gap-2 cursor-pointer hover:bg-[#F7A400] transition-all"
              onClick={() => setShowPopup(true)}
            >
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
                <p className="text-[14px] font-Montserrat font-bold text-start text-white max-xl:text-[10px]">
                  Google Play
                </p>
              </div>
            </a>
            <a
              href="#"
              className="py-3 px-3 bg-black flex items-center justify-center rounded-2xl gap-2 cursor-pointer hover:bg-[#F7A400] transition-all"
              onClick={() => setShowPopup(true)}
            >
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
                <p className="text-[14px] font-Montserrat font-bold text-start text-white max-xl:text-[10px]">
                  Apple Store
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="md:w-[70%] sm:w-[90%] flex justify-end body-illustration relative">
          <Image
            src="/images/body/illustration.png"
            alt="logo-harmonypaws"
            width={900}
            height={550}
          />
        </div>
      </div>
      <div className="absolute top-0 max-xl:-top-20 left-0 -z-10 invisible lg:visible">
        <img src="/images/shared/paws-1.svg" alt="paws" />
      </div>
      <div className="absolute top-0 max-xl:-top-20 right-0 -z-10">
        <img src="/images/shared/paws-2.svg" alt="paws" />
      </div>
    </div>
  );
};

export default Body;
