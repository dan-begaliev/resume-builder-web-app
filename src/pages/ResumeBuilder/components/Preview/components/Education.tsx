import { ResumeData } from "@/config/builderData";
import { useAppSelector } from "@/hooks/reduxHooks";

function Education() {
  const resumeData = useAppSelector(
    (state) => state.resumeBuilder
  ) as ResumeData;

  return (
    <section className="mb-8" style={{ color: "black" }}>
      <h2 className="text-xl font-bold mb-4">Education</h2>

      <div className="mb-2">
        <p>
          <strong>Institution:</strong> {resumeData.education.institution.value}
        </p>
        <p>
          <strong>Degree:</strong> {resumeData.education.degree.value}
        </p>
        <p>
          <strong>Start Date:</strong> {resumeData.education.startDate.value}
        </p>
        <p>
          <strong>End Date:</strong> {resumeData.education.endDate.value}
        </p>
        <p>
          <strong>GPA:</strong> {resumeData.education.gpa.value}
        </p>
        <p>
          <strong>Honors:</strong> {resumeData.education.honors.value}
        </p>
      </div>
    </section>
  );
}

export default Education;
