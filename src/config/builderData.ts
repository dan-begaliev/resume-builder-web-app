// Defining the types for each data block with inputType and value

export type Field = {
  inputType: "text" | "textarea" | "select" | "number" | "calendar";
  value: string | number;
  label: string;
};

type ContactData = {
  firstname: Field;
  lastname: Field;
};

export const contactData: ContactData = {
  firstname: { inputType: "text", value: "", label: "First Name" },
  lastname: { inputType: "text", value: "", label: "Last Name" },
};

type SummaryData = {
  title: Field;
  description: Field;
};

export const summaryData: SummaryData = {
  title: { inputType: "text", value: "", label: "Title" },
  description: { inputType: "text", value: "", label: "Description" },
};

type Skills = {
  name: Field;
  level: Field;
};

export const skillsData: Skills[] = [
  {
    name: { inputType: "text", value: "", label: "Skill" },
    level: { inputType: "number", value: 0, label: "Level" },
  },
];

type Education = {
  institution: Field;
  degree: Field;
  startDate: Field;
  endDate: Field;
};

export const educationData: Education[] = [
  {
    institution: { inputType: "text", value: "", label: "Institution" },
    degree: { inputType: "text", value: "", label: "Degree" },
    startDate: { inputType: "calendar", value: "", label: "Start Date" },
    endDate: { inputType: "calendar", value: "", label: "End Date" },
  },
];

type Experience = {
  company: Field;
  position: Field;
  startDate: Field;
  endDate: Field;
  description: Field;
};

export const experienceData: Experience[] = [
  {
    company: { inputType: "text", value: "", label: "Company" },
    position: { inputType: "text", value: "", label: "Position" },
    startDate: { inputType: "calendar", value: "", label: "Start Date" },
    endDate: { inputType: "calendar", value: "", label: "End Date" },
    description: { inputType: "text", value: "", label: "Description" },
  },
];
