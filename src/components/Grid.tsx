const Grid = () => {
  return (
    <div
      className="md:pr-24 md:pl-24 pl-8 pr-8 mt-20 bg-[#FDE6D7] pt-[60px] pb-[100px] w-full flex flex-col md:gap-20 gap-10 items-center"
      id="concept"
    >
      <div className="flex flex-col items-center">
        <h2 className="md:text-3xl text-xl font-RoundsBlack uppercase text-center">
          Une application qui regroupe
        </h2>
      </div>
      <div className="md:grid-cols-2 grid-cols-1 grid gap-x-15 max-w-7xl w-full gap-x-28 gap-y-14 max-lg:gap-x-14">
        <div className="bg-white rounded-[20px] md:p-8 p-4 flex flex-col md:md:gap-7 gap-4 grid-container relative shadow-md hover:shadow-xl transition-shadow">
          <h3 className="w-fit font-RoundsBlack md:text-2xl text-lg relative z-10">
            Un outil de rencontre
          </h3>
          <p className="md:text-lg text-base font-Montserrat">
            Visualiser les propriétaires de chien autour de chez vous pour les
            rencontrer et programmer des activités lors de vos sorites avec
            votre toutou.
          </p>
        </div>
        <div className="bg-white rounded-[20px] md:p-8 p-4 flex flex-col md:md:gap-7 gap-4 grid-container relative shadow-md hover:shadow-xl transition-shadow">
          <h3 className="w-fit font-RoundsBlack md:text-2xl text-lg relative z-10">
            Une boutique en ligne
          </h3>
          <p className="md:text-lg text-base font-Montserrat">
            Vendre et acheter des objets d’occasion en tout genre dédiés à votre
            toutou pour faire des économies tout en respectant la planète.
          </p>
        </div>
        <div className="bg-white rounded-[20px] md:p-8 p-4 flex flex-col md:gap-7 gap-4 grid-container relative shadow-md hover:shadow-xl transition-shadow">
          <h3 className="w-fit font-RoundsBlack md:text-2xl text-lg relative z-10">
            Un blog informatif
          </h3>
          <p className="md:text-lg text-base font-Montserrat">
            Apprendre à connaître et comprendre son toutou en s’informant sur le
            bien-être animal grâce à des professionnels du monde canin.
          </p>
        </div>
        <div className="bg-white rounded-[20px] md:p-8 p-4 flex flex-col md:gap-7 gap-4 grid-container relative shadow-md hover:shadow-xl transition-shadow">
          <h3 className="font-RoundsBlack w-fit md:text-2xl text-lg relative z-10">
            Un outil de signalement
          </h3>
          <p className="md:text-lg text-base font-Montserrat">
            Signaler des faits de maltraitance pour informer les associations
            concernées et alerter notre communauté lors de la perte ou le vol de
            son toutou.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grid;
