// Defining the types for each data block with inputType and value

export type Field = {
  inputType:
    | "text"
    | "textarea"
    | "select"
    | "number"
    | "calendar"
    | "email"
    | "phone"
    | "url"
    | "radio"
    | "checkbox";
  value: string | number | boolean;
  label: string;
  options?: string[]; // For select, radio, and checkbox inputs
};

type ContactData = {
  firstname: Field;
  lastname: Field;
  email: Field;
  phone: Field;
  address: Field;
  website: Field;
};

export const contactData: ContactData = {
  firstname: { inputType: "text", value: "", label: "First Name" },
  lastname: { inputType: "text", value: "", label: "Last Name" },
  email: { inputType: "email", value: "", label: "Email" },
  phone: { inputType: "phone", value: "", label: "Phone Number" },
  address: { inputType: "textarea", value: "", label: "Address" },
  website: { inputType: "url", value: "", label: "Website" },
};

type SummaryData = {
  title: Field;
  description: Field;
  objective: Field;
};

export const summaryData: SummaryData = {
  title: { inputType: "text", value: "", label: "Title" },
  description: { inputType: "textarea", value: "", label: "Description" },
  objective: { inputType: "textarea", value: "", label: "Objective" },
};

type Skills = {
  name: Field;
  level: Field;
  certification: Field;
};

export const skillsData: Skills[] = [
  {
    name: { inputType: "text", value: "", label: "Skill" },
    level: { inputType: "number", value: 0, label: "Level" },
    certification: { inputType: "text", value: "", label: "Certification" },
  },
];

type Education = {
  institution: Field;
  degree: Field;
  startDate: Field;
  endDate: Field;
  gpa: Field;
  honors: Field;
};

export const educationData: Education[] = [
  {
    institution: { inputType: "text", value: "", label: "Institution" },
    degree: { inputType: "text", value: "", label: "Degree" },
    startDate: { inputType: "calendar", value: "", label: "Start Date" },
    endDate: { inputType: "calendar", value: "", label: "End Date" },
    gpa: { inputType: "number", value: "", label: "GPA" },
    honors: { inputType: "textarea", value: "", label: "Honors & Awards" },
  },
];

export type Experience = {
  company: Field;
  position: Field;
  startDate: Field;
  endDate: Field;
  description: Field;
  responsibilities: Field;
  achievements: Field;
};

export const experienceData: Experience[] = [
  {
    company: { inputType: "text", value: "", label: "Company" },
    position: { inputType: "text", value: "", label: "Position" },
    startDate: { inputType: "calendar", value: "", label: "Start Date" },
    endDate: { inputType: "calendar", value: "", label: "End Date" },
    description: { inputType: "textarea", value: "", label: "Description" },
    responsibilities: {
      inputType: "textarea",
      value: "",
      label: "Responsibilities",
    },
    achievements: { inputType: "textarea", value: "", label: "Achievements" },
  },
];

export type ResumeData = {
  contact: typeof contactData;
  summary: typeof summaryData;
  skills: typeof skillsData;
  education: typeof educationData;
  experience: typeof experienceData;
};
