import MobileSoccerField from "@/components/SoccerField/MobileSoccerField";
import SoccerField from "@/components/SoccerField/SoccerField";

export default function HomePage() {
  return (
    <section className="flex justify-center items-center h-full">
      <div className="hidden md:flex w-full">
        <SoccerField />
      </div>

      <div className="flex md:hidden w-full ">
        <MobileSoccerField />
      </div>
    </section>
  );
}
