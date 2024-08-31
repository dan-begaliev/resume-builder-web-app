import { ResumeData } from "@/config/builderData";
import { useAppSelector } from "@/hooks/reduxHooks";

function Education() {
  const resumeData = useAppSelector(
    (state) => state.resumeBuilder
  ) as ResumeData;

  return (
    <div className="flex flex-col items-start p-3 gap-2 font-normal">
      <p>{resumeData.education.institution.value}</p>
      <p>{resumeData.education.degree.value}</p>
      <p>
        {resumeData.education.startDate.value}-
        {resumeData.education.endDate.value}
      </p>

      <p>{resumeData.education.gpa.value}</p>
      <p>{resumeData.education.honors.value}</p>
    </div>
  );
}

export default Education;
