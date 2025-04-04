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
      <div className="flex flex-col gap-y-14 max-w-7xl w-full">
        <div id="rencontre" className="bg-white rounded-[20px] md:p-8 p-4 flex flex-col md:gap-7 gap-4 grid-container relative shadow-md hover:shadow-xl transition-shadow">
          <h3 className="w-fit font-RoundsBlack md:text-2xl text-lg relative z-10">
            Un outil de rencontre
          </h3>
          <p className="md:text-lg text-base font-Montserrat">
            Rejoignez la communauté des propriétaires de chiens autour de chez
            vous ! Avec l&apos;application Harmony Paws, vous pouvez rencontrer
            de nouveaux amis pour vos toutous, planifier des sorties amusantes et
            partager des expériences ensemble. C&apos;est l&apos;occasion
            parfaite de socialiser, de faire de nouvelles rencontres et de
            donner à votre chien les aventures qu&apos;il mérite !
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-28 max-lg:gap-x-14">
          <div id="formations" className="bg-white rounded-[20px] md:p-8 p-4 flex flex-col md:gap-7 gap-4 grid-container relative shadow-md hover:shadow-xl transition-shadow">
            <h3 className="w-fit font-RoundsBlack md:text-2xl text-lg relative z-10">
              Formations et conseils
            </h3>
            <p className="md:text-lg text-base font-Montserrat">
              Découvrez les secrets de votre chien avec notre formation et conseils, pour une vie heureuse et responsable, tout en respectant la planète !
            </p>
          </div>
          <div id="carnet" className="bg-white rounded-[20px] md:p-8 p-4 flex flex-col md:gap-7 gap-4 grid-container relative shadow-md hover:shadow-xl transition-shadow">
            <h3 className="w-fit font-RoundsBlack md:text-2xl text-lg relative z-10">
              Carnet de sante
            </h3>
            <p className="md:text-lg text-base font-Montserrat">
              Suivez la santé de votre chien avec notre carnet de santé en ligne ! Accédez à des informations précieuses et des conseils de professionnels pour assurer le bien-être de votre compagnon à quatre pattes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
