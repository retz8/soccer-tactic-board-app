import GridButton from "@/components/Home/GridButton";
import MobileSoccerField from "@/components/SoccerField/MobileSoccerField";
import SoccerField from "@/components/SoccerField/SoccerField";
import { SoccerFieldProvider } from "@/contexts/SoccerFieldProvider";

export default function HomePage() {
  return (
    <section className="flex justify-center items-center h-full">
      <div className="flex flex-col items-center w-full">
        <SoccerFieldProvider>
          <div className="flex justify-center items-center gap-2">
            <GridButton direction="vertical" />
            <GridButton direction="horizontal" />
          </div>

          <div className="hidden md:flex w-full">
            <SoccerField />
          </div>
        </SoccerFieldProvider>
      </div>

      <div className="flex md:hidden w-full">
        <MobileSoccerField />
      </div>
    </section>
  );
}
