import { ResumeData } from "@/config/builderData";
import { useAppSelector } from "@/hooks/reduxHooks";

function Skills() {
  const resumeData = useAppSelector(
    (state) => state.resumeBuilder
  ) as ResumeData;

  return (
    <div className="mb-8">
      {resumeData.skills.map((skill, index) => (
        <div key={index} className="px-4 ">
          <p className="flex flex-col mb-2 items-start font-normal">
            {skill.name.value}JavaScript
          </p>
        </div>
      ))}
    </div>
  );
}

export default Skills;
