import React from "react";
import { useAppSelector } from "@/hooks/reduxHooks";
import DynamicInputGenerator from "@/components/DynamicInputGenerator";
import { ResumeData } from "@/config/builderData";
import { CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Separator } from "./ui/separator";

type BuilderStepGenerator = {
  sectionName: keyof ResumeData;
};

const BuilderStepGenerator: React.FC<BuilderStepGenerator> = ({
  sectionName,
}) => {
  const sectionData = useAppSelector(
    (state) => state.resumeBuilder[sectionName]
  );

  return (
    <>
      <div className="">
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight uppercase">
          {sectionName}
        </h3>
      </div>
      <Separator className="my-4" />

      <DynamicInputGenerator
        sectionName={sectionName}
        sectionData={sectionData}
      />
    </>
  );
};

export default BuilderStepGenerator;
