import React from "react";
import { ResumeData } from "@/config/builderData";
import { useAppSelector } from "@/hooks/reduxHooks";
import { Card } from "@/components/ui/card";

const ResumePreview: React.FC = () => {
  const resumeData = useAppSelector(
    (state) => state.resumeBuilder
  ) as ResumeData;

  return (
    <Card className="grid grid-cols-2 h-full items-center justify-center p-6 overflow-scroll">
      {/* Contact Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <p>
          <strong>Name:</strong> {resumeData.contact.firstname.value}{" "}
          {resumeData.contact.lastname.value}
        </p>
        <p>
          <strong>Email:</strong> {resumeData.contact.email.value}
        </p>
        <p>
          <strong>Phone:</strong> {resumeData.contact.phone.value}
        </p>
        <p>
          <strong>Address:</strong> {resumeData.contact.address.value}
        </p>
        <p>
          <strong>Website:</strong> {resumeData.contact.website.value}
        </p>
      </section>

      {/* Summary Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <p>
          <strong>Title:</strong> {resumeData.summary.title.value}
        </p>
        <p>
          <strong>Description:</strong> {resumeData.summary.description.value}
        </p>
        <p>
          <strong>Objective:</strong> {resumeData.summary.objective.value}
        </p>
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
