import Benefits from "@/components/Benefits";
import Cares from "@/components/Cares";
import Hero from "@/components/Hero";
import Rocket from "@/components/Rocket";
import Vacancies from "@/components/Vacancies";
import Values from "@/components/Values";

export default function Career() {
  return (
    <>
      <div className=" relative">
        <Hero />
        <div className=" absolute h-full w-full top-[140px]">
          <Rocket />
        </div>
      </div>
      <Values />
      <Benefits />
      <Cares />
      <Vacancies />
    </>
  );
}
