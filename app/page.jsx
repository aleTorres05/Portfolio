import IntroCard from "@/components/IntroCard";
import PortfolioCard from "@/components/PortfolioCard";
import StackCard from "@/components/StackCard";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <main className="grid grid-cols-12">
        <div className="col-start-2 col-end-12 h-fit p-2">
          <IntroCard />
        </div>
        <div className="col-start-1 col-end-12 h-[100%] md:h-[150px] mt-4  ">
          <StackCard />
        </div>
        <div className="col-start-2 col-end-12 h-[100%] mt-8 md:mt-14 ">
          <PortfolioCard />
        </div>
      </main>
    </div>
  );
}
