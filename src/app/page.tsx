import Header from "@/components/Header";
import Body from "@/components/Body";

export default function Home() {
  return (
    <main className="w-full flex items-center flex-col">
      <div className="max-w-7xl w-full">
        <Header />
        <Body />
      </div>
      <div className="pr-24 pl-24  mt-14 bg-[#FDE6D7] pt-[60px] pb-[100px] w-full flex flex-col gap-10 items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-RoundsBlack uppercase text-center">
            Une application qui regroupe
          </h2>
        </div>
        <div className="grid-cols-2 grid gap-x-15 max-w-7xl w-full gap-x-28 gap-y-14">
          <div className="bg-white rounded-[20px] p-8 flex flex-col gap-7 grid-container relative">
            <h3 className="font-RoundsBlack text-2xl">Un outil de rencontre</h3>
            <p className="text-lg">
              Visualiser les propriétaires de chien autour de chez vous pour les
              rencontrer et programmer des activités lors de vos sorites avec
              votre toutou.
            </p>
          </div>
          <div className="bg-white rounded-[20px] p-8 flex flex-col gap-7 grid-container relative">
            <h3 className="font-RoundsBlack text-2xl">Un outil de rencontre</h3>
            <p className="text-lg">
              Visualiser les propriétaires de chien autour de chez vous pour les
              rencontrer et programmer des activités lors de vos sorites avec
              votre toutou.
            </p>
          </div>
          <div className="bg-white rounded-[20px] p-8 flex flex-col gap-7 grid-container relative">
            <h3 className="font-RoundsBlack text-2xl">Un outil de rencontre</h3>
            <p className="text-lg">
              Visualiser les propriétaires de chien autour de chez vous pour les
              rencontrer et programmer des activités lors de vos sorites avec
              votre toutou.
            </p>
          </div>
          <div className="bg-white rounded-[20px] p-8 flex flex-col gap-7 grid-container relative">
            <h3 className="font-RoundsBlack text-2xl">Un outil de rencontre</h3>
            <p className="text-lg">
              Visualiser les propriétaires de chien autour de chez vous pour les
              rencontrer et programmer des activités lors de vos sorites avec
              votre toutou.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
