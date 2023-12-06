const Grid = () => {
  return (
    <div
      className="pr-24 pl-24  mt-20 bg-[#FDE6D7] pt-[60px] pb-[100px] w-full flex flex-col gap-10 items-center"
      id="concept"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-RoundsBlack uppercase text-center">
          Une application qui regroupe
        </h2>
      </div>
      <div className="grid-cols-2 grid gap-x-15 max-w-7xl w-full gap-x-28 gap-y-14">
        <div className="bg-white rounded-[20px] p-8 flex flex-col gap-7 grid-container relative">
          <h3 className="font-RoundsBlack text-2xl relative z-10">
            Un outil de rencontre
          </h3>
          <p className="text-lg">
            Visualiser les propriétaires de chien autour de chez vous pour les
            rencontrer et programmer des activités lors de vos sorites avec
            votre toutou.
          </p>
        </div>
        <div className="bg-white rounded-[20px] p-8 flex flex-col gap-7 grid-container relative">
          <h3 className="font-RoundsBlack text-2xl relative z-10">
            Une marketplace
          </h3>
          <p className="text-lg">
            Vendre et acheter des objets d’occasion en tout genre dédiés à votre
            toutou pour faire des économies tout en respectant la planète.
          </p>
        </div>
        <div className="bg-white rounded-[20px] p-8 flex flex-col gap-7 grid-container relative">
          <h3 className="font-RoundsBlack text-2xl relative z-10">
            Un blog informatif
          </h3>
          <p className="text-lg">
            Apprendre à connaître et comprendre son toutou en s’informant sur le
            bien-être animal grâce à des professionnels du monde canin.
          </p>
        </div>
        <div className="bg-white rounded-[20px] p-8 flex flex-col gap-7 grid-container relative">
          <h3 className="font-RoundsBlack text-2xl relative z-10">
            Un outil de signalement
          </h3>
          <p className="text-lg">
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
