import { ResumeData } from "@/config/builderData";
import { useAppSelector } from "@/hooks/reduxHooks";

function Experience() {
  const resumeData = useAppSelector(
    (state) => state.resumeBuilder
  ) as ResumeData;
  return (
    <section>
      {resumeData.experience.map((exp, index) => (
        <div key={index} className="mb-2">
          <p className="italic font-bold">{exp.position.value}</p>
          <div className="flex italic gap-2">
            <p>{exp.company.value}</p>
            <p>{exp.city.value}</p>
            <p>{exp.startDate.value}</p>
            {exp.startDate.value && <span>-</span>}
            <p>{exp.endDate.value}</p>
          </div>
          <p>{exp.description.value}</p>
          {exp.responsibilities.value && (
            <ul className="ml-6">
              <li style={{ listStyleType: "disc" }}>
                <p>{exp.responsibilities.value}</p>
              </li>
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}

export default Experience;
