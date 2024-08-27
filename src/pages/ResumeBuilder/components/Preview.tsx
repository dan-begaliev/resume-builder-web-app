import React from "react";
import { ResumeData } from "@/config/builderData";
import { useAppSelector } from "@/hooks/reduxHooks";
import { Card } from "@/components/ui/card";

const ResumePreview: React.FC = () => {
  const resumeData = useAppSelector(
    (state) => state.resumeBuilder
  ) as ResumeData;

  return (
    <Card className="h-full items-center justify-center p-6 overflow-scroll bg-white">
      {/* Contact Section */}
      <section className="mb-8">
        <div
          className="shadow-lg h-full p-14 border-t-[20px]  text-center"
          style={{ borderColor: "#ff6666", color: "#ff6666" }}
        >
          <div className="text-xl font-bold">
            {resumeData.contact.firstname.value}{" "}
            {resumeData.contact.lastname.value}
          </div>
          <div style={{ color: "black" }}>
            {resumeData.contact.position.value}
          </div>
          <div>{resumeData.contact.address.value}</div>
          <div className="font-normal test-sx flex justify-between">
            {" "}
            <p>{resumeData.contact.email.value}</p>
            <p>{resumeData.contact.website.value}</p>
            <p>{resumeData.contact.phone.value}</p>
          </div>
          <hr
            className="border-[1.5px] my-2"
            style={{ borderColor: "#ff6666" }}
          />
          {/* Summary Section */}
          <section className="mb-8 text-xs" style={{ color: "black" }}>
            {/* <p>
              <strong>Title:</strong> {resumeData.summary.title.value}
            </p> */}
            <div
              style={{
                color: "black",
                wordWrap: "break-word",
                textAlign:
                  "justify" /* Justify text for a more even appearance */,
                lineHeight:
                  "1.5" /* Adjust line height for better readability */,
              }}
            >
              {resumeData.summary.description.value}
            </div>
            {/* <p>
              <strong>Objective:</strong> {resumeData.summary.objective.value}
            </p> */}
          </section>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Skills</h2>
        {resumeData.skills.map((skill, index) => (
          <div key={index} className="mb-2">
            <p>
              <strong>Skill:</strong> {skill.name.value}
            </p>
            <p>
              <strong>Level:</strong> {skill.level.value}
            </p>
            <p>
              <strong>Certification:</strong> {skill.certification.value}
            </p>
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-2">
            <p>
              <strong>Institution:</strong> {edu.institution.value}
            </p>
            <p>
              <strong>Degree:</strong> {edu.degree.value}
            </p>
            <p>
              <strong>Start Date:</strong> {edu.startDate.value}
            </p>
            <p>
              <strong>End Date:</strong> {edu.endDate.value}
            </p>
            <p>
              <strong>GPA:</strong> {edu.gpa.value}
            </p>
            <p>
              <strong>Honors:</strong> {edu.honors.value}
            </p>
          </div>
        ))}
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-2">
            <p>
              <strong>Company:</strong> {exp.company.value}
            </p>
            <p>
              <strong>Position:</strong> {exp.position.value}
            </p>
            <p>
              <strong>Start Date:</strong> {exp.startDate.value}
            </p>
            <p>
              <strong>End Date:</strong> {exp.endDate.value}
            </p>
            <p>
              <strong>Description:</strong> {exp.description.value}
            </p>
            <p>
              <strong>Responsibilities:</strong> {exp.responsibilities.value}
            </p>
            <p>
              <strong>Achievements:</strong> {exp.achievements.value}
            </p>
          </div>
        ))}
      </section>
    </Card>
  );
};

export default ResumePreview;
