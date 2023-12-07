import Header from "@/components/Header";
import Body from "@/components/Body";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full flex items-center flex-col relative">
      <div className="max-w-7xl w-full">
        <Header />
      </div>
      <main className="w-full flex items-center flex-col">
        <div className="md:pr-24 md:pl-24 pl-8 pr-8 max-w-7xl">
          <div className="max-w-7xl w-full">
            <Body />
          </div>
        </div>
        <Grid />
        <Contact />
      </main>
      <div className="max-w-7xl w-full">
        <Footer />
      </div>
      <div className="absolute bottom-0 left-0 -z-10">
        <img src="/images/shared/paws-3.svg" alt="paws" />
      </div>
      <div className="absolute bottom-0 right-0 -z-10">
        <img src="/images/shared/paws-4.svg" alt="paws" />
      </div>
    </div>
  );
}
