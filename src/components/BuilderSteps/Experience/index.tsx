import { useAppSelector } from "@/hooks/reduxHooks";
import { RootState } from "@/store";
import DynamicInputGenerator from "@/components/DynamicInputGenerator";

export default function Experience() {
  const experience = useAppSelector(
    (state: RootState) => state.resumeBuilder.experience
  );

  return (
    <div className="grid grid-flow-col gap-6 w-full">
      <DynamicInputGenerator
        sectionName="experience"
        sectionData={experience}
      />
    </div>
  );
}
