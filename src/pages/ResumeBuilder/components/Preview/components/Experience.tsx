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
          <p className="italic font-bold">JOB TITLE{exp.company.value}</p>
          <div className="flex italic">
            <p>Microsoft |{exp.position.value}</p>
            <p>Los Angeles |{exp.city.value}</p>
            <p>03/2021 - {exp.startDate.value}</p>
            <p>06/2024{exp.endDate.value}</p>
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
