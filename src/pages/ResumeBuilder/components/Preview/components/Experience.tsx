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
          <p className="italic font-bold">JOB TITLE{exp.position.value}</p>
          <div className="flex italic">
            <p>{exp.company.value}</p>
            <p>{exp.city.value}</p>
            <p>{exp.startDate.value}</p>
            <p>{exp.endDate.value}</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus saepe, quia deserunt animi nemo iusto facere!
            Aspernatur a incidunt accusantium iste, ea saepe id fugit, odit
            dolorem quidem omnis suscipit.
            {exp.description.value}
          </p>
          <ul className="ml-6">
            <li style={{ listStyleType: "disc" }}>
              <p>walk dog{exp.responsibilities.value}</p>
            </li>
            <li style={{ listStyleType: "disc" }}>
              <p>walk dog{exp.responsibilities.value}</p>
            </li>
            <li style={{ listStyleType: "disc" }}>
              <p>walk dog{exp.responsibilities.value}</p>
            </li>
            <li style={{ listStyleType: "disc" }}>
              <p>walk dog{exp.responsibilities.value}</p>
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
