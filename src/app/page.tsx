import Header from "@/components/Header";
import Body from "@/components/Body";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full flex items-center flex-col">
      <div className="max-w-7xl w-full">
        <Header />
      </div>
      <main className="w-full flex items-center flex-col">
        <div className="pr-24 pl-24">
          <div className="max-w-7xl w-full">
            <Body />
          </div>
        </div>
        <Grid />
      </main>
      <div className="max-w-7xl w-full">
        <Footer />
      </div>
    </div>
  );
}
